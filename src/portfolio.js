/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Paresh's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Paresh Mhatre Portfolio",
    type: "website",
    url: "git remote add origin https://github.com/paresh1901/PareshMhatrePortfolio.git",
  },
};

//Home Page
const greeting = {
  title: "Paresh Mhatre",
  logo_name: "Paresh Mhatre",
  nickname: "spaWn",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1Mwq__bYfUOkE1qjMJWqsxb3SkaiaTv4x/view?usp=drive_link",
  portfolio_repository: "git remote add origin https://github.com/paresh1901/PareshMhatrePortfolio",
  githubProfile: "https://github.com/paresh1901",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/paresh1901",
  // linkedin: "https://www.linkedin.com/in/paresh-mhatre-80510216b/",
  // gmail: "paresmhatre.ms@gmail.com",
  // gitlab: "https://gitlab.com/paresh1901",
  // facebook: "https://www.facebook.com/paresh.mhatre.3154/",
  // twitter: "https://twitter.com/PareshM65925128",
  // instagram: "https://instagram.com/paresh_mhatre_?igshid=MzRlODBiNWFlZA=="

  {
    name: "Github",
    link: "https://github.com/paresh1901",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/paresh-mhatre-80510216b/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },

  {
    name: "Gmail",
    link: "mailto:pareshmhatre.ms@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/PareshM65925128",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/paresh.mhatre.3154/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://instagram.com/paresh_mhatre_?igshid=MzRlODBiNWFlZA==",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask",
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
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
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
      ],
    },

    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
// const competitiveSites = {
//   competitiveSites: [
//     {
//       siteName: "LeetCode",
//       iconifyClassname: "simple-icons:leetcode",
//       style: {
//         color: "#F79F1B",
//       },
//       profileLink: "https://leetcode.com/layman_brother/",
//     },
//     {
//       siteName: "HackerRank",
//       iconifyClassname: "simple-icons:hackerrank",
//       style: {
//         color: "#2EC866",
//       },
//       profileLink: "https://www.hackerrank.com/layman_brother",
//     },
//     {
//       siteName: "Codechef",
//       iconifyClassname: "simple-icons:codechef",
//       style: {
//         color: "#5B4638",
//       },
//       profileLink: "https://www.codechef.com/users/ashutosh_1919",
//     },
//     {
//       siteName: "Codeforces",
//       iconifyClassname: "simple-icons:codeforces",
//       style: {
//         color: "#1F8ACB",
//       },
//       profileLink: "http://codeforces.com/profile/layman_brother",
//     },
//     {
//       siteName: "Hackerearth",
//       iconifyClassname: "simple-icons:hackerearth",
//       style: {
//         color: "#323754",
//       },
//       profileLink: "https://www.hackerearth.com/@ashutosh391",
//     },
//     {
//       siteName: "Kaggle",
//       iconifyClassname: "simple-icons:kaggle",
//       style: {
//         color: "#20BEFF",
//       },
//       profileLink: "https://www.kaggle.com/laymanbrother",
//     },
//   ],
// };

