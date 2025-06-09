import { Project, Skill, SocialLink, NavItem, Testimonial } from "../types";

export const navItems: NavItem[] = [
  { title: "Home", href: "#home" },
  { title: "About", href: "#about" },
  { title: "Skills", href: "#skills" },
  { title: "Projects", href: "#projects" },
  { title: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com/sukanta47",
    icon: "github",
  },
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/in/sukantab47",
    icon: "linkedin",
  },
  {
    platform: "Twitter",
    url: "https://x.com/sukanta47",
    icon: "twitter",
  },
  {
    platform: "Dev.to",
    url: "https://dev.to/sukanta47",
    icon: "devto",
  },
  {
    platform: "Medium",
    url: "https://medium.com/@biswas.sukanta47",
    icon: "medium",
  },
  {
    platform: "Upwork",
    url: "https://www.upwork.com/freelancers/~0110558c234c1d168d?mp_source=share",
    icon: "upwork",
  },
];

export const skills: Skill[] = [
  {
    name: "React",
    proficiency: 90,
    category: "frontend",
    icon: "reactjs",
    description:"Proficient in React.js for building scalable, component-driven UIs with modern features like hooks, lazy loading, and Redux Toolkit. Focused on performance, accessibility, and clean architecture.",
    subskills: [
      {
        subSkill: "framer-motion",
        proficiency: 75,
        description:
          "I have used Framer Motion for creating smooth animations and transitions in React applications.",
      },
      {
        subSkill: "contextApi",
        proficiency: 90,
        description:
          "I have experience with contextApi for data sharing between components without prop drilling.",
      },
      {
        subSkill: "react-router",
        proficiency: 90,
        description:
          "I have experience in react-router-dom v5 as well as modern routing with v6 and v7.",
      },
    ],
  },
  {
    name: "TypeScript",
    proficiency: 85,
    category: "frontend",
    icon: "typescript",
    subskills: [
      {
        subSkill: "Type Annotations",
        proficiency: 90,
        description:
          "Strong understanding of type annotations for variables, functions, and complex data structures.",
      },
      {
        subSkill: "Interfaces & Types",
        proficiency: 85,
        description:
          "Proficient in defining and using interfaces and custom types for robust type checking.",
      },
      {
        subSkill: "Generics",
        proficiency: 75,
        description:
          "Experience with generic types to create reusable and type-safe components and functions.",
      },
      {
        subSkill: "Utility Types",
        proficiency: 80,
        description:
          "Familiar with key utility types like Partial, Pick, Omit, and Record for type transformations.",
      },
    ],
  },
  {
    name: "JavaScript",
    proficiency: 95,
    category: "frontend",
    icon: "javascript",
    subskills: [
      {
        subSkill: "ES6+ Features",
        proficiency: 95,
        description:
          "Extensive experience with modern JavaScript features including arrow functions, destructuring, spread/rest operators, etc.",
      },
      {
        subSkill: "Asynchronous JS",
        proficiency: 90,
        description:
          "Deep understanding of promises, async/await, and event loop for handling asynchronous operations.",
      },
      {
        subSkill: "Functional Programming",
        proficiency: 85,
        description:
          "Proficient in functional programming concepts like pure functions, higher-order functions, and immutability.",
      },
      {
        subSkill: "DOM Manipulation",
        proficiency: 90,
        description:
          "Strong skills in manipulating the DOM directly and optimizing performance.",
      },
    ],
  },
  {
    name: "HTML",
    proficiency: 90,
    category: "frontend",
    icon: "html5",
    subskills: [
      {
        subSkill: "Semantic HTML",
        proficiency: 95,
        description:
          "Strong focus on writing semantic, accessible HTML markup following best practices.",
      },
      {
        subSkill: "CSS Flexbox/Grid",
        proficiency: 90,
        description:
          "Expertise in modern layout techniques using Flexbox and CSS Grid for responsive designs.",
      },
      {
        subSkill: "CSS Animations",
        proficiency: 80,
        description:
          "Experience creating smooth transitions and animations using pure CSS.",
      },
      {
        subSkill: "Accessibility",
        proficiency: 85,
        description:
          "Knowledge of WCAG guidelines and ARIA attributes for creating accessible web applications.",
      },
    ],
  },
  {
    name: "CSS",
    proficiency: 90,
    category: "frontend",
    icon: "css3",
    subskills: [],
  },
  {
    name: "Redux",
    proficiency: 85,
    category: "frontend",
    icon: "redux",
    subskills: [
      {
        subSkill: "Redux Toolkit (RTK)",
        proficiency: 85,
        description:
          "I have extensive experience state management using Redux as RTK. I am proficient in writing slices and its corresponding reducers.",
      },
      {
        subSkill: "RTK/Query",
        proficiency: 80,
        description:
          "I have experience with React Query for data fetching and caching, which helps in managing server state efficiently.",
      },
    ],
  },
  {
    name: "Angular",
    proficiency: 85,
    category: "frontend",
    icon: "angular",
    subskills: [
      {
        subSkill: "Components & Modules",
        proficiency: 90,
        description:
          "Expert in creating reusable components and organizing them into feature and shared modules for scalable architecture.",
      },
      {
        subSkill: "Reactive Forms & Template-Driven Forms",
        proficiency: 85,
        description:
          "Extensive experience with both reactive and template-driven forms for building dynamic and validated forms.",
      },
      {
        subSkill: "RxJS & Observables",
        proficiency: 80,
        description:
          "Proficient in using RxJS for reactive programming, handling streams, and managing complex asynchronous logic.",
      },
      {
        subSkill: "Dependency Injection",
        proficiency: 85,
        description:
          "Solid understanding of Angular's DI system to create flexible, testable, and maintainable services.",
      },
      {
        subSkill: "Angular Routing",
        proficiency: 80,
        description:
          "Experienced in configuring routes, lazy loading modules, route guards, and parameterized navigation.",
      },
      {
        subSkill: "State Management (NgRx)",
        proficiency: 75,
        description:
          "Worked with NgRx for managing application state in large-scale Angular applications using Redux pattern.",
      },
      {
        subSkill: "Angular CLI & Project Setup",
        proficiency: 85,
        description:
          "Efficient in using Angular CLI for scaffolding, serving, and building Angular projects with custom configurations.",
      },
    ],
  },
  {
    name: "Vue.js",
    proficiency: 80,
    category: "frontend",
    icon: "vuejs",
    subskills: [
      {
        subSkill: "Vue Components & Composition API",
        proficiency: 85,
        description:
          "Proficient in building scalable applications using Vue’s Single File Components and the modern Composition API.",
      },
      {
        subSkill: "Vue Router",
        proficiency: 80,
        description:
          "Experience in configuring routing, nested routes, route guards, and lazy loading components using Vue Router.",
      },
      {
        subSkill: "Reactive Forms & v-model",
        proficiency: 85,
        description:
          "Skilled in creating forms using `v-model` with reactive data binding, validation, and form handling logic.",
      },
      {
        subSkill: "Composition API & Reusability",
        proficiency: 80,
        description:
          "Built reusable logic across components using `setup()`, `ref`, `computed`, and custom composables.",
      },
      {
        subSkill: "Vue Lifecycle & Directives",
        proficiency: 85,
        description:
          "Strong knowledge of Vue’s lifecycle hooks and built-in directives like `v-if`, `v-for`, and `v-bind`.",
      },
      {
        subSkill: "Vue CLI / Vite",
        proficiency: 80,
        description:
          "Experienced in project scaffolding, development, and builds using Vue CLI and modern tooling like Vite.",
      },
    ],
  },
  {
    name: "Next.js",
    proficiency: 75,
    category: "frontend",
    icon: "nextjs",
    subskills: [
      {
        subSkill: "File-based Routing",
        proficiency: 85,
        description:
          "Utilized Next.js file-system-based router to define dynamic and nested routes with ease.",
      },
      {
        subSkill: "API Routes",
        proficiency: 75,
        description:
          "Created serverless API endpoints using Next.js API routes for backend logic and data processing.",
      },
      {
        subSkill: "Static Site Generation (SSG)",
        proficiency: 80,
        description:
          "Implemented static generation with `getStaticProps` and `getStaticPaths` for performance and scalability.",
      },
      {
        subSkill: "Server-Side Rendering (SSR)",
        proficiency: 70,
        description:
          "Used `getServerSideProps` to fetch data on every request for dynamic pages.",
      },
      {
        subSkill: "Incremental Static Regeneration (ISR)",
        proficiency: 65,
        description:
          "Leveraged ISR to update static content without rebuilding the entire site.",
      },
      {
        subSkill: "Image Optimization",
        proficiency: 70,
        description:
          "Optimized media with Next.js's built-in Image component for better performance.",
      },
      {
        subSkill: "App Directory & Server Components",
        proficiency: 60,
        description:
          "Explored the new app directory structure and server components in Next.js 13+ for better modularization.",
      },
    ],
  },
  {
    name: "Tailwind CSS",
    proficiency: 85,
    category: "frontend",
    icon: "tailwindcss",
    subskills: [
      {
        subSkill: "Utility-First Workflow",
        proficiency: 90,
        description:
          "Highly proficient in the utility-first approach for rapid UI development.",
      },
      {
        subSkill: "Custom Configuration",
        proficiency: 80,
        description:
          "Experience extending and customizing Tailwind's default configuration.",
      },
      {
        subSkill: "Dark Mode",
        proficiency: 85,
        description:
          "Implemented dark mode functionality using Tailwind's dark variant.",
      },
      {
        subSkill: "JIT Mode",
        proficiency: 75,
        description:
          "Experience working with Just-In-Time mode for improved performance.",
      },
    ],
  },
  {
    name: "SASS",
    proficiency: 80,
    category: "frontend",
    icon: "sass",
    subskills: [
      {
        subSkill: "Variables & Mixins",
        proficiency: 85,
        description:
          "Extensive use of variables and mixins for maintainable and DRY CSS.",
      },
      {
        subSkill: "Nesting",
        proficiency: 80,
        description:
          "Proficient in nested syntax for cleaner and more organized stylesheets.",
      },
      {
        subSkill: "Modules",
        proficiency: 75,
        description:
          "Experience organizing styles into modular partial files for better structure.",
      },
      {
        subSkill: "Functions",
        proficiency: 70,
        description:
          "Created custom functions for complex calculations and operations in styles.",
      },
    ],
  },
  {
    name: "Node.js",
    proficiency: 60,
    category: "backend",
    icon: "nodejs",
    subskills: [
      {
        subSkill: "REST API Development",
        proficiency: 80,
        description:
          "Experience building RESTful APIs with Node.js and Express.",
      },
      {
        subSkill: "File System",
        proficiency: 70,
        description:
          "Worked with Node's file system module for various I/O operations.",
      },
      {
        subSkill: "Streams",
        proficiency: 65,
        description:
          "Basic understanding of working with streams for handling large datasets.",
      },
      {
        subSkill: "Error Handling",
        proficiency: 75,
        description:
          "Implemented robust error handling middleware and patterns.",
      },
    ],
  },
  {
    name: "Express",
    proficiency: 50,
    category: "backend",
    icon: "expressjs",
    subskills: [
      {
        subSkill: "Middleware",
        proficiency: 75,
        description:
          "Experience creating and using middleware for various application needs.",
      },
      {
        subSkill: "Routing",
        proficiency: 80,
        description:
          "Proficient in setting up and organizing routes in Express applications.",
      },
      {
        subSkill: "Authentication",
        proficiency: 65,
        description:
          "Implemented JWT-based authentication in Express applications.",
      },
      {
        subSkill: "Error Handling",
        proficiency: 70,
        description:
          "Configured custom error handling middleware for API responses.",
      },
    ],
  },
  {
    name: "MongoDB",
    proficiency: 65,
    category: "backend",
    icon: "mongodb",
    subskills: [
      {
        subSkill: "CRUD Operations",
        proficiency: 70,
        description:
          "Experience performing all basic CRUD operations with MongoDB.",
      },
      {
        subSkill: "Aggregation",
        proficiency: 60,
        description:
          "Basic understanding of aggregation pipelines for complex queries.",
      },
      {
        subSkill: "Indexing",
        proficiency: 55,
        description:
          "Knowledge of creating indexes for performance optimization.",
      },
      {
        subSkill: "Mongoose ODM",
        proficiency: 65,
        description:
          "Experience working with Mongoose for schema validation and modeling.",
      },
    ],
  },
  {
    name: "Figma",
    proficiency: 85,
    category: "design",
    icon: "figma",
    subskills: [
      {
        subSkill: "Component Libraries",
        proficiency: 90,
        description:
          "Created and maintained reusable component libraries in Figma.",
      },
      {
        subSkill: "Auto Layout",
        proficiency: 85,
        description:
          "Extensive use of auto layout for responsive and scalable designs.",
      },
      {
        subSkill: "Prototyping",
        proficiency: 80,
        description:
          "Built interactive prototypes with complex animations and transitions.",
      },
      {
        subSkill: "Design Handoff",
        proficiency: 75,
        description:
          "Prepared designs for developer handoff with proper documentation.",
      },
    ],
  },
  {
    name: "Git",
    proficiency: 85,
    category: "other",
    icon: "git",
    subskills: [
      {
        subSkill: "Version Control",
        proficiency: 90,
        description:
          "Strong understanding of Git version control for collaborative development.",
      },
      {
        subSkill: "Branching Strategy",
        proficiency: 85,
        description: "Experience with Git Flow and other branching strategies.",
      },
      {
        subSkill: "Pull Requests",
        proficiency: 80,
        description:
          "Regularly create and review pull requests with proper documentation.",
      },
      {
        subSkill: "CI/CD Integration",
        proficiency: 75,
        description: "Configured GitHub Actions for basic CI/CD pipelines.",
      },
    ],
  },
  {
    name: "GitHub",
    proficiency: 85,
    category: "other",
    icon: "github",
    subskills: [],
  },
  {
    name: "Docker",
    proficiency: 60,
    category: "other",
    icon: "docker",
    subskills: [
      {
        subSkill: "Containerization",
        proficiency: 65,
        description:
          "Basic experience containerizing applications with Docker.",
      },
      {
        subSkill: "Docker Compose",
        proficiency: 55,
        description:
          "Configured multi-container applications using Docker Compose.",
      },
      {
        subSkill: "Image Optimization",
        proficiency: 50,
        description:
          "Basic understanding of optimizing Docker images for size and performance.",
      },
      {
        subSkill: "Networking",
        proficiency: 45,
        description: "Basic knowledge of Docker networking concepts.",
      },
    ],
  },
  {
    name: "AWS",
    proficiency: 55,
    category: "other",
    icon: "aws",
    subskills: [
      {
        subSkill: "EC2",
        proficiency: 60,
        description: "Basic experience deploying and managing EC2 instances.",
      },
      {
        subSkill: "S3",
        proficiency: 65,
        description:
          "Configured S3 buckets for static website hosting and file storage.",
      },
      {
        subSkill: "Lambda",
        proficiency: 50,
        description: "Created basic serverless functions with AWS Lambda.",
      },
      {
        subSkill: "IAM",
        proficiency: 55,
        description: "Configured basic IAM policies and permissions.",
      },
    ],
  },
  {
    name: "Bootstrap",
    proficiency: 75,
    category: "frontend",
    icon: "bootstrap",
    subskills: [],
  },
  {
    name: "GitLab",
    proficiency: 70,
    category: "other",
    icon: "gitlab",
    subskills: [
      {
        subSkill: "Repository Management",
        proficiency: 80,
        description:
          "Used GitLab repositories for source control, merge requests, and code collaboration.",
      },
      {
        subSkill: "CI/CD Pipelines",
        proficiency: 75,
        description:
          "Configured GitLab CI/CD pipelines using `.gitlab-ci.yml` for continuous integration and deployment.",
      },
      {
        subSkill: "Issues & Boards",
        proficiency: 70,
        description:
          "Utilized GitLab issues, labels, and boards for task tracking and sprint planning.",
      },
      {
        subSkill: "Environments & Deployments",
        proficiency: 60,
        description:
          "Managed environments and deployment stages for staging and production workflows.",
      },
    ],
  },
  {
    name: "Jira",
    proficiency: 80,
    category: "other",
    icon: "jira",
    subskills: [
      {
        subSkill: "Agile Boards",
        proficiency: 85,
        description:
          "Managed Scrum and Kanban boards for sprint planning, backlog grooming, and tracking progress.",
      },
      {
        subSkill: "Issue Tracking",
        proficiency: 80,
        description:
          "Created and managed epics, stories, and tasks with detailed descriptions and workflows.",
      },
      {
        subSkill: "Workflows & Automation",
        proficiency: 75,
        description:
          "Configured custom workflows and automation rules for efficient task transitions and notifications.",
      },
      {
        subSkill: "Reports & Dashboards",
        proficiency: 70,
        description:
          "Used burndown charts, velocity reports, and custom dashboards for performance tracking.",
      },
    ],
  },
  {
    name: "Material UI",
    proficiency: 75,
    category: "frontend",
    icon: "materialui",
    subskills: [
      {
        subSkill: "Component Customization",
        proficiency: 85,
        description:
          "Customized MUI components using theme overrides and `sx` prop for styling consistency.",
      },
      {
        subSkill: "Theming",
        proficiency: 80,
        description:
          "Created responsive and dark/light themes using MUI’s theming system.",
      },
      {
        subSkill: "Data Grid & Tables",
        proficiency: 70,
        description:
          "Implemented interactive tables using MUI Data Grid with features like sorting and pagination.",
      },
      {
        subSkill: "Form Controls",
        proficiency: 75,
        description:
          "Used MUI form controls with validation libraries like React Hook Form and Yup.",
      },
    ],
  },
  {
    name: "Storybook",
    proficiency: 70,
    category: "frontend",
    icon: "storybook",
    subskills: [
      {
        subSkill: "Component Isolation",
        proficiency: 80,
        description:
          "Built and tested components in isolation for rapid UI development and debugging.",
      },
      {
        subSkill: "Documentation",
        proficiency: 75,
        description:
          "Generated visual and interactive documentation for UI components using MDX and stories.",
      },
      {
        subSkill: "Addons & Controls",
        proficiency: 70,
        description:
          "Used addons like Actions, Controls, and Knobs to enhance component interaction and testing.",
      }
    ],
  },
  {
    name: "Trello",
    proficiency: 85,
    category: "other",
    icon: "trello",
    subskills: [
      {
        subSkill: "Task Management",
        proficiency: 90,
        description:
          "Used Trello boards to manage personal and team project tasks with labels and checklists.",
      },
      {
        subSkill: "Custom Workflows",
        proficiency: 80,
        description:
          "Created custom workflows using lists, cards, and automation to reflect real-world processes.",
      },
    ],
  },
  {
    name: "Visual Studio Code",
    proficiency: 90,
    category: "other",
    icon: "visualstudio",
    subskills: [
      {
        subSkill: "Extensions & Plugins",
        proficiency: 95,
        description:
          "Used essential extensions like Prettier, ESLint, GitLens, and Tailwind IntelliSense for enhanced productivity.",
      },
      {
        subSkill: "Debugging",
        proficiency: 85,
        description:
          "Efficiently debugged JavaScript/TypeScript and Node.js apps using VS Code’s integrated debugger.",
      },
      {
        subSkill: "Customization & Snippets",
        proficiency: 90,
        description:
          "Customized keybindings, themes, and created user-defined snippets for reusable code blocks.",
      },
    ],
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "A full-featured e-commerce platform with product management, cart, checkout, and payment integration.",
    image:
      "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe API"],
    demoUrl: "https://demo-ecommerce.com",
    githubUrl: "https://github.com/yourusername/ecommerce",
    featured: true,
    category: "web",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A Kanban-style task management application with drag and drop functionality and team collaboration features.",
    image:
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
    demoUrl: "https://task-management-app.com",
    githubUrl: "https://github.com/yourusername/task-management",
    featured: true,
    category: "web",
  },
  {
    id: 3,
    title: "Fitness Tracking Mobile App",
    description:
      "A cross-platform mobile application for tracking workouts, nutrition, and fitness progress.",
    image:
      "https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["React Native", "TypeScript", "Redux", "Firebase"],
    demoUrl: "https://fitness-app.com",
    githubUrl: "https://github.com/yourusername/fitness-app",
    featured: false,
    category: "mobile",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description:
      "A personalized portfolio website showcasing my projects, skills, and professional experience.",
    image:
      "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    demoUrl: "https://myportfolio.com",
    githubUrl: "https://github.com/yourusername/portfolio",
    featured: true,
    category: "web",
  },
  {
    id: 5,
    title: "Weather Dashboard",
    description:
      "A real-time weather dashboard with location-based forecasts, maps, and severe weather alerts.",
    image:
      "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["React", "OpenWeather API", "Chart.js", "Tailwind CSS"],
    demoUrl: "https://weather-dashboard.com",
    githubUrl: "https://github.com/yourusername/weather-dashboard",
    featured: false,
    category: "web",
  },
  {
    id: 6,
    title: "Restaurant Booking System",
    description:
      "A restaurant reservation system with table management, customer profiles, and automated reminders.",
    image:
      "https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["React", "Node.js", "PostgreSQL", "Express", "Twilio API"],
    demoUrl: "https://restaurant-booking.com",
    githubUrl: "https://github.com/yourusername/restaurant-booking",
    featured: false,
    category: "web",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "Tech Innovators Inc.",
    avatar:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    content:
      "Working with this developer was an absolute pleasure. Their attention to detail and problem-solving abilities significantly improved our product's user experience.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CTO",
    company: "Startup Ventures",
    avatar:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    content:
      "Exceptional technical skills combined with great communication. Delivered our project ahead of schedule with all requirements met and exceeded our expectations.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "UX Designer",
    company: "Creative Solutions",
    avatar:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    content:
      "As a designer, I appreciate developers who can accurately translate designs into functioning products. Their work was pixel-perfect and they added thoughtful interactions that enhanced the user experience.",
  },
];

