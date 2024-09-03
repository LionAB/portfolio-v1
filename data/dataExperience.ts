
export const dataExperience: IExperience[] = [
    {
        id: 1,
        type:'work', 
        title: 'Alternant Développeur Web FullStack',
        structure:'RH Solutions',
        description: 'Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis ante.',
        tasks : ['Développement de nouvelles fonctionnalités','Maintenance et correction de bugs','Création de nouvelles interfaces'],
        year: "Octobre 2021- Septembre 2024",
        tech: [{id:1,name:'PHP',icon:'PHP.svg'},{id:2,name:'JQuery',icon:'jQuery.svg'},{id:3,name:'Javascript',icon:'JavaScript.svg'}]
    },
    {
        id: 2,
        type:'school',
        title: 'Mastère 2 Expert Informatique Spécialité Développement Web (Bac+5)',
        structure:'Toulouse Ynov Campus',
        description: 'Aliquam tincidunt malesuada tortor vitae iaculis. In eu turpis iaculis, feugiat risus quis, aliquet urna. Quisque fringilla mollis risus, eu pulvinar dolor.',
        tasks : ['Développement de nouvelles fonctionnalités','Maintenance et correction de bugs','Création de nouvelles interfaces'],
        year: "2024",
        tech: [{id:1,name:'React',icon:''},{id:2,name:'Angular',icon:''},{id:3,name:'NestJS',icon:''},{id:4,name:'Django',icon:''},{id:5,name:'NodeJS',icon:''},]
    },
    {
        id: 3,
        type: 'school',
        title: 'Bachelor 3 Technicien Informatique Spécialité Développement Web. (Bac+3)',
        structure:'Toulouse Ynov Campus',
        description: 'Aliquam tincidunt malesuada tortor vitae iaculis. In eu turpis iaculis, feugiat risus quis, aliquet urna. Quisque fringilla mollis risus, eu pulvinar dolor',
        tasks : ['Développement de nouvelles fonctionnalités','Maintenance et correction de bugs','Création de nouvelles interfaces'],
        year: "2022",
        tech: [{id:1,name:'React',icon:''},{id:2,name:'Docker',icon:''},{id:3,name:'Kubernetes',icon:''},{id:4,name:'MongoDB',icon:''}]
    },
    {
        id: 4,
        title: 'Stage Développeur Web PHP',
        type:'work',
        structure:'AFPA',
        description: 'Aliquam tincidunt malesuada tortor vitae iaculis. In eu turpis iaculis, feugiat risus quis, aliquet urna. Quisque fringilla mollis risus, eu pulvinar dolor',
        tasks : ['Développement de nouvelles fonctionnalités','Maintenance et correction de bugs','Création de nouvelles interfaces'],
        year: "2021",
        tech: [{id:1,name:'HTML',icon:''},{id:2,name:'CSS',icon:''},{id:3,name:'Javascript',icon:''},{id:4,name:'PHP',icon:''}]
    },
    {
        id: 5,
        title: 'Titre Professionnel Développeur Web et Web Mobile (Bac+2)',
        type:'school',
        structure:'AFPA',
        description: 'Aliquam tincidunt malesuada tortor vitae iaculis. In eu turpis iaculis, feugiat risus quis, aliquet urna. Quisque fringilla mollis risus, eu pulvinar dolor',
        tasks : ['Développement de nouvelles fonctionnalités','Maintenance et correction de bugs','Création de nouvelles interfaces'],
        year: "2019-2021",
        tech: [{id:1,name:'JAVA',icon:''},{id:2,name:'Drupal',icon:''},{id:3,name:'Javascript',icon:''}]
    },
    {
        id: 6,
        title: 'Baccalauréat Scientifique Option ISN (Informatique et Sciences du Numérique) Mention Européenne',
        type:'school',
        structure:'Lycée Hyacinthe Bastaraud',
        description: 'Aliquam tincidunt malesuada tortor vitae iaculis. In eu turpis iaculis, feugiat risus quis, aliquet urna. Quisque fringilla mollis risus, eu pulvinar dolor',
        tasks : ['Développement de nouvelles fonctionnalités','Maintenance et correction de bugs','Création de nouvelles interfaces'],
        year: "2016",
        tech: [{id:1,name:'HTML',icon:''},{id:2,name:'Python',icon:''},{id:3,name:'Javascript',icon:''},{id:4,name:'CSS',icon:''}]
    }
];

export const schoolExperience = dataExperience.filter(experience => experience.type === 'school');
export const workExperience = dataExperience.filter(experience => experience.type === 'work');