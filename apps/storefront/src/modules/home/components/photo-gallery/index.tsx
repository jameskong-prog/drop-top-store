import React from "react"

const PhotoGallery = () => {
  const photos = [
    "/gallery/event1.jpg",
    "/gallery/event2.jpg",
    "/gallery/event3.jpg",
  ]

  return (
    <div className="py-16 border-b border-[#9BE3F4] bg-white">
      <div className="content-container">
        
        <h2 className="text-3xl-semi mb-10 text-center uppercase tracking-widest text-[#9BE3F4]">
          &gt; SYS.GALLERY // EVENT LOGS
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {photos.map((photo, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden rounded-md border border-[#9BE3F4] group transition-all duration-300 hover:shadow-[0_8px_20px_rgba(155,227,244,0.2)]"
            >
              <img 
                src={photo} 
                alt={`Drop Top Event ${index + 1}`} 
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              <div className="absolute bottom-0 left-0 w-full bg-white/95 p-3 border-t border-[#9BE3F4]">
                <p className="text-sm font-bold text-[#9BE3F4]">&gt; FILE_0{index + 1}.DAT</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default PhotoGallery