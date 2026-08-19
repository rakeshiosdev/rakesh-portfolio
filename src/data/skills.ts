export interface SkillGroup {
  id: string;
  label: string;
  hint: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    id: "mobile",
    label: "Mobile",
    hint: "Native & cross-platform",
    items: [
      "Swift",
      "SwiftUI",
      "UIKit",
      "React Native",
      "React Navigation",
      "Expo",
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    hint: "Modern web",
    items: [
      "React.js",
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "Responsive Design",
    ],
  },
  {
    id: "architecture",
    label: "Architecture",
    hint: "Structure & patterns",
    items: [
      "Clean Architecture",
      "MVVM",
      "MVI",
      "Redux",
      "Redux Toolkit",
      "Component Architecture",
    ],
  },
  {
    id: "backend",
    label: "Backend & APIs",
    hint: "Data contracts",
    items: ["REST", "JSON", "JWT", "OAuth 2.0"],
  },
  {
    id: "data",
    label: "Data",
    hint: "Local persistence",
    items: ["Core Data", "SwiftData", "Realm", "SQLite"],
  },
  {
    id: "devops",
    label: "DevOps",
    hint: "Ship & automate",
    items: [
      "Git",
      "GitHub Actions",
      "CI/CD",
      "Fastlane",
      "TestFlight",
      "App Store Connect",
      "ESA",
    ],
  },
  {
    id: "testing",
    label: "Testing",
    hint: "Confidence & quality",
    items: [
      "XCTest",
      "Unit Testing",
      "UI Testing",
      "Snapshot",
      "React Testing",
    ],
  },
  {
    id: "security",
    label: "Security",
    hint: "Protect the app",
    items: ["Keychain", "SSL Pinning", "OAuth", "App Authentication"],
  },
];
