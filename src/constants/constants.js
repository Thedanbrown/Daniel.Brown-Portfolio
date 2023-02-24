// array of objects containg all information for our project cards
export const projects = [
    {
        title: 'Artbot-AI',
        description: "MERN stack GraphQL application for an AI art Generator with a community feed to see what others are creating",
        imageurl: './images/Artbot-AI.png',
        tags: ['Mongo', 'Express', 'React', 'Node'],
        deployed: 'https://artbotai.herokuapp.com/',
        repository: 'https://github.com/Thedanbrown/artbot-ai',
        id: 0,
    },
    {
        title: 'TDB-Tube',
        description:"Fully Functional Youtube clone built using REACT and MaterialUI. Fully responsive with channel and individual video pages",
        imageurl: './images/tdbtube.png',
        tags: ['React', 'JavaScript'],
        deployed: 'https://thedanbrown.github.io/tdb-tube/',
        repository: 'https://github.com/Thedanbrown/tdb-tube',
        id: 1,
    },
    {
        title: 'Modern UI Design',
        description: "This page was build with REACT as an exploration on Modern UI/UX design as a way to get to using react and component based architecture",
        imageurl: './images/modernui.png',
        tags: ['React'],
        deployed: 'https://gpt3jsmtdb.space/',
        repository: 'https://github.com/Thedanbrown/modern-UI-UX',
        id: 2,
    },
    {
        title: 'Comic Case',
        description: "Track your comic book collection, share with other like minded individuals and see what others are collecting!",
        imageurl: './images/comiccase.png',
        tags: ['node', 'MySQL'],
        deployed: 'https://comic-case.herokuapp.com/',
        repository: 'https://github.com/Thedanbrown/Comic-Case',
        id: 3,
    },
    {
        title: 'IDCWDYW',
        description: "I don't care, what do you want? Recipe generator for those that can't decide on what to eat!",
        imageurl: './images/IDCWDYW.png',
        tags: ['Javascript', 'Bulma'],
        deployed: 'https://thedanbrown.github.io/IDCWDYW-Food-and-Beverage-Recipe-Generator/',
        repository: 'https://github.com/Thedanbrown/IDCWDYW-Food-and-Beverage-Recipe-Generator',
        id: 4,
    },
    {
        title: 'README Generator',
        description: "This is a command line console app for generating quality README files for you projects",
        imageurl: './images/ReadmeGen.png',
        tags: ['Javascript', 'Bulma'],
        deployed: '',
        repository: 'https://github.com/Thedanbrown/README-Generator-Console-App',
        id: 5,
    }
]
// responsive logic for the carousel
export const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 1400 },
        items: 3,
    },
    desktop: {
        breakpoint: { max: 1400, min: 900 },
        items: 2,
    },
    tablet: {
        breakpoint: { max: 900, min: 640 },
        items: 1,
    },
    mobile: {
        breakpoint: { max: 640, min: 0 },
        items: 1,
    },
};
