"use client";

import HeroSection from "@/components/home/hero-section";
import TimeLine1 from "@/components/TimeLine1";
import dynamic from 'next/dynamic';
import Grid from "@/components/Grid";
import { useEffect } from "react";
import { ArrowDown } from 'lucide-react';
import Projets from "@/components/home/Projets";
import { workExperience,schoolExperience } from "@/data/dataExperience";

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
      <div className="h-10">
        <div className="sm:hidden">
        <span className="text-neutral-600 dark:text-neutral-200 text-base  mb-2">Voir plus</span>
      <ArrowDown/> </div>
      </div>
      <section id="about" className="px-4 relative h-100 mx-auto">
        <Grid/>
      </section>
      <div className="h-10">
       
      </div>
      <section id="experiences" className="flex flex-col gap-10 ">
        <h1 className="text-blue-800 text-2xl text-bold ">Experiences professionnelles</h1>
        <TimeLine1 data={workExperience}/>
        <h1 className="text-blue-800 text-2xl text-bold ">Education </h1>
        <TimeLine1 data={schoolExperience}/>
      </section>
      <section id="projets">
        <Projets/>
      </section>
      <section id="contact">
        Contact Me
      </section>
    </div>
    </Gradientdiv>
  );
}
