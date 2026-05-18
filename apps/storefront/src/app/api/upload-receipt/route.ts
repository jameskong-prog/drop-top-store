import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  try {
    // 1. Receive the file from the frontend
    const formData = await request.formData();
    const file = formData.get("receipt") as File;
    const method = formData.get("method") as string;

    if (!file) {
      return NextResponse.json({ error: "No file received." }, { status: 400 });
    }

    // 2. Convert and save the file to public/receipts
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    
    // Create a unique filename (e.g., 17000000-receipt.jpg)
    const filename = `${Date.now()}-${file.name.replaceAll(" ", "_")}`;
    const filepath = path.join(process.cwd(), "public", "receipts", filename);
    
    await writeFile(filepath, buffer);
    const fileUrl = `/receipts/${filename}`; // The public link to the image

    // 3. Find out which cart this belongs to
    // FIXED: Added 'await' here for Next.js 15 compatibility
    const cookieStore = await cookies();
    const cartId = cookieStore.get("_medusa_cart_id")?.value;

    // 4. Secretly update the Medusa Cart Metadata!
    if (cartId) {
      await fetch(`${process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL}/store/carts/${cartId}`, {
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
    }

    // 5. Tell the frontend it was a success!
    return NextResponse.json({ success: true, url: fileUrl });
    
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}