import {
  FaReact,
  FaNodeJs,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPython,
  FaLaravel,
  FaGitAlt,
  FaComments,
  FaRobot,
} from "react-icons/fa";
import { BiLogoJavascript, BiLogoTailwindCss } from "react-icons/bi";
import { SiComposer, SiJupyter, SiMysql, SiNumpy, SiPandas, SiRstudioide } from "react-icons/si";
import { FaThreads } from "react-icons/fa6";
import { MdGroup } from "react-icons/md"; 
import { PiBrainFill } from "react-icons/pi";
import { RiPhpLine } from "react-icons/ri";
import { GiDiscussion } from "react-icons/gi";
import { TbWritingFilled } from "react-icons/tb"; // Import icon baru untuk Writing
import { ImSigma } from "react-icons/im"; // Import icon baru untuk Statistics & Mathematics

// PROJECT IMAGES IMPORT
import PROJECT_IMG_1 from "../assets/images/project/project-1.png";
import PROJECT_IMG_2 from "../assets/images/project/project-2.png";
import PROJECT_IMG_3 from "../assets/images/project/project-3.png";
import PROJECT_IMG_4 from "../assets/images/project/project-4.png";
import PROJECT_IMG_5 from "../assets/images/project/projek-skripsi-hybrid-varima-tcn.png";

// ORGANIZATION IMAGES IMPORT
import ORGANIZATION_IMG_1 from "../assets/images/organisasi/bem fmipa-1.jpg";
import ORGANIZATION_IMG_2 from "../assets/images/organisasi/pimpinan bem u.jpg";
import ORGANIZATION_IMG_3 from "../assets/images/organisasi/bem u staf.jpg";
import ORGANIZATION_IMG_4 from "../assets/images/organisasi/kabid-akset-2023.jpg";
import ORGANIZATION_IMG_5 from "../assets/images/organisasi/bem-fmipa staf.jpg";
import ORGANIZATION_IMG_6 from "../assets/images/organisasi/rois-22.jpg";

// CERTIFICATE IMAGES IMPORT
import CERTIFICATE_IMG_1 from "../assets/images/sertifikat/sertifikat-1.png";
import CERTIFICATE_IMG_2 from "../assets/images/sertifikat/sertifikat-2.png";
import CERTIFICATE_IMG_3 from "../assets/images/sertifikat/sertifikat-3.png";
import CERTIFICATE_IMG_4 from "../assets/images/sertifikat/sertifikat-4.png";
import CERTIFICATE_IMG_5 from "../assets/images/sertifikat/sertifikat-5.png";
import CERTIFICATE_IMG_6 from "../assets/images/sertifikat/sertifikat-6.png";
import CERTIFICATE_IMG_7 from "../assets/images/sertifikat/sertifikat-7.png";
import CERTIFICATE_IMG_8 from "../assets/images/sertifikat/sertifikat-8.png";
import CERTIFICATE_IMG_9 from "../assets/images/sertifikat/sertifikat-9.png";
import CERTIFICATE_IMG_10 from "../assets/images/sertifikat/sertifikat-10.png";
import CERTIFICATE_IMG_11 from "../assets/images/sertifikat/sertifikat-11.png";
import CERTIFICATE_IMG_12 from "../assets/images/sertifikat/sertifikat-12.png";
import CERTIFICATE_IMG_13 from "../assets/images/sertifikat/sertifikat-13.png";
import CERTIFICATE_IMG_14 from "../assets/images/sertifikat/sertifikat-14.png";

export const MENU_LINKS = [
  { id: "01", label: "Home", to: "hero", offset: -100 },
  { id: "02", label: "Skills", to: "skills", offset: -90 },
  { id: "03", label: "About", to: "about", offset: -90 },
  { id: "04", label: "Projects", to: "portfolio", offset: -90 },
  { id: "05", label: "Contact", to: "contact", offset: -90 },
];

export const STATS = [
  { id: "01", count: "4.13", label: "Years of Study \nat University of Lampung" },
  { id: "02", count: "+10", label: "Certifications \nEarned" },
  { id: "03", count: "+7", label: "Projects \nCompleted" },
];

export const SKILL_TABS = [
  { id: "01", label: "All", value: "all" },
  { id: "02", label: "Fullstack", value: "fullstack" },
  { id: "03", label: "Data Science", value: "data-science" },
  { id: "04", label: "Soft Skills", value: "soft-skills" },
];

