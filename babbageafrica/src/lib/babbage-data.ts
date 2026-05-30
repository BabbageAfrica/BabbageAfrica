import courseWeb from "@/assets/course-web.jpg";
import courseUiux from "@/assets/course-uiux.jpg";
import courseMobile from "@/assets/course-mobile.jpg";
import courseCyber from "@/assets/course-cyber.jpg";
import courseData from "@/assets/course-data.jpg";
import courseMarketing from "@/assets/course-marketing.jpg";
import coursePython from "@/assets/course-python.jpg";
import courseCloud from "@/assets/course-cloud.jpg";

export type Course = {
  id: string;
  title: string;
  description: string;
  category: string;
  price: number;
  duration: string;
  rating: number;
  image: string;
  level?: string;
  modules?: string[];
  outcomes?: string[];
};

export const categories = [
  "All",
  "Web Development",
  "Mobile App Development",
  "UI/UX Design",
  "Cybersecurity & Networking",
  "ERP & Business Systems",
  "Data Science & Artificial Intelligence",
  "Cloud Computing & DevOps",
  "Digital Marketing",
  "Creative Media",
  "Office & Productivity Skills",
  "Freelancing & Career Skills",
];

const img = {
  web: courseWeb,
  mobile: courseMobile,
  uiux: courseUiux,
  cyber: courseCyber,
  erp: courseData,
  data: courseData,
  cloud: courseCloud,
  marketing: courseMarketing,
  media: courseMarketing,
  office: coursePython,
  career: courseUiux,
};

const make = (
  id: string,
  title: string,
  description: string,
  category: string,
  price: number,
  duration: string,
  rating: number,
  image: string,
  level = "Beginner to Advanced",
  modules: string[] = [],
  outcomes: string[] = []
): Course => ({ id, title, description, category, price, duration, rating, image, level, modules, outcomes });

