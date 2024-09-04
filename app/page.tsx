"use client";

import HeroSection from "@/components/home/hero-section";
import TimeLine1 from "@/components/TimeLine1";
import dynamic from 'next/dynamic';
import Grid from "@/components/Grid";
import { useEffect } from "react";
import { ArrowDown } from 'lucide-react';
import Projets from "@/components/home/Projets";
import { workExperience,schoolExperience } from "@/data/dataExperience";
import ContactForm from "@/components/main/contactForm";

const Gradientdiv = dynamic(() => import('@/components/Gradientdiv'), { ssr: false });
export default function Page({ children}: {
  children: React.ReactNode
}) {
  useEffect(() => window.scrollTo(0, 0), []);

  return ( 
  <Gradientdiv className="w-full h-full " >
    
      <div id="home" className="">
      <section id="intro" className="md:py-40 flex items-center justify-center">
       <HeroSection />
      </section>
      <div className="h-20">
  
      </div>
      <section id="about" className="px-4 relative h-100 mx-auto">
        <Grid/>
      </section>
      <div className="h-20">
       
      </div>
      <section id="experiences" className="flex flex-col gap-10 ">
        <h1 className="heading">Experiences {' '} <span className="text-blue-500">professionnelles</span></h1>
        <TimeLine1 data={workExperience}/>
        <h1 className="heading">Parcours {' '} <span className="text-blue-500">éducatif</span> </h1>
        <TimeLine1 data={schoolExperience}/>
      </section>
      <section id="projets">
        <Projets/>
      </section>
      <section id="contact" className="flex flex-col gap-10">
      <h1 className="heading">Me {' '} <span className="text-blue-500">contacter</span></h1>
        <ContactForm/>
      </section>
    </div>
    </Gradientdiv>
  );
}
