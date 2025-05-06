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
    url: "https://github.com/yourusername",
    icon: "github",
  },
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/in/yourusername",
    icon: "linkedin",
  },
  {
    platform: "Twitter",
    url: "https://twitter.com/yourusername",
    icon: "twitter",
  },
  {
    platform: "Instagram",
    url: "https://instagram.com/yourusername",
    icon: "instagram",
  },
  {
    platform: "Dribbble",
    url: "https://dribbble.com/yourusername",
    icon: "dribbble",
  },
];

export const skills: Skill[] = [
  { name: "React", proficiency: 90, category: "frontend" },
  { name: "TypeScript", proficiency: 85, category: "frontend" },
  { name: "JavaScript", proficiency: 95, category: "frontend" },
  { name: "HTML/CSS", proficiency: 90, category: "frontend" },
  { name: "Tailwind CSS", proficiency: 85, category: "frontend" },
  { name: "SASS/SCSS", proficiency: 80, category: "frontend" },
  { name: "Node.js", proficiency: 75, category: "backend" },
  { name: "Express", proficiency: 70, category: "backend" },
  { name: "MongoDB", proficiency: 65, category: "backend" },
  { name: "GraphQL", proficiency: 60, category: "backend" },
  { name: "UI/UX Design", proficiency: 80, category: "design" },
  { name: "Figma", proficiency: 85, category: "design" },
  { name: "Adobe Photoshop", proficiency: 70, category: "design" },
  { name: "Git/GitHub", proficiency: 85, category: "other" },
  { name: "Docker", proficiency: 60, category: "other" },
  { name: "AWS", proficiency: 55, category: "other" },
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
  name: "Sukanta Biswas",
  title: "Lead UI Developer",
  location: "Bengaluru, India",
  email: "biswas.sukanta47@gmail.com",
  phone: "+91 8209777461",
  bio: `I'm a passionate Lead UI Developer with over 6 years of experience building modern, performant web and mobile applications. My core expertise includes JavaScript, TypeScript, React, Angular, Redux, and Node.js, with a strong focus on crafting intuitive and scalable user interfaces.
I specialize in creating seamless user experiences using tools like Tailwind CSS, Sass, Bootstrap, and Storybook, and have solid hands-on experience with Firebase for authentication, hosting, and real-time databases. My development workflow is powered by tools such as Vite, Git, Postman, Jira, Bitbucket, and VS Code.
Throughout my career, I've led frontend initiatives for both in-house platforms and client products—managing teams, defining UI architecture, and ensuring delivery of high-quality, maintainable code. I'm also experienced in integrating APIs and handling state management efficiently with Redux Toolkit and React Query.
Currently exploring Flutter to expand into cross-platform mobile development, I stay curious and committed to continuous learning and best practices in frontend engineering.
I'm open to freelance work, collaborative projects, or mentorship opportunities where I can share my experience and grow alongside other innovators.`,

  experience: [
    {
      role: "Senior Frontend Developer",
      company: "Tech Innovations Inc.",
      period: "Jan 2021 - Present",
      description:
        "Lead the frontend development team in building responsive web applications using React, TypeScript, and modern CSS frameworks.",
    },
    {
      role: "Full Stack Developer",
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
    },
    {
      degree: "Bachelor of Science in Software Engineering",
      institution: "University of California, Berkeley",
      period: "2011 - 2015",
    },
  ],
};
