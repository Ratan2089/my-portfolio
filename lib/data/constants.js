export const PERSONAL_INFO = {
  name: "Kumar Ratan",
  roles: ["Full Stack Developer", "MERN Stack Developer", "Node.js Developer", "React Developer"],
  description: "I build scalable full-stack web applications using React, Next.js, Node.js, Express, and MongoDB. Passionate about writing clean, optimized code and creating responsive user experiences.",
  resumeUrl: "/resume/Ratan_Resume.pdf",
  email: "kumar.ratan2089@gmail.com",
  phone: "+91 7428061552",
  location: "Delhi, India",
  experienceYears: "3+",
  projectsCount: "15+",
  technologiesCount: "20+",
  problemSolvingCount: "500+ LeetCode"
};

export const SOCIAL_LINKS = {
  github: "https://github.com/Ratan2089",
  linkedin: "https://www.linkedin.com/in/ratan-kumar2089/",
  email:
    "https://mail.google.com/mail/?view=cm&fs=1&to=kumar.ratan2089@gmail.com"
};

export const NAV_LINKS = [
  { label: "Home", hash: "#home" },
  { label: "About", hash: "#about" },
  { label: "Education", hash: "#education" },
  { label: "Experience", hash: "#experience" },
  { label: "Skills", hash: "#skills" },
  { label: "Projects", hash: "#projects" },
  { label: "Contact", hash: "#contact" }
];

export const STATISTICS = [
  { label: "Years Experience", value: PERSONAL_INFO.experienceYears, detail: "Full-stack development" },
  { label: "Projects Completed", value: PERSONAL_INFO.projectsCount, detail: "Web apps & API services" },
  { label: "Tech Stack Tools", value: PERSONAL_INFO.technologiesCount, detail: "Modern frameworks" },
  { label: "DSA Problems Solved", value: PERSONAL_INFO.problemSolvingCount, detail: "Data structures & algorithms" }
];

export const CORE_STRENGTHS = [
  { title: "Backend Development", desc: "Building secure, scalable REST APIs, microservices, and handling session authentication with JWT/OAuth." },
  { title: "Frontend Architecture", desc: "Creating performant UI systems using Next.js (App Router), React, Tailwind CSS, and Framer Motion." },
  { title: "Database Design", desc: "Modeling optimized database structures using MongoDB/Mongoose, handling indexing and complex aggregations." },
  { title: "Responsive UI/UX", desc: "Prioritizing mobile-first design layouts with standard focus on web accessibility (ARIA) and loading speed." }
];

export const TIMELINE_ABOUT = [
  { year: "2024 - Present", event: "Freelance Full-Stack Developer", desc: "Designing customized, secure web portals and modern Landing Pages." },
  { year: "2024 - 2026", event: "MERN Stack Developer", desc: "Optimized server responses by 30% and built dynamic admin dashboards." },
  { year: "2022 - 2024", event: "Master of Computer Applications (MCA)", desc: "Learned Advanced Software Engineering, Database Systems, and Network Protocols." }
];

export const ACADEMICS = [
  {
    degree: "Master of Computer Applications (MCA)",
    college: "University Institute of Computing",
    university: "Chandigarh University",
    year: "2022 - 2024",
    grade: "7.5 CGPA",
    icon: "GraduationCap"
  },
  {
    degree: "Bachelor of Science (BSc)",
    college: "Shyam Lal College",
    university: "Delhi University",
    year: "2019 - 2022",
    grade: "8.33 CGPA",
    icon: "GraduationCap"
  },
  {
    degree: "Senior Secondary (12th Standard)",
    college: "Ram-Eesh International School",
    university: "CBSE Board",
    year: "2018 - 2019",
    grade: "85%",
    icon: "BookOpen"
  },
  {
    degree: "Secondary School (10th Standard)",
    college: "Ram-Eesh International School",
    university: "CBSE Board",
    year: "2016 - 2017",
    grade: "10 CGPA",
    icon: "Award"
  }
];

export const EXPERIENCE = [
  {
    company: "Shanture",
    role: "MERN Stack Developer",
    duration: "July 2024 - Feb 2026",
    responsibilities: [
      "Developed a real-time team collaboration dashboard using MERN stack, enabling seamless communication and task management for internal teams.",
      "Optimized backend API performance, reducing response times by 35% through effective caching strategies and query optimization.",
      "Integrated third-party payment gateway for subscription-based service, ensuring secure transaction processing and data encryption.",
      "Implemented automated email notification system using Nodemailer and SendGrid, reducing manual follow-ups by 50%."
    ],
    technologies: ["Next.js", "React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Redux Toolkit", "JWT", "Redis", "Socket.io", "Postman"],
    achievements: "Delivered project 2 weeks ahead of schedule, receiving positive feedback from stakeholders for quality and timely delivery."
  },
  // {
  //   company: "InnoSoft Systems",
  //   role: "MERN Stack Developer",
  //   duration: "Aug 2022 - Dec 2023",
  //   responsibilities: [
  //     "Collaborated in an agile team of 5 engineers to build a SaaS workflow management software.",
  //     "Integrated secure authentication systems using JWT, HttpOnly cookies, and role-based access control (RBAC).",
  //     "Created dynamic charting modules displaying real-time analytics using React, Chart.js, and Express WebSockets.",
  //     "Maintained 95%+ unit test coverage for critical payment and checkout backend endpoints using Jest."
  //   ],
  //   technologies: ["React.js", "Node.js", "Express", "MongoDB", "Redux", "Bootstrap", "Git", "Postman"],
  //   achievements: "Decreased user onboarding churn rate by 15% through implementing interactive user walkthrough guides."
  // }
];

