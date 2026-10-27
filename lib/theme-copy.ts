import type { Theme } from "./themes";

const studio = {
  navWork: "Selected work",
  navAbout: "A little about me",
  navContact: "Let’s talk",
  edition: "PORTFOLIO / VOL. 01",
  heroDescription:
    "I build websites that make an impression.\nAnd the software that makes them work.",
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
    "Four different ideas. The same curiosity to build something useful.",
  aboutArtLabel: "THE PERSON BEHIND THE PIXELS",
  aboutArtFirst: "CURIOUS BY DEFAULT.",
  aboutArtLast: "DEVELOPER BY CRAFT.",
  aboutCaption: "Always a work in progress. In the best way.",
  aboutEyebrow: "02 / A LITTLE ABOUT ME",
  aboutParagraph1:
    "I’m a software developer who enjoys turning ideas into things people can use. Sometimes that’s a beautifully simple landing page. Sometimes it’s the complicated logic that makes everything behind it work.",
  aboutParagraph2:
    "For me, those are part of the same craft: understanding a problem, caring about the details, and building something that feels right.",
  contactEyebrow: "03 / YOUR NEXT GOOD IDEA",
  contactAside: "LET’S MAKE IT HAPPEN",
  contactDescription:
    "A landing page, a product, a problem worth solving.\nI’d love to hear what you’re thinking.",
  contactButton: "Let’s connect on LinkedIn",
  footer: "Made with intention. And a fair amount of code.",
  projectDetails: "About project",
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
    heroDescription: "I build the experience and the systems\nthat power it.",
    heroButton: "Browse projects",
    heroNote: "considered interfaces. capable systems.",
    heroFooter: "INTERFACE → LOGIC → WORKING SOFTWARE",
    scroll: "EXPLORE THE BUILD",
    focus1: "Interfaces with intent",
    focus2: "Logic with purpose",
    focus3: "Details that hold up",
    workEyebrow: "01 / PROJECT DIRECTORY",
    workDescription:
      "Four projects. Different problems.\nExplore the products behind the interfaces.",
    workFootnote:
      "Different domains. The same drive to turn a problem into working software.",
    aboutArtLabel: "THE DEVELOPER BEHIND THE BUILD",
    aboutArtFirst: "CURIOSITY AS INPUT.",
    aboutArtLast: "SOFTWARE AS OUTPUT.",
    aboutCaption: "Always learning. Always refining the approach.",
    aboutEyebrow: "02 / BEHIND THE BUILD",
    aboutParagraph1:
      "I’m a software developer who enjoys both sides of a product: the interface people interact with and the logic that makes it work. I build landing pages and more complex software with the same attention to the problem at hand.",
    aboutParagraph2:
      "My approach is to understand the problem, work through the details, and connect the pieces into something people can use. The visual finish and the underlying engineering belong together.",
    contactEyebrow: "03 / START A CONVERSATION",
    contactAside: "LET’S WORK THROUGH IT",
    contactDescription:
      "A new interface, a product, a technical challenge.\nLet’s talk through what you want to build.",
    contactButton: "Discuss your project",
    footer: "Thoughtfully built. From the interface down.",
    projectDetails: "Project overview",
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
      "Expressive interfaces. Thoughtful interactions.\nSoftware with personality.",
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
      "Four different worlds, connected by the possibility of a good idea.",
    aboutArtLabel: "THE MIND BEHIND THE COLORS",
    aboutArtFirst: "CURIOSITY IN FULL COLOR.",
    aboutArtLast: "DEVELOPMENT AS A CRAFT.",
    aboutCaption: "There’s always another way to see it.",
    aboutEyebrow: "02 / THE CREATIVE SIDE",
    aboutParagraph1:
      "I’m a software developer drawn to the space where creative ideas become useful experiences. I enjoy building an expressive landing page just as much as figuring out the complex software that supports it.",
    aboutParagraph2:
      "The aim is to make something feel right and work well. For me, that starts with understanding the problem and continues through the visual choices, interactions, and underlying logic.",
    contactEyebrow: "03 / THE NEXT POSSIBILITY",
    contactAside: "LET’S GIVE IT FORM",
    contactDescription:
      "A small spark or a fully formed idea.\nLet’s see what we can bring to life.",
    contactButton: "Share your idea on LinkedIn",
    footer: "Made of ideas, intention, and a little code.",
    projectDetails: "Take a closer look",
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
