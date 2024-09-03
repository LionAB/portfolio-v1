import React from 'react'
import {dataExperience} from '../data/dataExperience';
import { IoIosSchool } from "react-icons/io";
import { MdOutlineWork } from "react-icons/md";
import { Dot } from 'lucide-react';

interface TimeLine1Props {
  data: IExperience[]; // Le composant attend un tableau d'expériences en tant que props
}

const TimeLine1: React.FC<TimeLine1Props> = ({ data }) => {
  
  return (
    <div className="flex  items-center justify-center sm:px-12 md:px-40 px-4">
  <div className="space-y-6 border-l-2 border-dashed border-slate-400">
    
    <ol className="relative border-s border-gray-200 dark:border-gray-700">                  

    {data.map((experience:IExperience) => (
        <li key={experience.id} className="mb-10 ms-8">  
        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
        {experience.type === 'work' ?  <MdOutlineWork className='absolute -top-0.5 z-10  mt-0.5 h-6 w-4 rounded-full  text-blue-800 dark:text-blue-300'/> : <IoIosSchool className='absolute -top-0.5 z-10 mt-0.5 h-6 w-4 rounded-full  text-blue-800 dark:text-blue-300'/>        }
        </span>

        <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
          {experience.title} 
          {(experience.id ==1) && <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">Latest</span>}
        </h3>

        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{experience.year}</time>
        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{experience.description}</p>
        <ul className="mb-4 space-y-2 text-sm font-normal text-gray-500 dark:text-gray-400">
          {experience.tasks.map((task:string) => (
            <li key={task} className="relative pl-6">
              <Dot className="absolute top-0 left-0 flex items-center justify-center "/>
              {task}
            </li>
          ))}
          </ul>
          <div className="flex items-center">
                            {experience.tech.map((tech) => (
                                <span key={tech.id} className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">{tech.name}</span>
                            ))}
                        </div>
       </li>
    ))
    }
</ol>


     <div className="relative w-full">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-blue-800">
        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
      </svg>
      
    </div>
   
  </div>
</div>
  )
}

export default TimeLine1