export const SKILLS = [
  // ==================== DATA SCIENCE ====================
  {
    id: "01",
    icon: FaPython, 
    skill: "Python",
    progress: 80,
    type: "data-science",
    description: "Utilizing Python for data analysis, machine learning model development, forecasting, and script automation.",
  },
  {
    id: "02",
    icon: ImSigma, // Menggunakan icon Sigma untuk merepresentasikan Matematika & Statistika
    skill: "Statistics & Mathematics",
    progress: 85,
    type: "data-science",
    description: "Applying advanced statistical modeling, hypothesis testing, calculus, linear algebra, and quantitative analysis to extract insights from complex data.",
  },
  {
    id: "03",
    icon: SiNumpy, 
    skill: "NumPy",
    progress: 80,
    type: "data-science",
    description: "Leveraging NumPy for array manipulation, mathematical operations, and numerical data processing in data science projects.",
  },
  {
    id: "04",
    icon: SiPandas, 
    skill: "Pandas",
    progress: 80,
    type: "data-science",
    description: "Utilizing Pandas for comprehensive data manipulation, cleaning, and structured analysis within data workflows.",
  },
  {
    id: "05",
    icon: FaRobot, 
    skill: "Machine Learning",
    progress: 80,
    type: "data-science",
    description: "Developing and deploying predictive algorithms, feature engineering, and statistical modeling to recognize complex data patterns.",
  },
  {
    id: "06",
    icon: SiRstudioide, 
    skill: "RStudio",
    progress: 80,
    type: "data-science",
    description: "Proficient in RStudio IDE for statistical computing, data visualization, and comprehensive data analysis in R programming language.",
  },
  {
    id: "07",
    icon: SiJupyter, 
    skill: "Jupyter Notebook",
    progress: 80,
    type: "data-science",
    description: "Proficient in Jupyter Notebook for interactive data analysis, visualization, and machine learning experimentation.",
  },
  {
    id: "08",
    icon: ImSigma, 
    skill: "Statistics & Mathematics",
    progress: 75,
    type: "data-science",
    description: "The ability to apply statistical methods and analytical reasoning to interpret data, identify trends, and make informed decisions based on quantitative insights.",
  },

  // ==================== FULLSTACK DEVELOPER ====================
  {
    id: "09",
    icon: RiPhpLine, 
    skill: "Hypertext Preprocessor (PHP)",
    progress: 75,
    type: "fullstack",
    description: "Mastering PHP core programming for building dynamic and interactive server-side web applications.",
  },
  {
    id: "10",
    icon: FaLaravel, 
    skill: "Laravel",
    progress: 75,
    type: "fullstack",
    description: "Proficient in the Laravel framework to engineer secure, scalable, and elegant architecture for PHP-based web applications.",
  },
  {
    id: "11",
    icon: FaReact, 
    skill: "React.js",
    progress: 70,
    type: "fullstack",
    description: "Building dynamic, responsive, and highly interactive user interfaces (UI) using component-based architecture.",
  },
  {
    id: "12",
    icon: BiLogoTailwindCss,
    skill: "Tailwind CSS",
    progress: 70,
    type: "fullstack",
    description: "Designing website styling rapidly utilizing a utility-first framework for modern and clean visual outcomes.",
  },
  {
    id: "13",
    icon: BiLogoJavascript,
    skill: "JavaScript",
    progress: 70,
    type: "fullstack",
    description: "Mastering core concepts through ES6+ for DOM manipulation and client-side API integration logic.",
  },
  {
    id: "14",
    icon: FaNodeJs,
    skill: "Node.js",
    progress: 70,
    type: "fullstack",
    description: "Developing RESTful APIs and handling server-side logic to support robust application data exchange.",
  },
  {
    id: "15",
    icon: SiMysql,
    skill: "SQL",
    progress: 75,
    type: "fullstack", 
    description: "Designing relational databases, writing complex queries, and conducting structured data management.",
  },
  {
    id: "16",
    icon: FaGitAlt, 
    skill: "Git",
    progress: 75,
    type: "fullstack",
    description: "Utilizing Git as a version control system for code tracking and efficient team collaboration.",
  },
  {
    id: "17",
    icon: SiComposer, 
    skill: "Composer",
    progress: 90,
    type: "fullstack",
    description: "Mastering Composer for dependency and package management in professional PHP environment workflows.",
  },

  // ==================== SOFT SKILLS ====================
  {
    id: "18",
    icon: MdGroup, 
    skill: "Teamwork",
    progress: 90,
    type: "soft-skills",
    description: "Experienced in leading student organizations, managing staff, and actively communicating in collaborative projects.",
  },
  {
    id: "19",
    icon: PiBrainFill, 
    skill: "Critical Thinking",
    progress: 90,
    type: "soft-skills",
    description: "The intellectual ability to conceptualize, analyze, evaluate, and solve complex business or data problems logically and objectively.",
  },
  {
    id: "20",
    icon: FaComments, 
    skill: "Communication",
    progress: 90,
    type: "soft-skills",
    description: "The ability to effectively convey ideas, information, and technical concepts clearly and concisely in both written and verbal formats.",
  },
  {
    id: "21",
    icon: GiDiscussion, 
    skill: "Leadership",
    progress: 90,
    type: "soft-skills",
    description: "The ability to inspire, guide, and influence others towards achieving common goals while fostering a positive and productive team environment.",
  },
];