export const aboutMe = {
  name: "Smith John",
  title: "Technical Architect",
  location: "Boston, USA",
  email: "smith.john@gmail.com",
  phone: "+1 123-456-7890",
  bio_headline: `I'm a passionate UI developer with 10+ years of experience crafting modern web and mobile applications. I specialize in React, TypeScript, JavaScript, Angular, Redux, Node.js, and Firebase, with a strong focus on intuitive user experiences and performance.`,
  bio: `I'm a passionate full-stack developer with over 10 years of experience building modern web and mobile applications. I specialize in React, TypeScript, and Node.js, with a strong focus on creating intuitive user experiences.

My journey in technology began with a computer science degree, but my passion for building beautiful, functional interfaces led me to specialize in front-end development with a keen interest in UX design principles.

When I'm not coding, you can find me hiking in the mountains, experimenting with new cooking recipes, or contributing to open-source projects. I believe in continuous learning and staying current with emerging technologies and best practices.

I'm currently open to freelance opportunities and collaborations on innovative projects.`,

  experience: [
    {
      role: "Technical Architect",
      company: "Tech Innovations Inc.",
      period: "Jan 2021 - Present",
      description:
        "Lead the frontend development team in building responsive web applications using React, TypeScript, and modern CSS frameworks.",
    },
    {
      role: "Senior Lead Full Stack Developer",
      company: "Digital Solutions Agency",
      period: "Mar 2019 - Dec 2020",
      description:
        "Developed full-stack web applications using React, Node.js, and MongoDB, implementing RESTful APIs and responsive UI components.",
    },
    {
      role: "UX/UI Developer",
      company: "Creative Design Studio",
      period: "Jun 2017 - Feb 2019",
      description:
        "Collaborated with designers to implement user interfaces for web and mobile applications, focusing on accessibility and user experience.",
    },
  ],

  education: [
    {
      degree: "Master of Science in Computer Science",
      institution: "Stanford University",
      period: "2015 - 2017",
      gpa: "85%",
    },
    {
      degree: "Bachelor of Science in Software Engineering",
      institution: "University of California, Berkeley",
      period: "2011 - 2015",
      gpa: "85%",
    },
  ],
  languages:[
    {
      name: "English",
      locale: "English, [ˈɪŋɡlɪʃ]",
      proficiency: "Fluent",
      score: "7.5",
      wikiUrl: "https://en.wikipedia.org/wiki/English_language",
    },
    {
      name: "Bengali",
      locale: "বাংলা, Bāṅlā, [ˈbaŋla]",
      proficiency: "Native",
      score: "9.5",
      wikiUrl: "https://en.wikipedia.org/wiki/Bengali_language",
    },
    {
      name: "Hindi",
      locale: "हिन्दी, Hindī, [ˈɦɪn̪diː]",
      proficiency: "Native",
      score: "9.5",
      wikiUrl: "https://en.wikipedia.org/wiki/Hindi_language",
    },
    // {
    //   name: "Rajasthani",
    //   locale: "राजस्थानी, Rājasthānī, [ˈraːdʒəsˈtʰaːni]",
    //   proficiency: "Native",
    //   score: "8.5",
    //   wikiUrl: "https://en.wikipedia.org/wiki/Rajasthani_languages"
    // },
    {
      name: "Mewari",
      locale: "मेवाड़ी, Mewārī, [mɛˈwɑːri]",
      proficiency: "Native",
      score: "8.5",
      wikiUrl: "https://en.wikipedia.org/wiki/Mewari_language"
    }
  ]
};