export const projectsData = [
  {
    id: 1,
    title: "TrybeMarket",
    description:
      "A web-based version of TrybeMarket — a decentralized campus marketplace where students can buy/sell goods, hire services, and build their personal brands within their university ecosystem.",
    image: "/trybemarketWeb.png",
    tags: ["React", "Firebase", "TailwindCSS"],
    category: "web",
    github: "https://github.com/trybenode/trybemarket-web",
    live: "https://trybemarket.vercel.app/",
    features: [
      "Product/service listing dashboard for student vendors",
      "Search and filter items by school or category",
      "Integrated chat and order tracking",
      "Safe payment workflow integration (Paystack/Flutterwave)",
      "Campus-specific onboarding and user segmentation",
    ],
    technologies: ["React", "Next", "Node", "TailwindCSS", "Firestore"],
    collaborated: true,
    challenge:
      "Creating a secure, scalable platform that supports diverse student businesses while maintaining ease of use and low onboarding friction.",
    solution:
      "Built a Firebase-backed web app with real-time data, school-based filtering, and modular components to support rapid scaling across campuses.",
  },
  {
  id: 2,
  title: "TrybeMarket",
  description:
    "A campus-focused e-commerce platform for students to buy and sell products, services, and skills within their school community — fostering trust and entrepreneurship.",
  image: "/trybemarketm.png",
  tags: ["React Native", "Firebase", "Expo Go"],
  category: "mobile",
  github: "https://github.com/trybenode/marketTrybe",
  live: "https://trybemarket-demo.vercel.app",
  features: [
    "List and manage products or services from a mobile device",
    "Chat with verified campus buyers and sellers",
    "Secure in-app transactions and notifications",
    "School-based market filtering",
    "Seller verification for trust and safety",
  ],
  technologies: ["React Native", "noSql", "Push Notifications", "Expo"],
  collaborated: true,
  challenge:
    "Building a mobile-first platform that balances speed, simplicity, and trust while supporting students with limited technical experience.",
  solution:
    "Developed a lightweight, intuitive mobile app using React Native and Firebase to ensure seamless onboarding, product listing, and communication for student users.",
},
  {
    id: 3,
    title: "Car E-commerce Platform",
    description:
      "A scalable and secure Django-based platform featuring advanced search, inventory management, payment integration, user authentication, order tracking, and an admin dashboard for dealers.",
    image: "/carEcommerce.png",
    tags: ["Django", "SQL", "Bootstrap"],
    category: "web",
    github: "https://github.com/Abdul1013/Car-Selling-Web-App",
    live: "https://car-ecommerce-demo.vercel.app",
    features: [
      "Advanced search and filtering system",
      "Secure payment processing with Paypal",
      "Comprehensive inventory management",
      "User authentication and profiles",
      "Order tracking and history",
      "Admin dashboard for dealers",
    ],
    technologies: ["Django", "SQLlite", "Bootstrap", "PayPall API"],
    collaborated: true,
    challenge:
      "Creating a scalable platform that could handle thousands of vehicle listings with complex filtering options while maintaining performance.",
    solution:
      "Implemented efficient database indexing, query optimization, and caching strategies to ensure fast search results even with large datasets.",
  },
  {
    id: 4,
    title: "Student Planning App",
    description:
      "An intuitive app to help students manage their organization, planning, and academic schedules with smart reminders and progress tracking.",
    image: "/plannerZ.png",
    tags: ["HTML", "CSS", "JavaScript", "MongoDB"],
    category: "web",
    github: "https://github.com/Abdul1013/Student-Organizing-App",
    live: "https://student-planner-demo.vercel.app",
    features: [
      "Customizable academic calendar",
      "Assignment tracking with priority levels",
      "Smart reminders and notifications",
      "Progress tracking of GPA and analytics",
      "Study session timer with Pomodoro technique",
      "Collaborative study group features",
    ],
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "MongoDB",
      "Express.js",
      "Node.js",
      "Chart.js",
      "PWA",
    ],
    challenge:
      "Designing an intuitive interface that would appeal to students while providing comprehensive planning features without overwhelming users.",
    solution:
      "Conducted extensive user research with students to create a minimalist yet powerful interface with progressive disclosure of advanced features.",
  },
  {
    id: 5,
    title: "StudyHub",
    description:
      "A Learning platform for student to prepare for exams using AI with tools like study/flashcards and quize .",
    image: "studentHub.png",
    tags: ["Next.js", "Groq", "Material UI", "Firebase"],
    category: "web",
    github: "https://github.com/abdul1013/studyhub",
    live: "https://studyhub-demo.vercel.app",
    features: [
      // "AI-powered study partner matching",
      "Real-time collaborative document editing",
      // "Video conferencing integration",
      // "Resource library with search functionality",
      // "Discussion forums for each subject",
      "Achievement system to encourage participation",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Firebase",
      "Material UI",
      "Groq API",
      "WebRTC",
      "Socket.io",
    ],
    challenge:
      "Building a platform that could facilitate meaningful connections between students with similar academic interests and enable effective collaboration.",
    solution:
      "Developed an AI-powered matching algorithm that analyzes study habits, academic interests, and learning styles to suggest compatible study partners.",
  },
  {
    id: 6,
    title: "BiteBuzz",
    description:
      "A food delivery responsive webapp for a snack restaurants to connect with their customers, make custom order and featuring real-time order tracking and personalized recommendations.",
    image: "/Bitbuzz.png",
    tags: ["React", "Firebase", "Material UI"],
    category: "web",
    github: "https://github.com/username/bitebuzz",
   live: "", // Add TestFlight or APK link if available
    features: [
      // "Real-time order tracking with map integration",
      "Personalized restaurant recommendations",
      "In-app payment processing",
      "Meal rating and review system",
      "Loyalty program for frequent customers",
      "Multi-language support",
    ],
    // , "Redux", "Google Maps API", "Stripe"
    technologies: ["React Native", "Firebase", "Push Notifications", "i18n"],
    collaborated: true,
    challenge:
      "Creating a seamless experience for both customers and restaurant owners while ensuring accurate real-time order tracking.",
    solution:
      "Implemented a robust real-time database with Firebase and integrated Google Maps API for precise location tracking and delivery time estimation.",
  },
 {
  id: 7,
  title: "EasyTopUp",
  description:
    "A mobile app built with React Native for students and everyday users to easily buy airtime, data, and make subscriptions for utilities like cable TV and electricity, all in one secure platform.",
  image: "/easyTopUp.png", // update with the correct preview image
  tags: ["React Native", "Firebase", "Paystack"],
  category: "mobile",
  github: "https://github.com/Abdul1013/EasyTopUp",
  live: "", // Add TestFlight or APK link if available
  features: [
    "Airtime top-up for all major Nigerian networks",
    "Mobile data purchase by bundle type",
    "Cable TV (DSTV, GOTV, Startimes) subscriptions",
    "Electricity bill payments",
    "In-app payment with Paystack",
    "User auth and transaction history",
  ],
  technologies: ["React Native", "Firebase", "Paystack API", "Expo", "Redux Toolkit"],
  collaborated: true,
  challenge:
    "Designing a user-friendly interface that simplifies mobile top-ups while ensuring secure transactions and accurate service delivery.",
  solution:
    "Used Firebase for real-time database and authentication, and Paystack for handling secure, verified payments. Built a clean, responsive UI with Expo and integrated modular service APIs (e.g., VTpass).",
}



  // {
  //   id: 5,
  //   title: "SecurePass",
  //   description:
  //     "A cybersecurity tool that helps users generate and manage secure passwords with encryption and breach detection features.",
  //   image: "/placeholder.svg?height=300&width=500",
  //   tags: ["Python", "Django", "Encryption"],
  //   category: "security",
  //   github: "https://github.com/username/securepass",
  //   live: "https://securepass-demo.vercel.app",
  //   features: [
  //     "AES-256 encryption for password storage",
  //     "Password strength analyzer",
  //     "Data breach detection and alerts",
  //     "Two-factor authentication",
  //     "Secure password sharing",
  //     "Auto-fill browser extension",
  //   ],
  //   technologies: ["Python", "Django", "PostgreSQL", "AES Encryption", "REST API", "Browser Extension", "OAuth"],
  //   challenge:
  //     "Ensuring the highest level of security for stored passwords while maintaining a user-friendly interface and cross-platform compatibility.",
  //   solution:
  //     "Implemented end-to-end encryption where passwords are encrypted on the client side before being stored, ensuring that even in case of a data breach, passwords remain secure.",
  // },
  // {
  //   id: 6,
  //   title: "AI Content Assistant",
  //   description:
  //     "An AI-powered writing assistant that helps users generate, edit, and optimize content for different platforms and audiences.",
  //   image: "/placeholder.svg?height=300&width=500",
  //   tags: ["Next.js", "OpenAI", "TailwindCSS"],
  //   category: "ai",
  //   github: "https://github.com/username/ai-content-assistant",
  //   live: "https://ai-content-assistant-demo.vercel.app",
  //   features: [
  //     "AI-powered content generation",
  //     "Grammar and style checking",
  //     "Tone adjustment for different audiences",
  //     "SEO optimization suggestions",
  //     "Plagiarism detection",
  //     "Content readability analysis",
  //   ],
  //   technologies: ["Next.js", "OpenAI API", "TailwindCSS", "Vercel AI SDK", "TypeScript", "Zustand", "Edge Functions"],
  //   challenge:
  //     "Integrating multiple AI models to provide comprehensive writing assistance while keeping the application responsive and cost-effective.",
  //   solution:
  //     "Developed a hybrid approach that uses lightweight models for real-time feedback and more powerful models for in-depth analysis and generation, optimizing both performance and cost.",
  // },
  // {
  //   id: 7,
  //   title: "HealthTrack",
  //   description:
  //     "A comprehensive health monitoring application that helps users track fitness activities, nutrition, and wellness metrics with personalized insights.",
  //   image: "/placeholder.svg?height=300&width=500",
  //   tags: ["Flutter", "Firebase", "Health API"],
  //   category: "mobile",
  //   github: "https://github.com/username/healthtrack",
  //   live: "https://healthtrack-demo.vercel.app",
  //   features: [
  //     "Activity tracking with GPS",
  //     "Nutrition logging and analysis",
  //     "Sleep quality monitoring",
  //     "Hydration tracking",
  //     "Personalized health insights",
  //     "Goal setting and progress visualization",
  //   ],
  //   technologies: ["Flutter", "Dart", "Firebase", "Google Fit API", "Apple HealthKit", "ML Kit", "Charts"],
  //   challenge:
  //     "Creating a cross-platform application that integrates with various health APIs while providing accurate and personalized health insights.",
  //   solution:
  //     "Built a modular architecture that adapts to different health data sources and uses machine learning to generate personalized recommendations based on user data patterns.",
  // },
  // {
  //   id: 8,
  //   title: "SmartHome Hub",
  //   description:
  //     "An IoT platform that connects and controls various smart home devices through a unified interface with automation capabilities and energy monitoring.",
  //   image: "/placeholder.svg?height=300&width=500",
  //   tags: ["React", "Node.js", "IoT", "MQTT"],
  //   category: "web",
  //   github: "https://github.com/username/smarthome-hub",
  //   live: "https://smarthome-hub-demo.vercel.app",
  //   features: [
  //     "Unified control for multiple device brands",
  //     "Automation rules and scenes",
  //     "Voice control integration",
  //     "Energy usage monitoring",
  //     "Security camera feeds",
  //     "Remote access and control",
  //   ],
  //   technologies: ["React", "Node.js", "MQTT", "WebSockets", "Raspberry Pi", "Docker", "Zigbee/Z-Wave"],
  //   challenge:
  //     "Creating a platform that can communicate with various IoT protocols and devices while providing a seamless user experience and robust security.",
  //   solution:
  //     "Developed a modular adapter system that can interface with different IoT protocols and implemented end-to-end encryption for all device communications to ensure security.",
  // },
];
