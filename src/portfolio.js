/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  display: true,
  displayGreeting: true, // Set false to hide this section, defaults to true
  /* Your Summary And Greeting Section */
  username: "Ariel Frischer",
  title: "Hi, I'm Ariel",
  subTitle: emoji(
    "Passionate Software Engineer 🚀 and self-starter, I'm the CTO of a startup web platform that converts text into video using AI technology. Diversified experience building a wide range of applications including websites, games, and machine learning tools."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1zrl4K41KBoO_yYXdqb-xguQ8Dx_3Ax0X/view?usp=sharing"
};
const illustration = {
  animated: true // set to false to use static SVG
};

// Your Social Media Link

const socialMediaLinks = {
  github: "https://github.com/ariel-frischer",
  linkedin: "https://www.linkedin.com/in/arielfrischer/",
  gmail: "arielfrischer@gmail.com",
  gitlab: "https://gitlab.com/ariel-frischer",
  // facebook: "https://www.facebook.com/saad.pasta7",
  medium: "https://medium.com/@arielfrischer",
  stackoverflow: "https://stackoverflow.com/users/1715153/ariel-frischer",
  // Instagram and Twitter are also supported in the links!
  display: true
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "CREATE FULLY RESPONSIVE WEB APPLICATIONS",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji("⚡ Integration of third party services such as AWS / Heroku")
  ],
  tsIcon: require("./assets/images/icons8-typescript-250.png"),

  /* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },

    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },

    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },

    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },

    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "github",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "gitlab",
      fontAwesomeClassname: "fab fa-gitlab"
    },
    {skillName: "linux", fontAwesomeClassname: "fab fa-linux"},
    {skillName: "yarn", fontAwesomeClassname: "fab fa-yarn"},
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    }
  ],
  display: true
};

// Your education background
// Updates...

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "University of California, San Diego",
      logo: require("./assets/images/ucsdLogo.png"),
      subHeader: "Bachelor of Science in Chemical Engineering",
      duration: "September 2012- July 2016",
      desc: "Apply the principles of chemistry, biology, physics, and math to solve problems involving the production or use of chemicals, fuel, drugs, food, and many other products. We design processes and equipment for large-scale manufacturing, plan and test production methods and byproducts treatment, and direct facility operations.",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  display: false,
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ]
};

// Your top 3 work experiences

const workExperiences = {
  // display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "ariel-frischer", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to false
  display: false
};

// Some Big Projects You have worked with your company

const bigProjects = {
  display: true,
  title: "Projects",
  subtitle: "Platforms, Games, and Applications",
  projects: [
    {
      // image: require("./assets/images/initiate-transparent-logo.png"),
      video:
        "https://drive.google.com/uc?export=download&id=1nQKot0jbZqqE2A0LooiWWdAMEMBo5L9X",
      link: "https://initiate.ai",
      name: "INITIATE.AI",
      description:
        "Converts text into video using AI along with automation. Allows users to customize their videos with an online editor."
    },
    {
      image: require("./assets/images/ruminate-screenshot1.png"),
      link: "",
      name: "Platformer",
      description:
        "Puzzle-based platformer with a physics engine and in-game level editor."
    },
    {
      image: require("./assets/images/particle-lab.png"),
      link: "https://www.kongregate.com/games/orangatang91/particle-lab",
      name: "Particle Lab",
      description:
        "Create and customize your particle effects with this sandbox simulation game. "
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {
  display: true,
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "AP Scholar With Distinction",
      subtitle:
        "Granted to students who receive an average score of at least 3.5 on all AP Exams taken, and scores of 3 or higher on five or more of these exams.",
      image: require("./assets/images/college-board.jfif"),
      footerLink: [
        {
          name: "Info",
          url: "https://apcentral.collegeboard.org/exam-administration-ordering-scores/scores/awards/scholar-awards"
        }
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "Dean's List Scholar",
      subtitle:
        "Awarded by Pierce College, each semester students who have completed 12 or more units of graded classes during the preceding semester with a grade point average of 3.5 are recognized.",
      image: require("./assets/images/los-angeles-pierce-college-logo-vector.png"),
      footerLink: [
        {
          name: "Info",
          url: "http://www.piercecollege.edu/students/deans_list/"
        }
      ]
    }

    // {
    //   title: "PWA Web App Developer",
    //   subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
    //   image: require("./assets/images/pwaLogo.webp"),
    //   footerLink: [
    //     {name: "Certification", url: ""},
    //     {
    //       name: "Final Project",
    //       url: "https://pakistan-olx-1.firebaseapp.com/"
    //     }
    //   ]
    // }
  ]
};

// Blogs Section

const blogSection = {
  display: false,
  title: "Blogs",
  subtitle: "I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@arielfrischer/why-react-is-the-best-5a97563f423e",
      title: "Built a web app!",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ]
};

// Talks Sections

const talkSection = {
  display: false,
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ]
};

// Podcast Section

const podcastSection = {
  display: false,
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Want to discuss a project or just want to say hi? My inbox is open: ",
  number: "+1-8184567077",
  email_address: "arielfrischer@gmail.com"
};

//Twitter Section

const twitterDetails = {
  userName: "twitter" //Replace "twitter" with your twitter username without @
};
export {
  greeting,
  socialMediaLinks,
  illustration,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
