export interface Project {
  id: string;
  title: string;
  category: "iOS" | "React Native" | "React.js";
  problem: string;
  solution: string;
  architecture: string;
  technologies: string[];
  githubUrl?: string;
  caseStudyPlaceholder: boolean;
}

export const projects: Project[] = [
  {
    id: "us-bank-ios",
    title: "Enterprise Banking iOS Application",
    category: "iOS",
    problem:
      "A legacy enterprise banking application had UIKit-based screens that needed modernization while maintaining existing functionality, design consistency, and integration with existing application services.",
    solution:
      "Contributed to the modernization of the iOS application by converting existing UIKit screens to SwiftUI while preserving existing business logic and backend integrations. Built reusable SwiftUI components and integrated them with the existing application architecture.",
    architecture:
      "MVVM with Clean Architecture boundaries between presentation, domain, and data layers.",
    technologies: [
      "Swift",
      "UIKit",
      "SwiftUI",
      "MVVM",
      "Clean Architecture",
      "REST APIs",
      "MSAL",
      "Keychain",
      "XCTest",
      "CI/CD",
    ],
    githubUrl: "[ADD GITHUB URL]",
    caseStudyPlaceholder: true,
  },
  {
    id: "sports-ios-app",
    title: "Sports & Fan Engagement iOS Application",
    category: "iOS",
    problem:
      "A sports-focused iOS application required a scalable and engaging experience for fans, including a personalized home experience and a Know Before You Go (KBYG) module for accessing important event and venue information.",
    solution:
      "Built the Home and KBYG modules from scratch, translating product requirements and designs into production-ready SwiftUI/UIKit experiences. Implemented reusable UI components, navigation flows, API integration, and state management while ensuring a responsive and maintainable user experience.",
    architecture:
      "MVVM with modular and reusable components designed for scalable feature development.",
    technologies: [
      "Swift",
      "SwiftUI",
      "MVVM",
      "Clean Architecture",
      "REST APIs",
      "Async/Await",
      "Combine",
      "XCTest",
      "CI/CD",
    ],
    githubUrl: "[ADD GITHUB URL]",
    caseStudyPlaceholder: true,
  },
  {
    id: "rn-app",
    title: "Internal React Native Application",
    category: "React Native",
    problem:
      "An internal application required a user profile experience for managing and presenting user information within the application.",
    solution:
      "Contributed to the development of the Profile module using React Native, implementing reusable UI components, application flows, and API integration while following the application's existing architecture and development standards.",
    architecture:
      "Component-based architecture with reusable React Native components and API-driven data flows.",
    technologies: ["React Native", "JavaScript", "REST APIs", "Context API"],
    githubUrl: "[ADD GITHUB URL]",
    caseStudyPlaceholder: true,
  },
  {
    id: "react-ecommerce",
    title: "E-Commerce Web Application",
    category: "React.js",
    problem:
      "A training project focused on recreating a modern e-commerce web application to gain practical experience with React.js, component-based UI development, state management, and API integration.",
    solution:
      "Recreated an e-commerce web application during React.js training, implementing product listing, product details, cart functionality, quantity management, and responsive user interfaces using reusable React components.",
    architecture:
      "Component-driven React architecture using functional components, React Hooks, reusable UI components, and API-based data flows.",
    technologies: [
      "React",
      "JavaScript",
      "TypeScript",
      "React Hooks",
      "Axios",
      "REST API",
      "HTML",
      "CSS",
      "Responsive Design",
    ],
    githubUrl: "https://github.com/rakeshiosdev/e-commerce-react",
    caseStudyPlaceholder: true,
  },
  {
    id: "react-chatbot",
    title: "React.js Chatbot Application",
    category: "React.js",
    problem:
      "A training project focused on building a simple interactive chatbot to gain practical experience with React.js, component-based UI development, state management, and user interactions.",

    solution:
      "Built a simple chatbot application during React.js training, implementing user message input, chat history, bot responses, reusable chat components, and a responsive conversational interface.",

    architecture:
      "Component-driven React architecture using functional components, React Hooks, reusable UI components, and state-based message management.",
    technologies: [
      "React",
      "JavaScript",
      "TypeScript",
      "React Hooks",
      "fetch",
      "REST API",
      "HTML",
      "CSS",
      "Responsive Design",
    ],
    githubUrl: "https://rakeshiosdev.github.io/chatbot-project/",
    caseStudyPlaceholder: true,
  },
  {
    id: "ios-chat-app",
    title: "Real-Time Chat & Calling iOS Application",
    category: "iOS",
    problem:
      "A real-time communication application required reliable one-to-one messaging, voice/video calling, offline message persistence, and message translation while providing a native iOS calling experience.",
    solution:
      "Developed a real-time chat application using UIKit and QuickBlox for messaging and backend communication. Implemented SQLite-based local message persistence, WebRTC-based calling, and integrated CallKit and PushKit for native iOS call handling and incoming call notifications. Added message translation using the Google Translation API to support multilingual communication.",
    architecture:
      "UIKit-based modular architecture with separate presentation, networking, messaging, calling, and persistence components.",
    technologies: [
      "Swift",
      "UIKit",
      "QuickBlox",
      "SQLite",
      "WebRTC",
      "CallKit",
      "PushKit",
      "REST API",
      "Google Translation API",
      "APNs",
    ],
    githubUrl: "[ADD GITHUB URL]",
    caseStudyPlaceholder: true,
  },
  {
    id: "transportation-ios-app",
    title: "Transportation iOS Application",
    category: "iOS",
    problem:
      "A transportation platform required a reliable mobile experience for users to search for transportation, manage trips, and track their journey through a native iOS application.",
    solution:
      "Developed a native iOS user application for transportation services, implementing user-facing trip workflows, location-based features, API integration, and responsive UIKit-based interfaces.",
    architecture:
      "MVVM-based architecture with modular UI, networking, and service layers.",
    technologies: [
      "Swift",
      "UIKit",
      "MVVM",
      "WebSockets",
      "REST APIs",
      "CoreLocation",
      "MapKit",
      "JSON",
      "APNs",
      "Paytm",
      "XCTest",
      "App Deployment",
    ],
    githubUrl: "[ADD GITHUB URL]",
    caseStudyPlaceholder: true,
  },
  {
    id: "react-native-enterprise-calling",
    title: "Enterprise React Native Calling Application",
    category: "React Native",
    problem:
      "An existing enterprise React Native application required new feature enhancements, improved iOS support, and reliable push notification capabilities for its communication workflows.",
    solution:
      "Enhanced an existing React Native enterprise calling application built with Twilio, implementing new application features, providing iOS-specific UI support, and integrating Firebase Cloud Messaging for push notifications.",
    architecture:
      "React Native architecture with reusable components and native iOS integrations for platform-specific functionality.",
    technologies: [
      "React Native",
      "JavaScript",
      "Twilio",
      "iOS",
      "Swift",
      "Firebase Cloud Messaging",
      "Push Notifications",
      "REST APIs",
    ],
    githubUrl: "[ADD GITHUB URL]",
    caseStudyPlaceholder: true,
  },
];

export const projectFilters = [
  "All",
  "iOS",
  "React Native",
  "React.js",
] as const;
export type ProjectFilter = (typeof projectFilters)[number];