const degrees = {
  degrees: [
    {
      title: "Høgskolen i Østfold, Norway",
      subtitle: "M.S. in Applied Computer Science",
      logo_path: "hiof_logo.png",
      alt_name: "hiof",
      duration: "2020 - 2022",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
      ],
      website_link: "https://www.hiof.no/english/",
    },
    {
      title: "Bharati Vidyapeeth College of Engineering, Navi Mumbai",
      subtitle: "B.E. in Information Technology",
      logo_path: "bvcoe_logo.png",
      alt_name: "BVCOE",
      duration: "2016 - 2020",
      descriptions: [
        "⚡ I have taken varity of courses related to Artificial Intelligence which correspond to Explainable AI, Graph Machine Learning, Computer Vision etc.",
        "⚡ Apart from this, I have also done research assistantship. As part of it, I have worked on creating new algorithms in Graph ML and Network Science.",
        "⚡ During my time at university, I was also associated with multimedia department. As part of it, I have worked on some documentry films and interviews.",
      ],
      website_link: "https://bvcoenm.edu.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      // subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Deep Learning",
      // subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "ML on GCP",
      // subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Data Science",
      // subtitle: "- Alex Aklson",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Big Data",
      // subtitle: "- Kim Akers",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://www.coursera.org",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Advanced Data Science",
      // subtitle: "- Romeo Kienzler",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Advanced ML on GCP",
      // subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "DL on Tensorflow",
      // subtitle: "- Laurence Moroney",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Fullstack Development",
      // subtitle: "- Jogesh Muppala",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Kuberenetes on GCP",
      // subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://www.coursera.org",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Cryptography",
      // subtitle: "- Saurabh Mukhopadhyay",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://www.coursera.org",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "Cloud Architecture",
      // subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://www.coursera.org",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Research Analyst",
          company: "Trupp Global Technologies",
          company_url: "https://www.truppglobal.com/",
          logo_path: "trupp_logo.png",
          duration: "April 2022 - Aug 2022",
          location: "Banglore, Karnataka",
          description:
            "Researching and gathering information of different profit and non-profit organizations from social media links, company domains, and news articles and analysing the funding rounds and company's revenue.",
          color: "#0879bf",
        },
        {
          title: "Support and Implementation",
          company: "Cnergee Technology",
          company_url: "https://www.cnergee.com/",
          logo_path: "cnergee_logo.png",
          duration: "Dec 2021 - April 2022",
          location: "Navi Mumbai, Maharashtra",
          description:
            "Identifying and resolving technical problems, and offering root cause analysis, and fix flaws. Monitoring network performance, optimizing server capacity, and securing networks and data. Repairing network errors and performing network upgrades.",
          color: "#9b1578",
        },
        // {
        //   title: "Android Developer",
        //   company: "FreeCopy Pvt. Ltd.",
        //   company_url: "https://www.linkedin.com/company/freecopy/about/",
        //   logo_path: "freecopy_logo.png",
        //   duration: "Nov 2017 - Dec 2017",
        //   location: "Ahmedabad, Gujarat",
        //   description:
        //     "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
        //   color: "#fc1f20",
        // },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Data Scientist Intern",
          company: "e-Smart Systems",
          company_url: "https://www.esmartsystems.com/?gclid=CjwKCAjws7WkBhBFEiwAIi16885B92OF5rgtIWAwWfsbaXFmsjYnujc-rn2deFgbW3C7oroqIgGrkRoC1C0QAvD_BwE#main",
          logo_path: "esmartsystem_logo.png",
          duration: "June 2023 - Aug 2023",
          location: "Stavanger, Norway",
          description:
            "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
          color: "#000000",
        },
        {
          title: "Software Engineer Intern",
          company: "Atoconn System Labs",
          company_url: "https://atoconn.com/",
          logo_path: "atoconn_logo.png",
          duration: "June 2019 - Aug 2019",
          location: "Thane, Maharashtra",
          description:
            "Successfully developed the Smart Parking system project that consists of IoT components and sensors used to monitor and signalize the state of availability of each single parking space and also used Dijkstra's algorithm to find the shortest path to reach the destination. A website was also provided that allows an end-user to check the availability of parking space and book a parking slot accordingly. Developed an E-Commerce mobile application for Beauty and Cosmetic products.",
          color: "#ee3c26",
        },
        // {
        //   title: "Data Science Intern",
        //   company: "Intel Indexer LLC",
        //   company_url:
        //     "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
        //   logo_path: "intel_logo.jpg",
        //   duration: "Nov 2018 - Dec 2018",
        //   location: "Work From Home",
        //   description:
        //     "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
        //   color: "#0071C5",
        // },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [

        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "July 2020 - PRESENT",
          location: "Work From Home",
          description:
            "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
          color: "#181717",
        },
        {
          title: "Dance Choreographer",
          company: "CREW 5678, Bharati Vidyaapeeth College of Engineering",
          company_url: "https://instagram.com/crew_5678?igshid=MzRlODBiNWFlZA==",
          logo_path: "crew_logo.png",
          duration: "June 2016 - Nov 2020",
          location: "Navi Mumbai, Maharashtra",
          description:
            "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
          color: "#D83B01",
        },
        
        {
          title: "Developer Students Club Member",
          company: "ITSA, Bharati Vidyaapeeth College of Engineering",
          company_url:
            "https://instagram.com/itsa_bvcoe?igshid=MzRlODBiNWFlZA==",
          logo_path: "itsa_logo.png",
          duration: "June 2016 - Nov 2020",
          location: "Navi Mumbai, Maharashtra",
          description:
            "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
          color: "#0C9D58",
        },

        {
          title: "Language Teacher",
          company: "DBM India",
          company_url: "https://www.dbmindia.org/",
          logo_path: "dbm_logo.png",
          duration: "July 2016  - Dec 2016",
          location: "Mumbai, Maharashtra",
          description:
            "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
          color: "#4285F4",
        },

      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "Evaluation of Machine Learning Algorithms for parameter prediction in WSN",
      createdAt: "2023-12-27T16:26:54Z",
      description: "Paper Written on evaluation of different machine learning algorithms for parameter prediction in WSN published in ICMLA ",
      url:
        "https://www.icmla-conference.org/icmla23/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Smart Mirror using Raspberry Pi",
      createdAt: "2020-04-06T16:26:54Z",
      description: "Paper Written on Smart Mirror using Raspberry Pi published in IJRESM ",
      url:
        "https://www.ijresm.com/volume-3-issue-4-april-2020/",
    },


  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_paresh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    // link: "https://blogs.pareshmhatre.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "B R A Veien 8, 1783 Halden",
    // locality: "Kanodar",
    country: "Norway",
    region: "Halden",
    postalCode: "1783",
    streetAddress: "BRA Veien 8",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/gHQbKDT3JcHd1KVDA",
  },
  phoneSection: {
    title: "Contact ",
    subtitle: "+47 (9) 669-3943,  pareshmhatre.ms@gmail.com",
  },

};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  // competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
