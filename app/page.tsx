'use client';

import Silk from "@/components/Silk";
import ShinyText from '@/components/ShinyText';

export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <Silk 
          speed={5}
          scale={1}
          color="#424242"
          noiseIntensity={1.5}
          rotation={0}
        />
      </div>
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        <h1 className="font-[family-name:var(--font-urbanist)] text-4xl md:text-9xl mt-28 md:mt-0 font-bold text-white">

            <ShinyText
              text="Coming Soon."
              speed={4}
              delay={0}
              color="#0ed5ec"
              shineColor="#53eab2"
              spread={120}
              direction="left"
              yoyo={false}
              pauseOnHover={false}
              className="min-h-[150px]"
            />
        </h1>
      </div>
    </div>
  );
}
