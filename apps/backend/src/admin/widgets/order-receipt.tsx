import { defineWidgetConfig } from "@medusajs/admin-sdk"
import { Container, Heading, Text } from "@medusajs/ui"

// The widget component receives the `order` data automatically
const OrderReceiptWidget = ({ data: order }: any) => {
  // Grab the data we saved during the checkout process
  const receiptUrl = order?.metadata?.receipt_url as string
  const transferMethod = order?.metadata?.transfer_method as string

  // If there is no receipt, don't show the widget at all
  if (!receiptUrl) {
    return null
  }

  // Because the image is saved in the storefront's public folder, 
  // we need to point the image source to your storefront URL (Port 8000)
  const fullImageUrl = `http://localhost:8000${receiptUrl}`

  return (
    <Container className="p-4 mb-4">
      <Heading level="h2" className="mb-2">Customer Payment Receipt</Heading>
      <Text className="text-ui-fg-subtle mb-4">
        Transfer Method: <span className="font-bold">{transferMethod || "FPS"}</span>
      </Text>
      
      {/* Display the uploaded image */}
      <div className="mt-4 rounded-lg overflow-hidden border border-ui-border-base w-full max-w-md">
        <img 
          src={fullImageUrl} 
          alt="Payment Receipt" 
          style={{ width: '100%', height: 'auto', display: 'block' }} 
        />
      </div>

      <div className="mt-4">
        <a 
          href={fullImageUrl} 
          target="_blank" 
          rel="noreferrer"
          className="text-blue-500 hover:underline"
        >
          Open Image in New Tab
        </a>
      </div>
    </Container>
  )
}

// This config tells Medusa exactly where to inject your widget!
// "order.details.after" means it will show up at the bottom of the Order details page.
export const config = defineWidgetConfig({
  zone: "order.details.after",
})

export default OrderReceiptWidget