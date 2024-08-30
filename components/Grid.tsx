 import { Calendar } from "@/components/ui/calendar";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";
import { BentoCard, BentoGrid2 } from "@/components/magicui/BentoGrid2";
import Marquee from "@/components/magicui/marquee";
import { CalendarIcon, FileTextIcon, InputIcon,LaptopIcon } from "@radix-ui/react-icons";
import { Share2Icon } from "lucide-react";
import { useEffect,useState } from "react";
import { addDays } from "date-fns";
 import { fr } from "date-fns/locale";
import { Content } from "@radix-ui/react-select";
const date =({ from: new Date(2024, 9, 1, 0, 0, 0), // Date de début initiale
  to: addDays(new Date(2025, 10, 1, 0, 0, 0), 20),})
 

const files = [
  {
    name: "RH Solutions - Développeur web",
    list:[
    {
     content: "Maintenance et évolution ERP",
    },
    {
      content: "Création système note de frais",
     },
     {
      content: "Création système signature électronique",
     },
    
   
    ]
  },
  {
    name: "Ynov - Mastère Expert Informatique",
    
    list:[
      {
       content: "Cloud AWS et Azure",
      },
      {
        content: "Intégration continue et déploiement continu",
       },
       {
        content: "Architecture logiciel",
       },
      ]
  },
  {
    name: "Ynov - Bachelor Technicien Informatique",
    
    list:[
      {
       content: "Conteneurisation Docker et Kubernetes",
      },
      {
        content: "Base de donées NoSQL MongoDB",
       },
       {
        content: "Développement web et mobile",
       },
      ]
  }
];

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}


const features = [
  {
    Icon: FileTextIcon,
    name: "Experiences",
    description: "Consultez mes experiences ",
    href: "/#experiences",
    cta: "CV / Experiences",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_0%,#000_100%)] "
      >
        {files.map((f, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-72 cursor-pointer overflow-hidden rounded-xl border p-4",
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
              "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none",
            )}
          >
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-col">
                <figcaption className="text-sm font-medium dark:text-white ">
                  {f.name}
                </figcaption>
              </div>
            </div>
            <blockquote className="mt-2 text-xs">
            <ul className="mt-2 text-xs">
              {f.list.map((l, idx) => (
                <li key={idx} className="flex items-center gap-1">
                  <span className="text-gray-500 dark:text-gray-400">-</span>
                  <span>{l.content}</span>
                </li>
              ))}
            </ul></blockquote>
          </figure>
        ))}
      </Marquee>
    ),
  },
  {
    Icon: LaptopIcon,
    name: "Des compétences en développement web",
    description: "Recherchez parmi mes compétences",
    href: "/",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
    
      <Command className="absolute right-10 top-10 w-[70%] translate-x-0 border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_0%,#000_100%)] group-hover:-translate-x-10">
        <CommandInput placeholder="Rechercher..." />
        <CommandList>
          <CommandEmpty>En Apprentissage</CommandEmpty>
            <CommandItem>PHP</CommandItem>
            <CommandItem>ReactJS</CommandItem>
            <CommandItem>Docker</CommandItem>
            <CommandItem>NESTJS</CommandItem>
            <CommandItem>CI/CD</CommandItem>
        </CommandList>
      </Command>
    ),
  },
  {
    Icon: Share2Icon,
    name: "Integrations",
    description: "Supports 100+ integrations and counting.",
    href: "/",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <div className="absolute right-2 top-4 h-[300px] w-[600px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },
  {
    Icon: CalendarIcon,
    name: "Me contacter",
    description: "Disponible dès octobre 2024.",
    className: "col-span-3 lg:col-span-1",
    href: "/#contact",
    cta: "Contactez-moi",
    background: (
      <Calendar
        mode="range"
        defaultMonth={date?.from}
        locale={fr}
        selected={ date}
        className="absolute right-0 top-10 origin-top rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-105"
      />
    ),
  },
];

export default function Grid() {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <BentoGrid2 className="px-16">
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid2>
  );
}

