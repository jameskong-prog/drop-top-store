import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("receipt") as File;
    const method = formData.get("method") as string;

    if (!file) return NextResponse.json({ error: "No file" }, { status: 400 });

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    
    const filename = `${Date.now()}-${file.name.replaceAll(" ", "_")}`;
    const filepath = path.join(process.cwd(), "public", "receipts", filename);
    
    await writeFile(filepath, buffer);
    const fileUrl = `/receipts/${filename}`; 

    // Look for both common Medusa cart cookie names just to be safe!
    const cookieStore = cookies();
    const cartId = cookieStore.get("_medusa_cart_id")?.value || cookieStore.get("cart_id")?.value;

    if (cartId) {
      console.log(`Attaching receipt to Cart ID: ${cartId}`);
      
      const medusaReq = await fetch(`${process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL}/store/carts/${cartId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-publishable-api-key": process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY || "",
        },
        body: JSON.stringify({
          metadata: {
            receipt_url: fileUrl,
            transfer_method: method
          }
        })
      });

      if (!medusaReq.ok) {
        const errorText = await medusaReq.text();
        console.error("❌ Medusa DB Update Failed:", errorText);
      } else {
        console.log("✅ Metadata saved perfectly!");
      }
    } else {
      console.error("❌ No Cart ID cookie found in browser!");
    }

    return NextResponse.json({ success: true, url: fileUrl });
    
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}