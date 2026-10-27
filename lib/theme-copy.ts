import type { Theme } from "./themes";

const studio = {
  navWork: "Selected work",
  navAbout: "A little about me",
  navContact: "Let’s talk",
  edition: "PORTFOLIO / VOL. 01",
  heroDescription:
    "Websites, mobile apps, and backend systems.\nAbout five years of building and shipping products.",
  heroButton: "Explore my work",
  heroNote: "thoughtful design. serious engineering.",
  heroFooter: "GOOD ON THE SURFACE. SOLID UNDER THE HOOD.",
  scroll: "SCROLL TO EXPLORE",
  focus1: "Interfaces with personality",
  focus2: "Systems with purpose",
  focus3: "Details that make a difference",
  workEyebrow: "01 / SELECTED WORK",
  workDescription:
    "A few things I’ve been working on.\nDifferent worlds. Thoughtful digital experiences.",
  workFootnote:
    "Different ideas. The same curiosity to build something useful.",
  aboutEyebrow: "02 / A LITTLE ABOUT ME",
  aboutParagraph1:
    "I’m a software developer with about five years of experience building and shipping products. My work spans frontend interfaces, backend systems, REST and GraphQL APIs, and mobile apps. I’ve also explored blockchain through CertChain.",
  aboutParagraph2:
    "At Inawo, I’m the Lead Product Engineer. I lead a product team of four, review pull requests, and make product decisions. I also independently built the Inawo mobile app with React Native, now available on iOS and Android.",
  contactEyebrow: "03 / YOUR NEXT GOOD IDEA",
  contactAside: "LET’S MAKE IT HAPPEN",
  contactDescription:
    "A landing page, a product, a problem worth solving.\nI’d love to hear what you’re thinking.",
  contactButton: "Let’s connect on LinkedIn",
  footer: "Made with intention. And a fair amount of code.",
  projectDetails: "Read case study",
  projectVisit: "Explore live project",
  artLabel: "WHERE IDEAS BECOME INTERFACES",
  artKicker: "IDEA TO REALITY",
  artFirst: "Make it",
  artLast: "matter.",
  artButton: "Build something good",
  artCoordinate: "FIG. 01 — THE SWEET SPOT",
};

export type CopyKey = keyof typeof studio;

export const themeCopy: Record<Theme, Record<CopyKey, string>> = {
  studio,
  terminal: {
    navWork: "Projects",
    navAbout: "Behind the build",
    navContact: "Connect",
    edition: "PORTFOLIO / BUILD 01",
    heroDescription: "Frontend. Backend. Mobile.\nAbout five years building products and systems.",
    heroButton: "Browse projects",
    heroNote: "considered interfaces. capable systems.",
    heroFooter: "INTERFACE → LOGIC → WORKING SOFTWARE",
    scroll: "EXPLORE THE BUILD",
    focus1: "Interfaces with intent",
    focus2: "Logic with purpose",
    focus3: "Details that hold up",
    workEyebrow: "01 / PROJECT DIRECTORY",
    workDescription:
      "Different projects. Different problems.\nExplore the products behind the interfaces.",
    workFootnote:
      "Different domains. The same drive to turn a problem into working software.",
    aboutEyebrow: "02 / BEHIND THE BUILD",
    aboutParagraph1:
      "I’ve spent about five years building and shipping software across the frontend, backend, and mobile. My toolkit includes JavaScript, TypeScript, React, Next.js, Node.js, Python, MongoDB, and SQL, with experience building REST and GraphQL products.",
    aboutParagraph2:
      "I lead a four-person product team at Inawo, review pull requests, and make product decisions. Alongside that leadership work, I independently developed the React Native mobile app for iOS and Android. CertChain adds hands-on blockchain work to that mix.",
    contactEyebrow: "03 / START A CONVERSATION",
    contactAside: "LET’S WORK THROUGH IT",
    contactDescription:
      "A new interface, a product, a technical challenge.\nLet’s talk through what you want to build.",
    contactButton: "Discuss your project",
    footer: "Thoughtfully built. From the interface down.",
    projectDetails: "Explore the build",
    projectVisit: "Open live project",
    artLabel: "FROM THE INTERFACE TO THE ENGINE",
    artKicker: "INPUT TO OUTPUT",
    artFirst: "Build it",
    artLast: "work.",
    artButton: "Connect the pieces",
    artCoordinate: "FIG. 01 — THE WORKING PARTS",
  },
  prismatic: {
    navWork: "Creations",
    navAbout: "The creative side",
    navContact: "Say hello",
    edition: "PORTFOLIO / SPECTRUM 01",
    heroDescription:
      "Ideas brought to life on web and mobile.\nAbout five years of building and shipping products.",
    heroButton: "Explore what’s possible",
    heroNote: "a little curiosity goes a long way.",
    heroFooter: "A SPARK OF AN IDEA. A WORLD OF POSSIBILITY.",
    scroll: "FOLLOW THE IDEAS",
    focus1: "Expressive by design",
    focus2: "Purpose beneath the pixels",
    focus3: "Small details. Lasting impressions.",
    workEyebrow: "01 / THINGS BROUGHT TO LIFE",
    workDescription:
      "Learning, celebrations, and shared experiences.\nDifferent ideas, brought into focus.",
    workFootnote:
      "Different worlds, connected by the possibility of a good idea.",
    aboutEyebrow: "02 / THE CREATIVE SIDE",
    aboutParagraph1:
      "For about five years, I’ve been turning ideas into shipped products across web, mobile, and backend systems. I enjoy the visual expression of an interface and the systems behind it, from REST and GraphQL APIs to a React Native app.",
    aboutParagraph2:
      "At Inawo, I combine hands-on building with product leadership: leading a team of four, reviewing their work, and making product decisions. I also built the mobile app independently and shipped it to iOS and Android. My curiosity has taken me into blockchain with CertChain, too.",
    contactEyebrow: "03 / THE NEXT POSSIBILITY",
    contactAside: "LET’S GIVE IT FORM",
    contactDescription:
      "A small spark or a fully formed idea.\nLet’s see what we can bring to life.",
    contactButton: "Share your idea on LinkedIn",
    footer: "Made of ideas, intention, and a little code.",
    projectDetails: "Explore the story",
    projectVisit: "See it in the wild",
    artLabel: "WHERE IDEAS FIND THEIR COLOR",
    artKicker: "IMAGINE TO CREATE",
    artFirst: "Give it",
    artLast: "life.",
    artButton: "Explore a possibility",
    artCoordinate: "FIG. 01 — A DIFFERENT PERSPECTIVE",
  },
};

export const headlines = {
  studio: {
    hero: ["A little creative.", "A lot of ", "code"],
    work: ["Good ideas.", "Built into reality."],
    about: ["I like the pretty part.", "And the tricky part."],
    contact: ["Have something", "in ", "mind?"],
  },
  terminal: {
    hero: ["From interface", "to ", "infrastructure"],
    work: ["Project directory.", "Systems in action."],
    about: ["Curious by nature.", "Methodical by craft."],
    contact: ["A problem", "worth ", "solving?"],
  },
  prismatic: {
    hero: ["Ideas deserve", "a ", "vivid reality"],
    work: ["Ideas in motion.", "Things brought to life."],
    about: ["A curious mind.", "An eye for possibility."],
    contact: ["What could", "we ", "create?"],
  },
} as const;

export type HeadlineSection = keyof typeof headlines.studio;
