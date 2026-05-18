import { Metadata } from "next"

import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import PhotoGallery from "@modules/home/components/photo-gallery" // 👈 1. Imported your gallery here
import { listCollections } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"

// 👈 2. Updated the browser tab title to fit your brand!
export const metadata: Metadata = {
  title: "DROP TOP | Secure Ticketing",
  description:
    "Exclusive event access and secure ticketing system.",
}

export default async function Home(props: {
  params: Promise<{ countryCode: string }>
}) {
  const params = await props.params

  const { countryCode } = params

  const region = await getRegion(countryCode)

  const { collections } = await listCollections({
    fields: "id, handle, title",
  })

  if (!collections || !region) {
    return null
  }

  return (
    <>
      <Hero />
      <PhotoGallery /> {/* 👈 3. Injected the gallery right below the Hero! */}
      <div className="py-12">
        <ul className="flex flex-col gap-x-6">
          <FeaturedProducts collections={collections} region={region} />
        </ul>
      </div>
    </>
  )
}