export const courses: Course[] = [
  // Web Development
  make("html-css", "HTML & CSS", "Build beautiful, responsive websites from scratch using modern HTML5 and CSS3.", "Web Development", 49, "4 weeks", 4.8, img.web, "Beginner",
    ["HTML5 semantic structure", "Modern CSS & Flex/Grid", "Responsive design", "Mini portfolio project"],
    ["Build responsive landing pages", "Deploy your first website"]),
  make("javascript", "JavaScript", "Master the language of the web — DOM, events, ES2024 and interactive programming.", "Web Development", 59, "5 weeks", 4.8, img.web, "Beginner",
    ["JavaScript fundamentals", "DOM & Events", "ES2024 features", "Async programming", "Mini projects"],
    ["Write interactive JS components", "Build dynamic web experiences"]),
  make("reactjs", "React.js", "Build modern, blazing-fast UIs with React, hooks, routing and state.", "Web Development", 109, "8 weeks", 4.9, img.web, "Intermediate",
    ["JSX & Components", "Hooks deep dive", "React Router", "State management", "API integration", "Capstone SPA"],
    ["Ship production React apps", "Master hooks & state patterns"]),
  make("backend", "Backend Development", "Build secure REST APIs with Node.js, Express and databases.", "Web Development", 129, "10 weeks", 4.7, img.web, "Intermediate",
    ["Node.js & Express", "Auth & JWT", "PostgreSQL/MongoDB", "API design", "Testing", "Deployment"],
    ["Design scalable APIs", "Implement auth & databases"]),
  make("fullstack", "Full Stack Development", "Build production-ready apps end-to-end: React, Node, databases and deployment.", "Web Development", 199, "14 weeks", 4.9, img.web, "Advanced",
    ["Frontend with React", "Backend APIs", "Databases", "Auth & Payments", "CI/CD", "Capstone product"],
    ["Build & ship full products", "Work as a full-stack dev"]),
  make("deployment", "Website Deployment", "Take any site live with modern hosting, domains, SSL and CI/CD.", "Web Development", 49, "3 weeks", 4.6, img.web, "Beginner",
    ["Domains & DNS", "Hosting platforms", "SSL & security", "CI/CD basics"],
    ["Deploy any project confidently"]),

  // Mobile App Development
  make("flutter", "Flutter Development", "Ship cross-platform mobile apps for iOS and Android with a single codebase.", "Mobile App Development", 119, "10 weeks", 4.8, img.mobile, "Intermediate",
    ["Dart fundamentals", "Widgets & layouts", "State management", "APIs & storage", "Publish to stores"],
    ["Ship Flutter apps to Play Store"]),
  make("react-native", "React Native", "Build native mobile apps using your React skills.", "Mobile App Development", 119, "10 weeks", 4.7, img.mobile, "Intermediate",
    ["RN core components", "Navigation", "Native modules", "Performance", "Release builds"],
    ["Publish RN apps to iOS & Android"]),
  make("android", "Android App Development", "Native Android apps with Kotlin, Jetpack and modern architecture.", "Mobile App Development", 129, "10 weeks", 4.6, img.mobile, "Intermediate",
    ["Kotlin basics", "Jetpack Compose", "Room & Retrofit", "Material 3", "Play Store release"],
    ["Build & publish Android apps"]),
  make("mobile-uiux", "Mobile UI/UX Design", "Design beautiful, usable mobile interfaces from scratch.", "Mobile App Development", 89, "6 weeks", 4.8, img.uiux, "Beginner",
    ["Mobile patterns", "Figma for mobile", "Prototyping", "Handoff to devs"],
    ["Design app-store-ready mobile UIs"]),

  // UI/UX Design
  make("figma", "Figma Design", "Master Figma — components, auto-layout, variants and design systems.", "UI/UX Design", 79, "5 weeks", 4.9, img.uiux, "Beginner",
    ["Figma fundamentals", "Auto-layout", "Components & variants", "Design tokens"],
    ["Design production-ready UIs in Figma"]),
  make("wireframing", "Wireframing", "Translate ideas into clear low-fi wireframes that align teams.", "UI/UX Design", 49, "3 weeks", 4.7, img.uiux, "Beginner",
    ["Sketching", "Information architecture", "Low-fi wireframes", "User flows"],
    ["Run effective wireframe workshops"]),
  make("prototyping", "Prototyping", "Build clickable prototypes to validate ideas with users.", "UI/UX Design", 59, "4 weeks", 4.7, img.uiux, "Intermediate",
    ["Interactive prototypes", "Smart animate", "User testing setup"],
    ["Test ideas before you build"]),
  make("ux", "User Experience Design", "Research, journey-map and design experiences users love.", "UI/UX Design", 99, "8 weeks", 4.8, img.uiux, "Intermediate",
    ["UX research", "Personas", "Journey maps", "Usability testing"],
    ["Lead UX projects end-to-end"]),
  make("web-mobile-ui", "Mobile & Web Interface Design", "Design polished interfaces for both web and mobile products.", "UI/UX Design", 89, "6 weeks", 4.8, img.uiux, "Intermediate",
    ["Visual design", "Responsive UI", "Design systems"],
    ["Design consistent multi-platform UIs"]),

  // Cybersecurity & Networking
  make("ethical-hacking", "Ethical Hacking", "Think like an attacker — recon, exploitation and reporting.", "Cybersecurity & Networking", 159, "10 weeks", 4.8, img.cyber, "Intermediate",
    ["Recon & scanning", "Web app attacks", "Password attacks", "Reporting"],
    ["Run safe ethical hacks"]),
  make("cyber-basics", "Cybersecurity Basics", "Foundations of security: threats, defenses and best practices.", "Cybersecurity & Networking", 69, "4 weeks", 4.7, img.cyber, "Beginner",
    ["CIA triad", "Common threats", "Defenses", "Security hygiene"],
    ["Protect yourself & your team"]),
  make("network-admin", "Network Administration", "Configure and manage modern networks with confidence.", "Cybersecurity & Networking", 119, "8 weeks", 4.6, img.cyber, "Intermediate",
    ["TCP/IP", "Routing & switching", "VLANs", "Network security"],
    ["Administer business networks"]),
  make("system-security", "System Security", "Harden operating systems and infrastructure against attacks.", "Cybersecurity & Networking", 119, "8 weeks", 4.7, img.cyber, "Intermediate",
    ["OS hardening", "Access control", "Monitoring", "Incident response"],
    ["Secure servers & endpoints"]),
  make("pentest", "Penetration Testing", "Run end-to-end penetration tests on web, network and apps.", "Cybersecurity & Networking", 179, "10 weeks", 4.8, img.cyber, "Advanced",
    ["Pentest methodology", "Tools & frameworks", "Reporting", "Mock engagement"],
    ["Deliver professional pentest reports"]),

  // ERP & Business Systems
  make("school-erp", "School ERP Systems", "Operate and customize a complete school management system.", "ERP & Business Systems", 79, "5 weeks", 4.6, img.erp, "Beginner",
    ["Modules overview", "Admissions", "Fees & accounting", "Reports"],
    ["Run a school ERP end-to-end"]),
  make("hospital-mgmt", "Hospital Management Systems", "Manage patients, billing and operations with hospital software.", "ERP & Business Systems", 89, "5 weeks", 4.6, img.erp, "Beginner",
    ["Patient records", "Appointments", "Billing", "Pharmacy & lab"],
    ["Operate hospital management software"]),
  make("pos", "POS Systems", "Set up and run POS systems for retail and hospitality.", "ERP & Business Systems", 59, "3 weeks", 4.5, img.erp, "Beginner",
    ["POS setup", "Inventory sync", "Payments", "Reports"],
    ["Deploy POS for any retail business"]),
  make("inventory", "Inventory Management Systems", "Track stock, suppliers and orders with modern inventory tools.", "ERP & Business Systems", 69, "4 weeks", 4.6, img.erp, "Beginner",
    ["Stock control", "Suppliers", "Purchase orders", "Reporting"],
    ["Master inventory operations"]),

  // Data Science & Artificial Intelligence
  make("data-analysis", "Data Analysis", "Turn raw data into clear insights with Excel, SQL and Python.", "Data Science & Artificial Intelligence", 129, "8 weeks", 4.9, img.data, "Intermediate",
    ["Excel for analysts", "SQL", "Python pandas", "Storytelling with data"],
    ["Deliver data-driven decisions"]),
  make("ml-basics", "Machine Learning Basics", "Build intuition for ML models, training and evaluation.", "Data Science & Artificial Intelligence", 169, "10 weeks", 4.8, img.data, "Intermediate",
    ["Supervised learning", "Unsupervised learning", "Model evaluation", "Mini ML project"],
    ["Build & evaluate ML models"]),
  make("ai-tools", "Artificial Intelligence Tools", "Use ChatGPT, Claude, Gemini and image tools for real productivity.", "Data Science & Artificial Intelligence", 79, "4 weeks", 4.8, img.data, "Beginner",
    ["Prompt engineering", "ChatGPT & Claude", "AI image tools", "Workflow automation"],
    ["10x your work with AI tools"]),
  make("powerbi", "Power BI & Data Visualization", "Build stunning dashboards that decision-makers love.", "Data Science & Artificial Intelligence", 99, "6 weeks", 4.8, img.data, "Beginner",
    ["Power Query", "Data modeling", "DAX basics", "Dashboards"],
    ["Ship professional Power BI dashboards"]),

  // Cloud Computing & DevOps
  make("cloud-computing", "Cloud Computing", "Understand AWS, Azure and GCP fundamentals.", "Cloud Computing & DevOps", 89, "5 weeks", 4.7, img.cloud, "Beginner",
    ["Cloud concepts", "Compute & storage", "Networking", "Pricing"],
    ["Speak fluent cloud"]),
  make("git-github", "Git & GitHub", "Master version control, branching, PRs and team workflows.", "Cloud Computing & DevOps", 39, "2 weeks", 4.9, img.cloud, "Beginner",
    ["Git basics", "Branching strategies", "Pull requests", "Collaboration"],
    ["Collaborate confidently on any team"]),
  make("website-hosting", "Website Deployment & Hosting", "Deploy apps to Vercel, Netlify, Cloudflare and beyond.", "Cloud Computing & DevOps", 49, "3 weeks", 4.7, img.cloud, "Beginner",
    ["Static & SSR hosting", "Domains & SSL", "Edge deployments"],
    ["Take any project to production"]),
  make("devops", "DevOps Fundamentals", "Master CI/CD, infrastructure as code and monitoring.", "Cloud Computing & DevOps", 139, "8 weeks", 4.7, img.cloud, "Intermediate",
    ["CI/CD pipelines", "Docker basics", "IaC with Terraform", "Monitoring"],
    ["Automate delivery like a pro"]),

  // Digital Marketing
  make("social-media", "Social Media Marketing", "Grow brands on Instagram, TikTok, X and LinkedIn.", "Digital Marketing", 69, "4 weeks", 4.7, img.marketing, "Beginner",
    ["Platform strategy", "Content calendars", "Paid ads", "Analytics"],
    ["Run profitable social campaigns"]),
  make("seo", "SEO (Search Engine Optimization)", "Rank websites on Google with on-page, off-page and technical SEO.", "Digital Marketing", 79, "5 weeks", 4.7, img.marketing, "Beginner",
    ["Keyword research", "On-page SEO", "Backlinks", "Technical SEO"],
    ["Drive organic traffic that converts"]),
  make("content", "Content Creation", "Plan, produce and distribute content that builds audiences.", "Digital Marketing", 59, "4 weeks", 4.6, img.marketing, "Beginner",
    ["Content strategy", "Copywriting", "Repurposing", "Distribution"],
    ["Ship content that grows brands"]),
  make("branding-ads", "Branding & Online Advertising", "Build memorable brands and run high-ROI paid ad campaigns.", "Digital Marketing", 89, "5 weeks", 4.7, img.marketing, "Intermediate",
    ["Brand identity", "Meta Ads", "Google Ads", "Funnels"],
    ["Run ad campaigns that scale"]),

  // Creative Media
  make("graphic-design", "Graphic Design", "Design logos, posters and brand assets with Figma & Canva.", "Creative Media", 79, "5 weeks", 4.7, img.media, "Beginner",
    ["Design principles", "Typography", "Color", "Brand assets"],
    ["Design pro-quality graphics"]),
  make("video-editing", "Video Editing", "Edit cinematic videos with Premiere Pro and CapCut.", "Creative Media", 89, "6 weeks", 4.8, img.media, "Beginner",
    ["Editing fundamentals", "Color grading", "Sound design", "Export workflows"],
    ["Edit videos clients love"]),
  make("photography", "Photography", "Shoot stunning photos with any camera or phone.", "Creative Media", 79, "4 weeks", 4.7, img.media, "Beginner",
    ["Composition", "Lighting", "Camera basics", "Photo editing"],
    ["Capture professional photos"]),
  make("videography", "Videography", "Shoot cinematic videos with any camera or phone.", "Creative Media", 89, "5 weeks", 4.7, img.media, "Beginner",
    ["Video composition", "Lighting for video", "Camera movement", "Post-production"],
    ["Produce professional video content"]),
  make("motion", "Motion Graphics", "Animate logos, kinetic type and explainers with After Effects.", "Creative Media", 109, "7 weeks", 4.7, img.media, "Intermediate",
    ["After Effects basics", "Keyframes", "Kinetic typography", "Export & delivery"],
    ["Create scroll-stopping motion"]),

  // Office & Productivity Skills
  make("ms-office", "Microsoft Office Suite", "Become productive in Word, Excel, PowerPoint and Outlook.", "Office & Productivity Skills", 49, "4 weeks", 4.6, img.office, "Beginner",
    ["Word essentials", "Excel basics", "PowerPoint", "Outlook"],
    ["Crush any office workflow"]),
  make("excel-advanced", "Advanced Microsoft Excel", "Power user level: pivot tables, formulas, dashboards and macros.", "Office & Productivity Skills", 69, "4 weeks", 4.8, img.office, "Intermediate",
    ["Advanced formulas", "Pivot tables", "Power Query", "Dashboards"],
    ["Build Excel dashboards & models"]),
  make("google-workspace", "Google Workspace Tools", "Master Docs, Sheets, Slides, Drive and Gmail collaboration.", "Office & Productivity Skills", 39, "3 weeks", 4.6, img.office, "Beginner",
    ["Docs & Sheets", "Slides", "Drive", "Collaboration"],
    ["Collaborate productively in Google"]),

  // Freelancing & Career Skills
  make("freelancing-fiverr", "Freelancing on Fiverr", "Build a thriving freelance business on Fiverr from scratch.", "Freelancing & Career Skills", 49, "3 weeks", 4.8, img.career, "Beginner",
    ["Profile setup", "Gig creation", "Pricing", "Client communication"],
    ["Land your first Fiverr clients"]),
  make("freelancing-upwork", "Freelancing on Upwork", "Win high-value contracts on Upwork and scale your freelance income.", "Freelancing & Career Skills", 49, "3 weeks", 4.8, img.career, "Beginner",
    ["Profile optimization", "Winning proposals", "Interviews", "Long-term clients"],
    ["Win Upwork contracts consistently"]),
  make("cv-building", "CV Building", "Build a modern CV that gets past ATS and impresses recruiters.", "Freelancing & Career Skills", 29, "2 weeks", 4.7, img.career, "Beginner",
    ["Modern CV formats", "ATS optimization", "Cover letters"],
    ["Stand out to recruiters"]),
  make("portfolio-building", "Portfolio Building", "Build a portfolio that showcases your skills and wins projects.", "Freelancing & Career Skills", 29, "2 weeks", 4.7, img.career, "Beginner",
    ["Portfolio strategy", "Case studies", "LinkedIn optimization", "Personal brand"],
    ["Impress clients with your portfolio"]),
  make("remote-work", "Remote Work Skills", "Thrive in remote teams with the tools, habits and mindset that matter.", "Freelancing & Career Skills", 49, "3 weeks", 4.7, img.career, "Beginner",
    ["Remote tooling", "Async communication", "Time management", "Personal brand"],
    ["Succeed in any remote role"]),
];

export function getCourseById(id: string) {
  return courses.find((c) => c.id === id);
}

export const categoryGroups = categories
  .filter((c) => c !== "All")
  .map((name) => ({
    name,
    count: courses.filter((c) => c.category === name).length,
  }));
