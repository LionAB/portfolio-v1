import { projets } from "@/data/projets";
import { PinContainer } from "../ui/PinContainer";
import { ArrowRight } from 'lucide-react';
import { FaLocationArrow } from "react-icons/fa";
import { useState } from "react";
import { ProjetDrawer } from "../ProjetDrawer";

export default function Projets() {
    const [isDrawerOpen, setDrawerOpen] = useState(false);
    const [selectedProjet, setSelectedProjet] = useState<IProjet | null>(null);

    const handlePinClick = (projet:IProjet) => {
        console.log('handlePinClick', projet);
        console.log('open',isDrawerOpen);
        setSelectedProjet(projet);
        setDrawerOpen(true);
    };
    return (
        <div className="py-20">
        <h1 className="heading">
            Sélection de {' '}
            <span className="text-blue-500">projets récents</span>
        </h1>
        <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
            {projets.map((projet) => (
                <div className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
                    key={projet.id} 
                    >
        
                    <PinContainer projet={projet}  onClick={() => handlePinClick(projet)}>
                        <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                            <div className="relative w-full h-full overflow-hidden lg-rounded-3xl bg-black">
                                <img src="/bg.png"  alt="bg img"/>
                            </div>
                            <img src={projet.img} alt={projet.title}  className="z-10 absolute bottom-0"/>
                        </div>
                        <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                        {projet.title} 
                        </h1>
                        <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                         style={{
                            margin: "1vh 0",
                            }}
                        >{projet.des}
                        </p>
                        <div className="flex items-center justify-between mt-7 mb-3">
                        <div className="flex items-center">
                            {projet.iconLists.map((icon,index) => (
                                <div 
                                key={index} 
                                className="border border-white/[0.2] rounded-full dark:bg-black bg-[#dce4fa] lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                                style={{
                                    transform :`translateX(-${5*index+2}px)`
                                    }} >
                                    <img src={icon} alt={icon} className="p-2"/>
                                    
                                </div>
                            ))}
                        </div>
                        {/* <div className="flex justify-center items-center">
                            <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                                Check Live Site
                            </p>
                            <FaLocationArrow className="ms-3 text-blue-800" />
                        </div> */}
                            <p className="flex lg:text-xl md:text-xs text-sm text-blue-500">Voir plus</p>
                            <ArrowRight color="rgb(59 130 246)" className="ms-3" /> 
                        </div>
                    </PinContainer>
                    

                </div>))}
                 {/* Drawer */}
            {selectedProjet && (
                <ProjetDrawer
                    isDrawerOpen={isDrawerOpen}
                    setIsDrawerOpen={setDrawerOpen}
                    projet={selectedProjet}
                />
            )}
                </div>
            
            
        </div>
        
       
    );
}