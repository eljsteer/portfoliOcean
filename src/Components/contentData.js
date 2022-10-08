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

const HomeData = {
    animation: "",
    header: "Jason Steer",
    theAllure: 
    `Avid Web Developer, Lover of Mother Earth, with a curious and analytical mind`,
  }

const AboutData = {
    ProfilePhoto: "../../Assets/images/standingProf-resz1.jpg",
    Description: 
    `I was born and raised in the countryside just outside of Christchurch, NZ.
    In July 2018 I shifted over to Sydney for warmer weather and greatly improved career opportunities.
    A career change into Software & Web development is a priority for me at the moment.
    I am primarily wanting a change from my current role as an Accountant to the world of Tech, 
    along with oppportunities to level-up my creative problem-solving skills and explore the complexities of blockchain technology.
    My long term dream is to eventually work into a role as a blockchain or DApp developer`,
    Role: "Full Stack Web Developer",
  }

const SkillsData = [
  {
    id: 1,
    name:"HTML",
    icon:"assets/images/skills/html-5-100.png"
  }, {
    id: 2,
    name:"CSS & Bootstrap",
    icon:"../Assets/images/skills/css3-100.png"
  }, {
    id: 3,
    name:"Javscript",
    icon:"../Assets/images/skills/javascript-100.png"
  }, {
    id: 4,
    name:"NodeJS",
    icon:"../Assets/images/skills/node-js-100.png"
  }, {
    id: 5,
    name:"MySQL",
    icon:"../Assets/images/skills/mysql-100.png"
  }, {
    id: 6,
    name:"MongoDB",
    icon:"../Assets/images/skills/mongodb-shield.png"
  }, {
    id: 7,
    name:"React",
    icon:"../Assets/images/skills/react-native-100.png"
  }, {
    id: 8,
    name:"Git",
    icon:"../Assets/images/skills/github-100.png"
  }
]

  const resumeFile = {
    file: "../../public/assets/resume/Jason_Steer_Resumé.pdf",
  }

  const ContactData = {
    Email: "el.jsteer@gmail.com",
    Github: "https://github.com/eljsteer",
    LinkedIn: "https://www.linkedin.com/in/devjs-jason-steer/"
  }

export { HomeData, AboutData, ProjectData, SkillsData, resumeFile,ContactData };