export const ABOUT_ME = {
  content: "I am a Mathematics graduate specializing in Statistics with a profound enthusiasm for data science and information technology. Possessing a solid blend of expertise in statistical data modeling, Python programming, and web development, I am prepared to build efficient, data-driven digital solutions.",
  socialLinks: [
    { id: "01", label: "Facebook", icon: FaFacebook, link: "https://www.facebook.com/ariz.fadilah.tanjung29" },
    { id: "02", label: "Instagram", icon: FaInstagram, link: "https://www.instagram.com/arizfadilaht__/" },
    { id: "03", label: "Threads", icon: FaThreads, link: "https://www.threads.com/@arizfadilaht__" },
    { id: "04", label: "LinkedIn", icon: FaLinkedin, link: "https://www.linkedin.com/in/ariz-fadilah-tanjung/" },
  ],
  email: "arizfadillaht02@gmail.com",
  phone : "+6285219782635",
  website: "https://website.com",
};

export const PORTFOLIO_TABS = [
  { id: "projects", label: "Projects & Applications" },
  { id: "organizations", label: "Organizational Experience" },
  { id: "certifications", label: "Certifications" }
];

export const PROJECTS = [
  {
    id: 1,
    title: "Heart Disease Prediction using Machine Learning Models (Ongoing)",
    image: PROJECT_IMG_1,
    tags: ["Python", "NumPy", "Pandas", "Seaborn", "Scikit-learn", "etc."]
  },
  {
    id: 2,
    title: "Earthquake Severity Prediction",
    image: PROJECT_IMG_2,
    tags: ["Python", "Statistics", "Deep Learning", "TensorFlow", "etc."]
  },
  {
    id: 3,
    title: "Burnout Rate Prediction Application using Machine Learning (Naive Bayes)",
    image: PROJECT_IMG_3,
    tags: ["Python", "NumPy", "Pandas", "Scikit-learn", "etc."]
  },
  {
    id: 4,
    title: "Poverty Level Classification in Indonesia with Machine Learning Models",
    image: PROJECT_IMG_4,
    tags: ["Python", "NumPy", "Pandas", "Scikit-learn", "etc."]
  },
  {
    id: 5,
    title: "Application of Hybrid Vector Autoregressive Integrated Moving Average (VARIMA) – Temporal Convolutional Network (TCN) Models in Forecasting Stock Prices of PT Merck Tbk and PT Kalbe Farma Tbk",
    image: PROJECT_IMG_5,
    tags: ["Python", "NumPy", "Pandas", "Scikit-learn", "etc."]
  }
];

export const ORGANIZATIONS = [
  {
    id: 1,
    role: "Minister of Strategic Issue Studies",
    name: "BEM U KBM University of Lampung",
    period: "2025",
    image: ORGANIZATION_IMG_2, 
    desc: "Leading, communicating, and developing both academic and non-academic potential of organizational executive staff inclusively."
  },
  {
    id: 2,
    role: "Head of Strategic Actions and Studies Department",
    name: "BEM FMIPA University of Lampung",
    period: "2024",
    image: ORGANIZATION_IMG_1, 
    desc: "Accountable for directing divisional work programs, overseeing staff performance, and strengthening internal organization communication structures."
  },
  {
    id: 4,
    role: "Head of Academic and Research Division",
    name: "Islamic Spiritual Organization (Rohis) FMIPA University of Lampung",
    period: "2023",
    image: ORGANIZATION_IMG_4,
    desc: "Formulating tactical analysis articles regarding campus policy issues and distributing student research questionnaires."
  },
  {
    id: 5,
    role: "Strategic Issue Studies Expert Staff",
    name: "BEM U KBM University of Lampung",
    period: "2023",
    image: ORGANIZATION_IMG_3,
    desc: "Drafting analytical and tactical briefs regarding campus-wide policy frameworks and gathering field research metrics."
  },
  {
    id: 6,
    role: "Issues and Movements Expert Staff",
    name: "BEM FMIPA University of Lampung",
    period: "2022",
    image: ORGANIZATION_IMG_5,
    desc: "Conducting dynamic issue screening, compiling research evaluations, and organizing structured student policy advocacy."
  },
  {
    id: 7,
    role: "Member of the Academic and Research Division",
    name: "Islamic Spiritual Organization (Rohis) FMIPA University of Lampung",
    period: "2022",
    image: ORGANIZATION_IMG_6,
    desc: "Participating in the formulation of research questionnaires, data collection, and analysis for organizational research projects and activities."
  }
];