export const SKILL_CATEGORIES = [
  {
    category: "Frontend",
    skills: [
      { name: "React", progress: 95 },
      { name: "Next.js", progress: 90 },
      { name: "JavaScript", progress: 95 },
      { name: "HTML", progress: 95 },
      { name: "CSS", progress: 95 },
      { name: "Tailwind", progress: 95 },
      { name: "Redux", progress: 85 }
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", progress: 90 },
      { name: "Express", progress: 90 },
      { name: "REST API", progress: 95 },
      { name: "JWT", progress: 90 }
    ]
  },
  {
    category: "Database",
    skills: [
      { name: "MongoDB", progress: 88 },
      { name: "SQL", progress: 90 }

    ]
  },
  {
    category: "Languages",
    skills: [
      { name: "JavaScript", progress: 95 }
    ]
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", progress: 90 },
      { name: "GitHub", progress: 90 },
      { name: "VS Code", progress: 95 },
      { name: "Postman", progress: 90 }
    ]
  },
  {
    category: "Deployment",
    skills: [
      { name: "Vercel", progress: 92 },
      { name: "Netlify", progress: 80 },
      { name: "Render", progress: 93 },


    ]
  }
];

export const PROJECTS = [
  {
    id: "bridge-x",
    name: "BridgeX",
    category: "Full Stack",
    description: "A collaborative real-time team collaboration platform combining messaging, board-style task tracking, and document sharing in a single workspace. Supports instant workspace creation, live notifications, and file uploads.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop",
    techStack: ["React.js", "MongoDB", "Express", "Node.js", "Tailwind CSS", "Framer Motion", "Ant Design", "Rest Api"],
    features: [
      "Real-time team chat with web-sockets and active indicator states.",
      "Interactive kanban drag-and-drop workflow tracking.",
      "Shared folder management with secure direct AWS S3 uploads."
    ],
    github: "https://github.com/kumar-ratan/bridge-x",
    // demo: "https://bridge-x-demo.vercel.app"
  },

  {
    id: "expense-tracker",
    name: "Expense Tracker",
    category: "Full Stack",
    description: "An intuitive personal finance application highlighting user monthly budgets, recurring expense patterns, and category-wise breakdowns. Integrates charts for financial health reporting.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=600&auto=format&fit=crop",
    techStack: ["React.js", "Redux", "Tailwind CSS", "Express", "MongoDB"],
    features: [
      "Interactive finance reports showing category distributions.",
      "Export capability parsing statements to CSV formats.",
      "Intelligent notifications alerting on budget limits exceedances."
    ],
    github: "https://github.com/Ratan2089/expense-tracker",
    // demo: "https://exp-tracker-app.vercel.app"
  },
  {
    id: "e-commerce",
    name: "E-Commerce",
    category: "Full Stack",
    description: "A full-featured digital storefront showcasing product reviews, category filtering, user checkout systems via Stripe, and an automated store manager dashboard showing sales pipelines.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=600&auto=format&fit=crop",
    techStack: ["Next.js", "Stripe API", "MongoDB", "Express", "Tailwind CSS", "Auth.js"],
    features: [
      "Full Stripe Checkout integration with webhook processing.",
      "Interactive filters supporting price sliders and dynamic queries.",
      "Admin analytics panel tracking active shopping carts."
    ],
    github: "https://github.com/kumar-ratan/ecommerce-suite",
    demo: "https://ecommerce-suite-demo.vercel.app"
  },
  {
    id: "santoshi-website",
    name: "Santoshi Website",
    category: ["Frontend", "React"],
    description:
      "A modern and responsive corporate website developed for Santoshi during my tenure at Shanture. Built using React.js with a focus on performance, reusable components, responsive design, and an intuitive user experience.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
    techStack: [
      "React.js",
      "JavaScript",
      "Tailwind CSS",
      "HTML5",
      "CSS3"
    ],
    features: [
      "Developed responsive and pixel-perfect user interfaces across desktop, tablet, and mobile devices.",
      "Built reusable React components to improve maintainability and scalability.",
      "Optimized website performance, accessibility, and overall user experience."
    ],
    github: "",
    demo: "https://santoshi.in/"
  },
  {
    id: "doctor-clinic-website",
    name: "Doctor Clinic Website",
    category: "Frontend",
    description: "A premium, fully responsive developer portfolio featuring dark mode support, seamless scroll animations, glassmorphism design layouts, intersection observer link highlights, and contact form verification.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
    techStack: ["HTML5", "CSS3", "JavaScript ES6", "Tailwind CSS", "Framer Motion", "Lucide Icons"],
    features: [
      "Glassmorphic design system featuring smooth gradient mesh backdrops.",
      "Tailored custom intersection hooks indicating section scroll position.",
      "Interactive multi-filter animations using Framer Motion."
    ],
    github: "https://github.com/Ratan2089/Doctor-Clinic-Web",
    // demo: "https://kumar-ratan.vercel.app"
  },
];

export const CERTIFICATES = [
  { title: "Advanced React & Next.js", provider: "Vercel Academy", year: "2024" },
  { title: "MERN Full Stack Developer Certification", provider: "Udemy", year: "2023" },
  { title: "Data Structures & Algorithms in C++", provider: "Coding Ninjas", year: "2022" }
];
