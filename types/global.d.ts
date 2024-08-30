export{}

declare global {
    interface ITech{
        id:number;
        name:string;
        icon:string;
    }
    interface IExperience {
        id: number;
        type: string;
        title: string;
        description: string;
        year: string;
        tech: ITech[];
        
    }
}