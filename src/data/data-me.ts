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
    url: "https://twitter.com/sukanta47",
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
    description:
      "Proficient in React.js for building scalable, component-driven UIs with modern features like hooks, lazy loading, and Redux Toolkit. Focused on performance, accessibility, and clean architecture.",
    subskills: [
      {
        subSkill: "Hooks (useState, useEffect, custom hooks)",
        proficiency: 90,
        description:
          "Expert in leveraging React hooks to manage state, side effects, and reusable logic across components.",
      },
      {
        subSkill: "React Router",
        proficiency: 90,
        description:
          "Experience in implementing client-side routing using React Router v5, v6, and v7 with nested and dynamic routes.",
      },
      {
        subSkill: "Context API",
        proficiency: 90,
        description:
          "Skilled in using Context API for managing global state and avoiding prop drilling in medium to large applications.",
      },
      {
        subSkill: "Redux & Redux Toolkit",
        proficiency: 85,
        description:
          "Proficient in Redux for predictable state management, with hands-on experience using RTK slices, async thunks, and DevTools.",
      },
      {
        subSkill: "Framer Motion",
        proficiency: 75,
        description:
          "Used Framer Motion for creating smooth animations, transitions, and interactive UI effects in React apps.",
      },
      {
        subSkill: "Performance Optimization",
        proficiency: 80,
        description:
          "Optimized React apps using code splitting, memoization (React.memo, useMemo, useCallback), and lazy loading.",
      },
      // {
      //   subSkill: "Testing (React Testing Library & Jest)",
      //   proficiency: 70,
      //   description:
      //     "Experience writing unit and integration tests to ensure UI reliability and maintainability.",
      // },
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
        proficiency: 80,
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
    proficiency: 88,
    category: "frontend",
    icon: "javascript",
    description:
      "Expert in modern JavaScript (ES6+) with a strong foundation in functional programming, asynchronous patterns, and DOM manipulation. Skilled at writing clean, performant, and maintainable code for scalable web applications.",
    subskills: [
      {
        subSkill: "ES6+ Features",
        proficiency: 95,
        description:
          "Extensive experience with ES6+ features including arrow functions, template literals, destructuring, spread/rest operators, modules, and optional chaining.",
      },
      {
        subSkill: "Asynchronous JavaScript",
        proficiency: 90,
        description:
          "Deep understanding of promises, async/await, event loop, microtasks/macrotasks, and handling concurrent operations effectively.",
      },
      {
        subSkill: "Functional Programming",
        proficiency: 85,
        description:
          "Proficient in functional programming concepts like pure functions, immutability, higher-order functions, map/reduce/filter, and composition.",
      },
      {
        subSkill: "DOM Manipulation",
        proficiency: 90,
        description:
          "Strong skills in manipulating and traversing the DOM directly, optimizing reflows/repaints, and handling events efficiently.",
      },
      {
        subSkill: "Error Handling & Debugging",
        proficiency: 85,
        description:
          "Skilled in using try/catch, custom error objects, and debugging tools (Chrome DevTools, console, breakpoints) for robust applications.",
      },
      {
        subSkill: "Performance Optimization",
        proficiency: 80,
        description:
          "Knowledge of optimizing JS performance with techniques like debouncing, throttling, memoization, and minimizing blocking operations.",
      },
      // {
      //   subSkill: "Testing with Jest",
      //   proficiency: 40,
      //   description:
      //     "Experience writing unit tests and mocking with Jest to ensure JavaScript code reliability and maintainability.",
      // },
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
          "Extensive experience in managing application state efficiently using Redux Toolkit.",
      },
      {
        subSkill: "Slices & Reducers",
        proficiency: 80,
        description:
          "Proficient in structuring state with slices and implementing reducers for predictable state transitions.",
      },
      {
        subSkill: "Middleware & Async Logic",
        proficiency: 75,
        description:
          "Implemented middleware like Redux Thunk for handling async operations and side effects.",
      },
    ],
  },
  {
    name: "Zustand",
    proficiency: 85,
    category: "frontend",
    icon: "zustand",
    subskills: [
      {
        subSkill: "Redux DevTools Integration",
        proficiency: 85,
        description:
          "Experience integrating with Redux DevTools to trace and debug state changes in real time.",
      },
      {
        subSkill: "Slices & Reducers",
        proficiency: 80,
        description:
          "Skilled at structuring modular slices and reducers for maintainable state management.",
      },
      {
        subSkill: "StateCreator & Middleware",
        proficiency: 80,
        description:
          "Proficient in creating custom stores using StateCreator and extending them with middlewares like persist, logger, and immer.",
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
  // {
  //   name: "Vue.js",
  //   proficiency: 80,
  //   category: "frontend",
  //   icon: "vuejs",
  //   subskills: [
  //     {
  //       subSkill: "Vue Components & Composition API",
  //       proficiency: 85,
  //       description:
  //         "Proficient in building scalable applications using Vue’s Single File Components and the modern Composition API.",
  //     },
  //     {
  //       subSkill: "Vue Router",
  //       proficiency: 80,
  //       description:
  //         "Experience in configuring routing, nested routes, route guards, and lazy loading components using Vue Router.",
  //     },
  //     {
  //       subSkill: "Reactive Forms & v-model",
  //       proficiency: 85,
  //       description:
  //         "Skilled in creating forms using `v-model` with reactive data binding, validation, and form handling logic.",
  //     },
  //     {
  //       subSkill: "Composition API & Reusability",
  //       proficiency: 80,
  //       description:
  //         "Built reusable logic across components using `setup()`, `ref`, `computed`, and custom composables.",
  //     },
  //     {
  //       subSkill: "Vue Lifecycle & Directives",
  //       proficiency: 85,
  //       description:
  //         "Strong knowledge of Vue’s lifecycle hooks and built-in directives like `v-if`, `v-for`, and `v-bind`.",
  //     },
  //     {
  //       subSkill: "Vue CLI / Vite",
  //       proficiency: 80,
  //       description:
  //         "Experienced in project scaffolding, development, and builds using Vue CLI and modern tooling like Vite.",
  //     },
  //   ],
  // },
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
  // {
  //   name: "Node.js",
  //   proficiency: 60,
  //   category: "backend",
  //   icon: "nodejs",
  //   subskills: [
  //     {
  //       subSkill: "REST API Development",
  //       proficiency: 80,
  //       description:
  //         "Experience building RESTful APIs with Node.js and Express.",
  //     },
  //     {
  //       subSkill: "File System",
  //       proficiency: 70,
  //       description:
  //         "Worked with Node's file system module for various I/O operations.",
  //     },
  //     {
  //       subSkill: "Streams",
  //       proficiency: 65,
  //       description:
  //         "Basic understanding of working with streams for handling large datasets.",
  //     },
  //     {
  //       subSkill: "Error Handling",
  //       proficiency: 75,
  //       description:
  //         "Implemented robust error handling middleware and patterns.",
  //     },
  //   ],
  // },
  // {
  //   name: "Express",
  //   proficiency: 50,
  //   category: "backend",
  //   icon: "expressjs",
  //   subskills: [
  //     {
  //       subSkill: "Middleware",
  //       proficiency: 75,
  //       description:
  //         "Experience creating and using middleware for various application needs.",
  //     },
  //     {
  //       subSkill: "Routing",
  //       proficiency: 80,
  //       description:
  //         "Proficient in setting up and organizing routes in Express applications.",
  //     },
  //     {
  //       subSkill: "Authentication",
  //       proficiency: 65,
  //       description:
  //         "Implemented JWT-based authentication in Express applications.",
  //     },
  //     {
  //       subSkill: "Error Handling",
  //       proficiency: 70,
  //       description:
  //         "Configured custom error handling middleware for API responses.",
  //     },
  //   ],
  // },
  // {
  //   name: "MongoDB",
  //   proficiency: 65,
  //   category: "backend",
  //   icon: "mongodb",
  //   subskills: [
  //     {
  //       subSkill: "CRUD Operations",
  //       proficiency: 70,
  //       description:
  //         "Experience performing all basic CRUD operations with MongoDB.",
  //     },
  //     {
  //       subSkill: "Aggregation",
  //       proficiency: 60,
  //       description:
  //         "Basic understanding of aggregation pipelines for complex queries.",
  //     },
  //     {
  //       subSkill: "Indexing",
  //       proficiency: 55,
  //       description:
  //         "Knowledge of creating indexes for performance optimization.",
  //     },
  //     {
  //       subSkill: "Mongoose ODM",
  //       proficiency: 65,
  //       description:
  //         "Experience working with Mongoose for schema validation and modeling.",
  //     },
  //   ],
  // },
  {
    name: "Supabase",
    proficiency: 60,
    category: "backend",
    icon: "supabase",
    subskills: [
      {
        subSkill: "Database",
        proficiency: 60,
        description:
          "Experience designing schemas, managing relations, and writing SQL functions in Supabase’s Postgres database.",
      },
      {
        subSkill: "Authentication",
        proficiency: 60,
        description:
          "Implemented Supabase Auth for user sign-up, login, and role-based access with JWT handling.",
      },
      {
        subSkill: "Edge Functions",
        proficiency: 70,
        description:
          "Built and deployed Supabase Edge Functions for serverless backend logic and real-time notifications.",
      },
      {
        subSkill: "Realtime & Channels",
        proficiency: 65,
        description:
          "Integrated Supabase Realtime for live updates and notifications using Postgres changes and channel subscriptions.",
      },
      {
        subSkill: "Storage",
        proficiency: 60,
        description:
          "Managed Supabase Storage for handling file uploads such as images, documents, and media assets.",
      },
      {
        subSkill: "Row-Level Security (RLS)",
        proficiency: 55,
        description:
          "Configured Row-Level Security policies for secure, fine-grained access control across tables.",
      },
    ],
  },
  {
    name: "Jest",
    proficiency: 70,
    category: "testing",
    icon: "jest",
    subskills: [
      {
        subSkill: "Unit Testing & Assertions",
        proficiency: 85,
        description:
          "Implemented robust unit tests using Jest’s assertion and matcher APIs to validate business logic and UI behavior.",
      },
      {
        subSkill: "Mocking & Spying",
        proficiency: 80,
        description:
          "Utilized Jest mocks, spies, and stubs to isolate dependencies and verify interactions between components and APIs.",
      },
      {
        subSkill: "Snapshot Testing",
        proficiency: 75,
        description:
          "Maintained snapshot tests for React components to detect unintended UI regressions efficiently.",
      },
      {
        subSkill: "Test Configuration & Coverage",
        proficiency: 70,
        description:
          "Configured Jest setup files, coverage thresholds, and integrated tests within CI/CD pipelines for consistent quality assurance.",
      },
    ],
  },
  {
    name: "React Testing Library",
    proficiency: 70,
    category: "testing",
    icon: "rtl",
    subskills: [
      {
        subSkill: "Unit & Integration Testing",
        proficiency: 80,
        description:
          "Developed unit and integration tests for React components using Jest and React Testing Library to ensure UI reliability and behavior consistency.",
      },
      {
        subSkill: "Mocking & Async Testing",
        proficiency: 75,
        description:
          "Skilled in mocking APIs, timers, and user events to test asynchronous operations and state transitions effectively.",
      },
      {
        subSkill: "Accessibility & Queries",
        proficiency: 70,
        description:
          "Used semantic queries (getByRole, getByLabelText) to promote accessible and maintainable tests aligned with real user interactions.",
      },
      {
        subSkill: "Test Coverage & CI Integration",
        proficiency: 65,
        description:
          "Configured test coverage thresholds and integrated automated test execution in CI/CD pipelines using Jest reporters.",
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
  // {
  //   name: "AWS",
  //   proficiency: 55,
  //   category: "other",
  //   icon: "aws",
  //   subskills: [
  //     {
  //       subSkill: "EC2",
  //       proficiency: 60,
  //       description: "Basic experience deploying and managing EC2 instances.",
  //     },
  //     {
  //       subSkill: "S3",
  //       proficiency: 65,
  //       description:
  //         "Configured S3 buckets for static website hosting and file storage.",
  //     },
  //     {
  //       subSkill: "Lambda",
  //       proficiency: 50,
  //       description: "Created basic serverless functions with AWS Lambda.",
  //     },
  //     {
  //       subSkill: "IAM",
  //       proficiency: 55,
  //       description: "Configured basic IAM policies and permissions.",
  //     },
  //   ],
  // },
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
      },
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
    title: "EchoHelp - Emergency Response Platform",
    description:
      "A full-featured mobile responsive Emergency Response platform for the society with emergency management, emergency services, weather moniter, notification alert and google map integration. Users can report emergencies, request help, and receive real-time updates.",
    images: [
      "/projects/echohelp/echohelp-login.webp",
      "/projects/echohelp/echohelp-1.webp",
      "/projects/echohelp/echohelp-2.webp",
      "/projects/echohelp/echohelp-3.webp",
      "/projects/echohelp/echohelp-4.webp",
      "/projects/echohelp/echohelp-5.webp",
    ],
    technologies: [
      "React",
      "Supabase",
      "Tailwind CSS",
      "TypeScript",
      "Zustand",
    ],
    demoUrl: "https://echohelp.netlify.app",
    githubUrl: "https://github.com/sukanta47/echohelp-fe",
    featured: true,
    category: "web",
  },
  {
    id: 2,
    title: "Regulating AI",
    description: `RegulatingAI is a dedicated non-profit organisation (ai non profit) designed for experts, mentors, and users of artificial intelligence (AI) with a keen interest in exploring the intersection of AI and regulation.`,
    images: [
      "/projects/regulatingai/regulatingai-1.webp",
      "/projects/regulatingai/regulatingai-2.webp",
      "/projects/regulatingai/regulatingai-3.webp",
      "/projects/regulatingai/regulatingai-4.webp",
      "/projects/regulatingai/regulatingai-5.webp",
      "/projects/regulatingai/regulatingai-6.webp",
    ],
    technologies: ["Wordpress", "CMS", "PHP", "MySql", "Elementor"],
    demoUrl: "https://regulatingai.org",
    featured: true,
    category: "web",
  },
  {
    id: 3,
    title: "Jagadeva Kutumbakam - NGO Website",
    description: `A community-driven NGO app that connects users with services based on financial eligibility, inspired by the philosophy "Vasudhaiva Kutumbakam" (The World Is One Family), the platform facilitates access to offerings from verified service providers.`,
    images: [
      "/projects/jk/jagadevakutumbakam.webp",
      "/projects/jk/jagadevakutumbakam-2.webp",
      "/projects/jk/jagadevakutumbakam-3.webp",
    ],
    technologies: ["React", "JavaScript", "Firebase", "Tailwind CSS", "MUI"],
    demoUrl: "https://www.jagadevakutumbakam.com",
    featured: true,
    category: "web",
  },
  {
    id: 4,
    title: "FireFlink - Extreme Testing Platform",
    description:
      "Served as a core front-end contributor in building FireFlink from the ground up. Actively involved in design discussions, feature requirement analysis, and development. Implemented and maintained critical features using React JS, TypeScript and Tailwind CSS with Redux as state manangement, delivering a responsive and user-friendly interface for the platform.",
    images: [
      "/projects/fireflink/fireflink-login.webp",
      "/projects/fireflink/ff-2.webp",
      "/projects/fireflink/ff-3.webp",
      "/projects/fireflink/ff-4.webp",
      "/projects/fireflink/ff-5.webp",
      "/projects/fireflink/ff-6.webp",
      "/projects/fireflink/ff-7.webp",
    ],
    technologies: [
      "React JS",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Storybook",
      "Redux",
      "Axios",
    ],
    demoUrl: "https://www.fireflink.com",
    githubUrl: "",
    featured: true,
    category: "web",
  },

  {
    id: 5,
    title: "Portfolio Website",
    description:
      "A personalized portfolio website showcasing my projects, skills, and professional experience.",
    images: [
      "/projects/portfolio/portfolio.webp",
      "/projects/portfolio/portfolio-1.webp",
      "/projects/portfolio/portfolio-2.webp",
      "/projects/portfolio/portfolio-3.webp",
      "/projects/portfolio/portfolio-4.webp",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "EmailJS",
    ],
    demoUrl: "https://sukantabiswasdev.netlify.app",
    githubUrl: "https://github.com/sukanta47/portfolio-react",
    featured: true,
    category: "web",
  },
  {
    id: 6,
    title: "AcrossGeo - Talent Acquisition Platform",
    description: `The application is to bridge between talents and the client where both talents and
client can register and look for job and resource. React.js, Redux, Typescript, Sass
and RTK Query with Rest api are the technologies used.`,
    images: [
      "/projects/acrossgeo/acrossgeo.webp",
      "/projects/acrossgeo/acrossgeo-1.webp",
    ],
    technologies: [
      "React",
      "TypeScript",
      "REST Api",
      "Zustand",
      "Tailwind CSS",
    ],
    demoUrl: "https://acrossgeo.com",
    featured: false,
    category: "web",
  },
  {
    id: 7,
    title: "Philips Naming Convention Tool",
    description: `Developed a specialized tool for Philips Proposition Managers to standardize naming for products, technologies, and extensions. Built with an intelligent decision-tree architecture that adapts questions based on user input to generate
context-specific naming conventions. Enabled consistent and efficient naming
practices across various business entities.`,
    images: ["/projects/philips.webp"],
    technologies: ["React", "JavaScript", "Tailwind CSS", "Sass"],
    featured: false,
    category: "web",
  },
  {
    id: 8,
    title: "Assesment and Certification Tool - Fireflink Academy",
    description: `The application was developed to meet Fireflink's requirements for a certification
platform as part of Fireflink Academy, enabling users to become certified in
Automation and Fireflink testing.`,
    images: ["/projects/fireflink/fireflink-academy.webp"],
    technologies: [
      "React",
      "JavaScript",
      "REST Api",
      "Axios",
      "Redux",
      "Tailwind CSS",
    ],
    demoUrl: "https://www.fireflink.com/fireflink-academy",
    featured: false,
    category: "web",
  },
];

export const testimonials: Testimonial[] = [];

export const aboutMe = {
  name: "Sukanta Biswas",
  title: "Lead UI Developer",
  location: "Bengaluru, India",
  email: "sukantabiswas.dev@gmail.com",
  phone: "+91 8209777461",
  bio_headline: `I'm a passionate UI developer with 6+ years of experience crafting modern web and mobile applications. I specialize in React, TypeScript, JavaScript, Angular, NextJS, Redux, Zustand, Supabase and Firebase, with a strong focus on intuitive user experiences and performance.`,
  bio: `Lead Frontend Developer with 6+ years of experience specializing in React, Next.js, JavaScript, TypeScript, Angular, NextJS, Redux, Zustand, Supabase and Firebase. Skilled in building scalable, high-performance web applications with a strong focus on UI/UX, accessibility, and modular architecture. Experienced in leading teams, driving end-to-end product development, and delivering impactful solutions across automation platforms, emergency response apps, and class discovery platforms.`,

  experience: [
    {
      role: "Lead Developer",
      company: "Test Yantra Software Solutions Pvt Ltd.",
      period: "Jul 2024 - Present",
      description:
        "Lead, mentor, and manage a high-performing development team, fostering a collaborative and results-driven environment. Ensure consistency in UI/UX and branding across all product modules and platforms. Oversee architecture decisions, feature planning, and delivery timelines for in-house and customer-facing applications.",
    },
    {
      role: "Senior Software Developer",
      company: "FireFlink Pvt Limited",
      period: "Dec 2022 - Jun 2024",
      description:
        "Developed the FireFlink automation testing platform from scratch using React JS, Redux, Tailwind and other technologies. Led a small team of 5–6 developers, conducted code reviews, and ensured high-quality, scalable front-end architecture.",
    },
    {
      role: "Junior Software Engineer",
      company: "Test Yantra Software Solutions Pvt Ltd.",
      period: "Feb 2019 - Nov 2022",
      description:
        "Develop and execute comprehensive front-end strategies that align with the company's product goals and client requirements. Built responsive UIs using AngularJS, Angular 8,10 with strong expertise in TypeScript and core JavaScript. Collaborated with designers and backend teams to deliver scalable, user-friendly features across multiple projects.",
    },
  ],

  education: [
    {
      degree:
        "Bachelor of Technology (Electronics and Communication Engineering)",
      institution: "CIEM",
      university: "MAKAUT (WBUT)",
      instituteUrl:
        "https://en.wikipedia.org/wiki/Calcutta_Institute_of_Engineering_and_Management",
      universityUrl: "https://makautexam.net/",
      period: "2013 - 2016",
      gpa: "7.66/10",
    },
    {
      degree: "Diploma in Electronics and Telecommunications",
      institution: "EIEM ",
      university: "WBSCTE",
      instituteUrl: "https://eiem.ac.in/",
      universityUrl: "https://webscte.co.in/",
      period: "2010 - 2013",
      gpa: "78.5%",
    },
    {
      degree: "Higher Secondary Education",
      institution: "AMV(HS)",
      university: "WBCHSE",
      period: "2007 - 2008",
      gpa: "54%",
      universityUrl: "https://wbchse.wb.gov.in/home/",
      instituteUrl: "",
    },
  ],
  languages: [
    {
      name: "English",
      locale: "English, [ˈɪŋɡlɪʃ]",
      proficiency: "Fluent",
      score: "8.5",
      wikiUrl: "https://en.wikipedia.org/wiki/English_language",
      level: ["read", "write", "speak"],
    },
    {
      name: "Bengali",
      locale: "বাংলা, Bāṅlā, [ˈbaŋla]",
      proficiency: "Native",
      score: "8.5",
      wikiUrl: "https://en.wikipedia.org/wiki/Bengali_language",
      level: ["read", "write", "speak"],
    },
    {
      name: "Hindi",
      locale: "हिन्दी, Hindī, [ˈɦɪn̪diː]",
      proficiency: "Native",
      score: "9.5",
      wikiUrl: "https://en.wikipedia.org/wiki/Hindi_language",
      level: ["read", "write", "speak"],
    },
    {
      name: "Mewari",
      locale: "मेवाड़ी, Mewārī, [mɛˈwɑːri]",
      proficiency: "Native",
      score: "8.5",
      wikiUrl: "https://en.wikipedia.org/wiki/Mewari_language",
      level: ["read", "write", "speak"],
    },
  ],
};
