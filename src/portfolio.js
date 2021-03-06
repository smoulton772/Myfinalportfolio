﻿/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section
// import img from './assets/images/NuCamplogo.png'
import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Sean Moulton",
  title: "Hi all, I'm Sean",
  subTitle: emoji(
    "A passionate Software Developer 🚀 with experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1MFog036jCTh1zcJLJxrvMk15HUgOBxUm/view?usp=sharing",
};

// Your Social Media Link

const socialMediaLinks = {
  github: "https://github.com/smoulton772",
  linkedin: "https://www.linkedin.com/in/sean-moulton-73a2733a/",
  gmail: "hello@seanmoulton.com",
  //gitlab: "https://gitlab.com/saadpasta",
  //facebook: "https://www.facebook.com/saad.pasta7"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "I AM FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Web & Mobile Applications using MERN Stack"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Netlify"
    ),
  ],

  /* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "react-native",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node",
    },
    // {
    //   skillName: "hugo",
    //   fontAwesomeClassname: "fas fa-hugo"
    // },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm",
    },
    // {
    //   skillName: "sql-database",
    //   fontAwesomeClassname: "fas fa-database"
    // },
    {
      skillName: "No-SQL-database",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws",
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire",
    },
    {
      skillName: "yarn",
      fontAwesomeClassname: "fab fa-yarn",
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker",
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "MERN Stack", //Insert stack or technology you have experience in
      progressPercentage: "100%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Jamstack", //Insert stack or technology you have experience in
      progressPercentage: "90%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%",
    },
    // {
    //   Stack: "Programming",
    //   progressPercentage: "60%"
    // }
  ],
};

// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      ],
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.jpg"),
      date: "Jan 2015 – Sep 2015",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "smoulton772", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to false
};

// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Portfolio",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      Image: "https://drive.google.com/uc?id=1exWn9T6j8TsfDDHJnS3VR66eP6RiGAfY",
      link: "http://saayahealth.com/",
    },
    {
      image: "https://drive.google.com/uc?id=1MXoXcQRK-pH8J82wyjCW4SJk5AxJe7tf",
      link: "http://nextu.se/",
    },
  ],
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {
  title: emoji("Education & Certifications 🏆🎓 "),
  subtitle: "Education, Certifications, and Some Cool Stuff that I have done !",

  achivementsCards: [
    {
      title: "Keiser University",
      subtitle: "Associate Science in Information Technology",
      image:
        "https://upload.wikimedia.org/wikipedia/en/f/fb/Keiser_University_seal.svg ",
      footerLink: [
        {
          name: "Website",
          url: "https://www.keiseruniversity.edu/port-st-lucie/",
        },
      ],
    },

    {
      title: "NuCamp Coding Bootcamp",
      subtitle: "Front-End Web UI Frameworks: Bootstrap 4",
      image:
        "http://losangelesbootcamps.com/wp-content/uploads/2019/10/nucamp.png",
      footerLink: [
        {
          name: "Certification",
          url:
            "https://drive.google.com/file/d/1Rtqig1RaOjcc6cK3GLOP-8Yx_T1-NUe4/view?usp=sharing",
        },
      ],
    },
    {
      title: "NuCamp Coding Bootcamp",
      subtitle: "Front-End Web Development: React",
      image:
        "http://losangelesbootcamps.com/wp-content/uploads/2019/10/nucamp.png",
      footerLink: [
        {
          name: "Certification",
          url:
            "https://drive.google.com/file/d/1CSUknABNkqbIu4DWTC7WQuvfZ246hGmz/view?usp=sharing",
        },
      ],
    },
    {
      title: "NuCamp Coding Bootcamp",
      subtitle: "Front-End Web & Mobile Development: React-Native",
      image:
        "http://losangelesbootcamps.com/wp-content/uploads/2019/10/nucamp.png",
      footerLink: [
        {
          name: "Certification",
          url:
            "https://drive.google.com/file/d/1HatAATD_xq5SBNpT5dpt1M7IPtQLPRHx/view?usp=sharing",
        },
        // {
        //   name: "Final Project",
        //   // url: "",
        // },
      ],
    },
    {
      title: "NuCamp Coding Bootcamp",
      subtitle:
        "Full Stack Web & Mobile Development:MongoDb, Express, Mongoose",
      image:
        "http://losangelesbootcamps.com/wp-content/uploads/2019/10/nucamp.png",
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/file/d/11aEuKJujXTHsrUXDk7PDrYJMGJAu8Q4w/view?usp=sharing" },
        // { name: "Final Project", url: "" },
      ],
    },
    // {
    //   title: "Udemy",
    //   subtitle: "JAMStack: The Complete Guide",
    //   image: "https://upload.wikimedia.org/wikipedia/commons/9/93/UdemyLogo.svg",
    //   footerLink: [
    //     { name: "Certification", url: ""}

    //   ]
    // },
    // {
    //   title: "LinkedIn Learning from Lynda.com",
    //   subtitle: " Building Severless Apps with JAMStack and Eleventy", 
    //   image: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Linkedin.svg",
    //   footerLink: [{ name: "Certification", url: "" }],
    // },
  ],
};

// Blogs Section

// const blogSection = {

//   title: "Blogs",
//   subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

//   blogs: [
//     {
//       url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
//       title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
//       description: "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
//     },
//     {
//       url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
//       title: "Why REACT is The Best?",
//       description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
//     }
//   ]
// };

// Talks Sections

// const talkSection = {
//   title: "TALKS",
//   subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

//   talks: [
//     {
//       title: "Build Actions For Google Assistant",
//       subtitle: "Codelab at GDG DevFest Karachi 2019",
//       slides_url: "https://bit.ly/saadpasta-slides",
//       event_url: "https://www.facebook.com/events/2339906106275053/",
//       image:
//         "https://scontent.fkhi6-1.fna.fbcdn.net/v/t1.0-9/76714032_1730516240415559_1293494289556307968_o.jpg?_nc_cat=103&_nc_ohc=s5f81rdZd6wAQmqUa52YQBA21MjVOy7e-HN9jI7MspRDC-v5ahEouyInQ&_nc_ht=scontent.fkhi6-1.fna&oh=c29141a9a0de7ff2011a8191f5475a78&oe=5E83127C"
//     }
//   ]
// };

// Podcast Section

// const podcastSection = {
//   title: emoji("Podcast 🎙️"),
//   subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

//   // Please Provide with Your Podcast embeded Link
//   podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
// };

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "561 320 8356‬",
  email_address: "hello@seanmoulton.com",
};

//Twitter Section

// const twitterDetails = {

//   userName : "twitter"//Replace "twitter" with your twitter username without @

// };
export {
  greeting,
  socialMediaLinks,
  skillsSection,
  techStack,
  workExperiences,
  achievementSection,
  openSource,
  bigProjects,
  /* blogSection, talkSection, podcastSection,twitterDetails*/ contactInfo,
};
