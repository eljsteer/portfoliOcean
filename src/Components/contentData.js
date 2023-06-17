const KeyProject = {
    id: 0,
    name: "FireStarter", 
    description: "Dao inspired Incubator and Developer Program to connect and build the projects of tomorrow", 
    technologies: ["Javascript | CSS | HTML "], 
    sourceCode: "https://github.com/eljsteer/fireStarter", 
    livePreview: "https://firestarter.herokuapp.com/",
    image: "assets/images/projects/fireStarterHomePage.jpg",
    alt: "Developer Project Incubator Application",
  } 
const ProjectData = [  
  {
      id: 1,
      name: "Password-Genie", 
      description: "A Password Generator Application", 
      technologies: ["Javascript | CSS | HTML "], 
      sourceCode: "https://github.com/eljsteer/password-genie", 
      livePreview: "https://eljsteer.github.io/password-genie/",
      image: "assets/images/projects/passwordGenie.jpg",
      alt: "Password Generator app"
  }, 
  {
      id: 2,
      name: "Weather-man", 
      description: "A Global Weather Application.", 
      technologies: ["OneApp Weather API | Javascript | CSS | HTML"], 
      sourceCode: "https://github.com/eljsteer/weather-man", 
      livePreview: "https://eljsteer.github.io/weather-man/",
      image: "assets/images/projects/weatherMan.jpg",
      alt: "Weather app"
  }, 
  {
      id: 3,
      name: "Marvel Universe", 
      description: "A Marvel Fan Application to view Images of Marvel Characters", 
      technologies: ["Marvel API | Google API | Javascript | CSS | HTML"], 
      sourceCode: "https://github.com/eljsteer/marvel_universe", 
      livePreview: "https://mdkgray.github.io/marvel_universe/",
      image: "assets/images/projects/marvelUniverse.jpg",
      alt: "Marvel universe photo app"
  }, 
  {
      id: 4,
      name: "noteStaker", 
      description: "A note taking application to allow developers to write and save notes in order to keep track of tasks that need to be completed.", 
      technologies: ["Express.js | Node.js | Javascript | CSS | HTML"], 
      sourceCode: "https://github.com/eljsteer/noteStaker", 
      livePreview: "https://radiant-thicket-41331.herokuapp.com/",
      image: "assets/images/projects/noteStaker.jpg",
      alt: "Note taking app"
  }, 
  {
      id: 5,
      name: "Movie God", 
      description: "This Application is your one-stop-shop for all your latest Movie information. Leave Reviews and Ratings on movie greats or new and upcoming movie releases.", 
      technologies: ["Handlebars| mySQL | Sequelise |Express.js | Node.js| Javascript| CSS | HTML"], 
      sourceCode: "https://github.com/eljsteer/Movie-God", 
      livePreview: "https://limitless-island-08145.herokuapp.com/",
      image: "assets/images/projects/movieGod.jpg",
      alt: "Movies Central App"
    }, 
    {
      id: 6,
      name: "Social Mongoose (NoSqueal)", 
      description: "A Backend application with endroutes for a Social Media Application", 
      technologies: ["MongoDB | Mongoose | Express.js | Node.js | Javascript"], 
      sourceCode: "https://github.com/eljsteer/Social-Mongoose_NoSqueal", 
      livePreview: "",
      image: "assets/images/projects/socialMongoose.jpg",
      alt: "Social media Software backend routes"
    }
]

const AboutData = {
    profilephoto: "assets/images/profile/sittingProf-resz1.jpg",
    description: 
    `Hi, I am a full stack Web Developer, with a background in finance and accounting.  
    
    I recently completed a certificate in Full Stack Web Development Bootcamp from the University of Sydney.
    The bootcamp gave me a solid proficiency with skills centred around the MERN stack. 
    Completing the bootcamp was also the first step taken towards my long term aspirations to eventually work in Web3 as a blockchain or DApp developer.
    In my lifelong learning journey, I am always looking for new opportunities to learn, challenge myself and collobrate on projects, so please don't hesitate to get in touch about anything.

    Enjoy browsing my Portfolio.
    `,
    role: "Full Stack Web Developer",
  }

const SkillsData = [
  {
    id: 1,
    name:"HTML",
    icon:"assets/images/skills/html-5-100.png"
  }, {
    id: 2,
    name:"CSS & Bootstrap",
    icon:"assets/images/skills/css3-100.png"
  }, {
    id: 3,
    name:"Javscript",
    icon:"assets/images/skills/javascript-100.png"
  }, {
    id: 4,
    name:"NodeJS",
    icon:"assets/images/skills/node-js-100.png"
  }, {
    id: 5,
    name:"MySQL",
    icon:"assets/images/skills/mysql-100.png"
  }, {
    id: 6,
    name:"MongoDB",
    icon:"assets/images/skills/mongodb-shield.png"
  }, {
    id: 7,
    name:"React",
    icon:"assets/images/skills/react-native-100.png"
  }, {
    id: 8,
    name:"Git",
    icon:"assets/images/skills/github-100.png"
  }
]

  const ResumeFile = {
    file: "/assets/resume/Jason_Steer_Resumé.pdf",
  }

  const ContactData = {
    Email: "/contact",
    Github: "https://github.com/eljsteer",
    LinkedIn: "https://www.linkedin.com/in/devjs-jason-steer/",
    StackOverflow: "https://stackoverflow.com/users/20190347/eljsteer",
  }

export { KeyProject, AboutData, ProjectData, SkillsData, ResumeFile, ContactData };