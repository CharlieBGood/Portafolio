/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: false, // Change this to false if you want the good'ol cursor
  //googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Charlie B Good",
  logo_name: "Charlie B Good",
  nickname: "Charlie B Good",
  full_name: "Carlos Bueno",
  subTitle:
    "Full Stack Developer and Machine Learning Enthusiast ✌🏻. In a changing world, learning is my only constant.",
  resumeLink:
    "https://drive.google.com/file/d/1xJ5wnkfeNdjypcoNphqW6fNRXL0pGICd/view?usp=sharing",
  mail: "mailto:carlosbueno1196@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/CharlieBGood",
  linkedin: "https://www.linkedin.com/in/charliebgood/",
  gmail: "carlosbueno1196@gmail.com",
  //facebook: "https://www.facebook.com/harikrishan.kanani/",
  twitter: "https://twitter.com/CharlieBGood_",
  instagram: "https://www.instagram.com/charliebgood_/",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using ReactJS",
        "⚡ Developing APIs for web applications using Django REST & NodeJS",
        "⚡ Deploying full web applications using Python and Javascript",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        // {
        //   skillName: "GraphQL",
        //   fontAwesomeClassname: "simple-icons:graphql",
        //   style: {
        //     color: "#DE33A6",
        //   },
        // },
        // {
        //   skillName: "Visual Basic",
        //   fontAwesomeClassname: "simple-icons:dot-net",
        //   style: {
        //     color: "#029FCE",
        //   },
        // },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "jQuery",
          fontAwesomeClassname: "simple-icons:jquery",
          style: {
            color: "#0865A6",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "simple-icons:django",
          style: {
            color: "#092e20",
          },
        },
        {
          skillName: "Postgresql",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#0064a5",
          },
        },
        {
          skillName: "Numpy",
          fontAwesomeClassname: "simple-icons:numpy",
          style: {
            color: "#306998",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            color: "#0868AC",
          },
        },
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "simple-icons:tensorflow",
          style: {
            color: "#EE7600",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Experience hosting and managing websites",
        "⚡ Experience with Continuous Integration",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#38AFBB",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6863A6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: {
            color: "#5b77ef",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "BSc. University of Los Andes",
      subtitle: "Bachelor of Sciece in Chemical Engineering",
      logo_path: "ULA.png",
      alt_name: "University of Los Andes",
      duration: "2013 - 2018",
      descriptions: [
        "⚡ I studied core subjects like Caculus, Linear Algebra, Statistics, Probability and Algorithms.",
        "⚡ I also developed skills in projects planning, costing and execution.",
        "⚡ I developed engineering thinking, with design focus and a particular inclination for detail. ",
      ],
      website_link: "https://uniandes.edu.co/",
    },
    {
      title: "Diplomat National University of Colombia",
      subtitle: "Diplomat in Programming Technology",
      logo_path: "UNAL.png",
      alt_name: "National University of Colombia",
      duration: "2020",
      descriptions: [
        "⚡ I studied core subjects like Data Structures, Alogorithms, Networking, etc.",
        "⚡ I learned the fundamentals of Computer Science and Web Development.",
        "⚡ I learned the use of Python and Java and implementemented projects on those languages.",
      ],
      website_link: "https://unal.edu.co/",
    },
    {
      title: "Diplomat Technological University of Pereira",
      subtitle: "Diplomat in Full Stack Web Development",
      logo_path: "UTP.png",
      alt_name: "Technological University of Pereira",
      duration: "2021",
      descriptions: [
        "⚡ I developed a complete understanding of the distinction between backend and frontend technologies.",
        "⚡ I learned about the development and deployment of Web Applications using agile methodologies.",
        "⚡ I worked as Tech Lead and Product Owner in the development of a Web Application using MERN Stack.",
      ],
      website_link: "https://www.utp.edu.co/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Professional Course of Git and Github",
      subtitle: "Platzi",
      logo_path: "Platzi.png",
      certificate_link:
        "https://platzi.com/p/CharlieBGood/curso/2405-course/diploma/detalle/",
      alt_name: "Platzi",
      // color_code: "#2AAFED",
      color_code: "black",
    },
    {
      title: "Computer Science CS50 Harvard University",
      subtitle: "edX",
      logo_path: "Harvard.png",
      certificate_link:
        "https://certificates.cs50.io/5a8cd0ff-97c4-4353-88c3-dbc5d29db748.pdf?size=letter",
      alt_name: "Harvard University",
      color_code: "white",
    },
    {
      title: "Machine Learning Stanford University",
      subtitle: "Coursera",
      logo_path: "Stanford.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/BGD9QLM55QK3",
      alt_name: "Stanford University",
      // color_code: "#F6B808",
      color_code: "black",
    },
    {
      title: "Deep Learning Specialization DeepLearning.ai",
      subtitle: "Coursera",
      logo_path: "DL.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/WJ8BTMECGZKD",
      alt_name: "DeepLearning.ai",
      color_code: "white",
    },
    {
      title:
        "Introduction to TensorFlow for Artificial Intelligence, Machine Learning, and Deep Learning",
      subtitle: "Coursera",
      logo_path: "DL.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/A63K4XVFSV97",
      alt_name: "DeepLearning.ai",
      color_code: "black",
    },
    {
      title: "Data Visualization with Python IBM",
      subtitle: "Coursera",
      logo_path: "IBM.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/ZPR6QYUY2LWP",
      alt_name: "IBM",
      color_code: "white",
    },
    {
      title: "Advanced Django Course",
      subtitle: "Platzi",
      logo_path: "Platzi.png",
      certificate_link:
        "https://platzi.com/p/CharlieBGood_/curso/1461-django-avanzado/diploma/detalle/",
      alt_name: "Platzi",
      color_code: "black",
    },
    {
      title: "React Practical Course",
      subtitle: "Platzi",
      logo_path: "Platzi.png",
      certificate_link:
        "https://platzi.com/p/CharlieBGood_/curso/2484-react-practico/diploma/detalle/",
      alt_name: "Platzi",
      color_code: "black",
    },
    // color_code: "#8C151599",
    // color_code: "#7A7A7A",
    // color_code: "#0C9D5899",
    // color_code: "#C5E2EE",
    // color_code: "#ffc475",
    // color_code: "#g",
    // color_code: "#ffbfae",
    // color_code: "#fffbf3",
    // color_code: "#b190b0",
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work",
  description:
    "I currently work as Full Stack Developer. I started my professional career working as Chemical Engineer and mostly doing programming projects on my own, but now I'm completely immerse in the tech industry ❤️",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Technical Director",
          company: "Colombian Botanical Developments",
          company_url: "",
          logo_path: "CBD.png",
          duration: "Jan 2019 - Jun 2021",
          location: "Pereira, Risaralda",
          description:
            "I worked on Final Products development, optimize extraction and distillation production techniques, and developed a tracking system for agricultural data.",
          color: "#0071C5",
        },
        {
          title: "Full Stack Developer",
          company: "Skillnet S.A.S",
          company_url: "https://skillnet.co/",
          logo_path: "skillnet.png",
          duration: "Jun 2021 - Oct 2021",
          location: "Work From Home",
          description:
            "Took part on both Front end and Back end development of the PQRS module in a Document Management System. Also developed the complete statistics module of the system.",
          color: "#ee3c26",
        },
        {
          title: "Backend Developer",
          company: "Aimo",
          company_url: "https://aimo.co/",
          logo_path: "aimo.png",
          duration: "Oct 2021 - Today",
          location: "Work From Home",
          description:
            "Design and develop a virtual Seal of Trust for the chamber of electronic commerce in Lima, Peru. I also Added social networks integrations for API consulting in the core application.",
          color: "#ee3c26",
        },
      ],
    },
    /*{
      title: "Volunteerships",
      experiences: [
        {
          title: "Cross Winter of Code Mentor",
          company: "CWOC",
          company_url: "https://crosswoc.ieeedtu.in/",
          logo_path: "cwoc.png",
          duration: "Feb 2021 - Present",
          location: "Work From Home",
          description:
            "Mentorship responsibilities were to help students plan the project, review issues and pull requests, ensure smooth progress and help them out when they are stuck.",
          color: "#4285F4",
        },
      ],
    },*/
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is to create Full Stack Python projects, Python Scripts, and MERN Projects. Below are some of my projects, most of them come from current ideas on the web, but each one of them has little extra features because I love to put my signature in everything that i do ✌🏻.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "charlie.jpg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others. I write on Twitter.",
    link: "https://twitter.com/Harikrushn9",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "Tic Tac Toe Charlie Edition",
      url: "https://github.com/CharlieBGood/tic_tac_toe_charlie_edition",
      description:
        "Personal version of the famous game tic tac toe. This version takes inspiration on the code of the page TechVidvan and adds to it a couple of cool features",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      id: "1",
      name: "Tweet Bot Charlie Edition",
      url: "https://github.com/CharlieBGood/tweetbot_charlie_edition",
      description:
        "This little bot allows you to tweet Jokes, Movie Reviews from the NYT, Quotes from famous historical figures and more",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "Javascript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      id: "2",
      name: "Alien Invasion Charlie Edition",
      url: "https://github.com/CharlieBGood/alienInvasion",
      description:
        "An updated version of the classic arcade game Alien Invasion.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      id: "3",
      name: "Chatting App",
      url: "http://chattingappproject.herokuapp.com/",
      description:
        "Chatting App developed for the MisionTIC 2022 governmental program as final project.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "MongoDB",
          iconifyClass: "logos-mongodb",
        },
      ],
    },
    {
      id: "4",
      name: "Rule of Thumb Charlie Edition",
      url: "https://github.com/CharlieBGood/Rule_of_Thumb",
      description:
        "Sensation tracker of public figures, give your opinion over different celebrities.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
