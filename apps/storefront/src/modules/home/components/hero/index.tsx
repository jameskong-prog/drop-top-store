import React from "react"

const Hero = () => {
  return (
    <div className="h-[75vh] w-full border-b border-[#9BE3F4] bg-white relative flex items-center justify-center text-center">
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center p-8 gap-6">
        
        {/* White box with Cyan border and subtle glow */}
        <div className="border border-[#9BE3F4] bg-white p-10 shadow-[0_4px_20px_rgba(155,227,244,0.15)]">
          
          <h1 
            className="text-5xl md:text-7xl uppercase tracking-widest text-[#9BE3F4] mb-6"
            style={{ textShadow: "0 0 5px rgba(155, 227, 244, 0.3)" }}
          >
            DROP TOP
          </h1>
          
          <div className="text-lg md:text-xl text-[#9BE3F4] text-left w-full border-t border-[#9BE3F4] pt-6 mt-2">
            <p>&gt; INITIATING EVENT PROTOCOL...</p>
            <p>&gt; SECURE TICKETING SYSTEM ONLINE.</p>
            <p className="animate-pulse mt-4">&gt; STATUS: ACCESS GRANTED_</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Hero