export const CERTIFICATIONS = [
  {
    id: 1,
    title: "Python 101 for Data Science",
    issuer: "Cognitive Class (Powered by IBM Developer Skills Network)",
    year: "2024",
    image: CERTIFICATE_IMG_1,
    credential: "3b13b31ef1434d91858c93a268a9d9e2"
  },
  {
    id: 2,
    title: "Machine Learning with Python",
    issuer: "Cognitive Class (Powered by IBM Developer Skills Network)",
    year: "2025",
    image: CERTIFICATE_IMG_2,
    credential: "048538a064444ef88336532241450d33"
  },
  {
    id: 3,
    title: "Learning the Basics of Data Visualization",
    issuer: "Dicoding Academy Indonesia (Google Developers Authorized Training Partner)",
    year: "2025",
    image: CERTIFICATE_IMG_3,
    credential: "1RXYQE02QZVM"
  },
  {
    id: 4,
    title: "Learning Artificial Intelligence Basics",
    issuer: "Dicoding Academy Indonesia (Google Developers Authorized Training Partner)",
    year: "2025",
    image: CERTIFICATE_IMG_4,
    credential: "ERZR2LED2PYV"
  },
  {
    id: 5,
    title: "Learning Data Science Basics",
    issuer: "Dicoding Academy Indonesia (Google Developers Authorized Training Partner)",
    year: "2026",
    image: CERTIFICATE_IMG_5,
    credential: "RVZKGDKOOXD5"
  },
  {
    id: 6,
    title: "Learning Structured Query Language (SQL) Basics",
    issuer: "Dicoding Academy Indonesia (Google Developers Authorized Training Partner)",
    year: "2026",
    image: CERTIFICATE_IMG_6,
    credential: "1RXYQKOOKZVM"
  },
  {
    id: 7,
    title: "Learning Data Science Application with Microsoft Fabric",
    issuer: "Dicoding Academy Indonesia (Google Developers Authorized Training Partner)",
    year: "2025",
    image: CERTIFICATE_IMG_7,
    credential: "L4PQ2YQ4OZO1"
  },
  {
    id: 8,
    title: "Building Generative AI Applications with Microsoft Azure",
    issuer: "Dicoding Academy Indonesia (Google Developers Authorized Training Partner)",
    year: "2026",
    image: CERTIFICATE_IMG_8,
    credential: "1RXYQKOOKZVM"
  },
  {
    id: 9,
    title: "Associate Data Scientist + Python - Nasional",
    issuer: "Pusat Pengembangan Telenta Digital Indonesia (Pusbangtaldig) - Kementerian Komunikasi dan Digital (KOMDIGI)",
    year: "2026",
    image: CERTIFICATE_IMG_9,
    credential: ""
  },
  {
    id: 10,
    title: "Dasar-Dasar Implementasi Kecerdasan Artifisial - Micro Skill",
    issuer: "Pusat Pengembangan Telenta Digital Indonesia (Pusbangtaldig) - Kementerian Komunikasi dan Digital (KOMDIGI)",
    year: "2026",
    image: CERTIFICATE_IMG_10,
    credential: ""
  },
  {
    id: 11,
    title: "Data Scientist Supervisor - Nasional",
    issuer: "Pusat Pengembangan Telenta Digital Indonesia (Pusbangtaldig) - Kementerian Komunikasi dan Digital (KOMDIGI)",
    year: "2026",
    image: CERTIFICATE_IMG_11,
    credential: ""
  },
  {
    id: 12,
    title: "Fundamental of Deep Learning - Nasional",
    issuer: "Pusat Pengembangan Telenta Digital Indonesia (Pusbangtaldig) - Kementerian Komunikasi dan Digital (KOMDIGI)",
    year: "2026",
    image: CERTIFICATE_IMG_12,
    credential: ""
  },
  {
    id: 13,
    title: "Introduction to Cyber Security and Career Awareness - Micro Skill",
    issuer: "Pusat Pengembangan Talenta Digital Indonesia (Pusbangtaldig) - Kementerian Komunikasi dan Digital (KOMDIGI)",
    year: "2026",
    image: CERTIFICATE_IMG_13,
    credential: ""
  },
  {
    id: 14,
    title: "Pengenalan Data Science dan Pemanfaatannya di Berbagai Sektor - Micro Skill",
    issuer: "Pusat Pengembangan Telenta Digital Indonesia (Pusbangtaldig) - Kementerian Komunikasi dan Digital (KOMDIGI)",
    year: "2026",
    image: CERTIFICATE_IMG_14,
    credential: "1RXYQKOOKZVM"
  },
];