import { cn } from "@/lib/utils";
import { TypewriterEffectDemo } from "./type-writer-effect";
import Image from "next/image";
import { Spotlight } from "../ui/Spotlight";
export default function HeroSection() {
  return (
  
    <div className="flex flex-col md:flex-row md:content-center mt-5 relative w-full ">
     
     <div className=" w-full md:w-[70%] p-8 order-2 md:order-1">
       <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white"/>
{/*         <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue"/>
 */}      </div>
      <TypewriterEffectDemo/>
  
     </div>
     <div className=" sm:mt-10 mb-10 md:w-fit flex items-center justify-center md:justify-end order-1 md:order-2 md:align-top " >
        <Image
          className=" rounded-full ring-2 ring-gray-300 dark:ring-gray-500 shadow-xl dark:shadow-gray-800 md:align-top"
          src="/me2.jpg"
          alt="Photo de Lionel Abatan"
          width={250}
          height={250}
        />
      </div>
    </div>

  );
}