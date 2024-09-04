"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { ScrollArea } from "@/components/ui/scroll-area"
import {SquareArrowOutUpRight,X } from 'lucide-react';
import Link from 'next/link';

interface RightResponsiveScrollableDrawerProps {
  isDrawerOpen: boolean;
  setIsDrawerOpen: (open: boolean) => void;
  projet: IProjet;
  
}

export function ProjetDrawer({ isDrawerOpen, setIsDrawerOpen, projet }: RightResponsiveScrollableDrawerProps) {
  

  const handleOpenChange = (open: boolean) => {
    console.log('handleOpenChange', open);
    console.log('projet',projet);
    setIsDrawerOpen(open);
  };
  if (!projet) return null;
  return (
    <Drawer direction="right" open={isDrawerOpen} onOpenChange={handleOpenChange}>
      <DrawerContent  className="h-full w-full md:w-[60vw]">
         <DrawerHeader className="flex flex-row gap-1.5 justify-between">
         <div> 
          <DrawerTitle>{projet.title}</DrawerTitle>
          <DrawerDescription>{projet.des}</DrawerDescription>
          </div>
         <div><DrawerClose asChild className="hover:text-red-700"><X /></DrawerClose></div>
         
        </DrawerHeader>
        
        <ScrollArea className="flex-1 px-4">
          <div className="space-y-4">
            <div className="bg-muted p-4 rounded-md">
              <img src={projet.img} alt={projet.title} className="w-full h-auto mb-4" />
              <p>
                Voici les détails du projet <strong>{projet.title}</strong>.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                Lorem
              </div>
              <a href={projet.link} className="text-blue-500 mt-4 block" target="_blank" rel="noopener noreferrer">
                Visiter le site
              </a>
            </div>
          </div>
        </ScrollArea>
        <DrawerFooter className="flex flex-row self-end">
        <Link
          href={projet.link}
          target="_blank"
          className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          prefetch={false}
        >
          Visiter
          <SquareArrowOutUpRight className="ml-2 h-4 w-4" />
        </Link>
          
          <DrawerClose asChild>
            <Button variant="destructive" className=" hover:bg-red-400">Fermer</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}