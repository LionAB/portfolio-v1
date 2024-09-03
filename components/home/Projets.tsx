import { projets } from "@/data/projets";
import { PinContainer } from "../ui/PinContainer";
import { ArrowRight } from 'lucide-react';

export default function Projets() {
    return (
        <div className="py-20">
        <h1 className="heading">
            Une petite selection de {' '}
            <span className="text-blue-500">projets récents</span>
        </h1>
        <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
            {projets.map(({id,title,des,img,link,iconLists}) => (
                <div key={ id} >
                <div 
                className="lg:min-h[32.5rem] h-[25rem] flex items-center justify-center
                sm:w-96 w-[80vw]" >
                    <PinContainer title={link} href={link}>
                        <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                            <div className="relative w-full h-full overflow-hidden lg-rounded-3xl bg-black">
                                <img src="/bg.png"  alt="bg img"/>
                            </div>
                            <img src={img} alt={title} className="z-10 absolute bottom-0"/>
                        </div>
                        <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                        {title} 
                        </h1>
                        <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">{des}</p>
                        <div className="flex items-center justify-between mt-7 mb-3">
                        <div className="flex items-center">
                            {iconLists.map((icon,index) => (
                                <div key={icon} className="border border-white/[0.2] rounded-full dark:bg-black bg-[#dce4fa] lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                                style={{
                                    transform :`translateX(-${5*index*2}px)`
                                    }} >
                                    <img src={icon} alt={icon} className="p-2"/>
                                    
                                </div>
                            ))}
                        </div>
                       
                            <p className="flex lg:text-xl md:text-xs text-sm text-blue-500">Visiter le site</p>
                            <ArrowRight color="rgb(59 130 246)" className="ms-3"/> 
                        </div>
                    </PinContainer>
                    

                </div></div>
            ))}
            
        </div>
        </div>
    );
}