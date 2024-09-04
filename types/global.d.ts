export{}

declare global {
    interface ITech{
        id:number;
        name:string;
        icon:string;
    }
    interface IExperience {
        id: number;
        type: 'work' | 'school',
        title: string;
        structure?:string;
        image?:string;
        description: string;
        tasks:string[]
        year: string;
        tech: ITech[];
        
    }

    interface IProjet {
        id: number;
        title: string;
        des: string;
        img: string;
        iconLists: string[];
        link: string;
    }
}