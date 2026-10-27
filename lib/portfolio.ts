export type Project = {
  title: string;
  category: string;
  description: string;
  details: string[];
  url: string;
  slug: string;
  tags: string[];
  tone: string;
  image: string;
  imageWidth?: number;
  imageHeight?: number;
  sourceUrl?: string;
  mobileApp?: {
    description: string;
    links: { platform: 'ios' | 'android'; label: string; url: string }[];
  };
};

export const profile = {
  name: "Kenny Soyoye",
  shortName: "kenny",
  email: "kennysoyoye07@gmail.com",
  website: 'https://kennyworks.vercel.app',
  backgroundDraft: false,
  experienceLabel: 'About 5 years building & shipping products',
  currentRole: 'Lead Product Engineer at Inawo',
  leadership: 'I lead a product team of four, review pull requests, and make product decisions. I also independently built the Inawo mobile app with React Native.',
  skillGroups: [
    { label: 'Frontend', skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS'] },
    { label: 'Backend & data', skills: ['Node.js', 'Python', 'MongoDB', 'SQL'] },
    { label: 'APIs & mobile', skills: ['REST APIs', 'GraphQL', 'React Native'] },
  ],
  skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Node.js', 'MongoDB', 'SQL', 'Python', 'REST APIs', 'GraphQL', 'React Native'],
  experience: 'Software developer with about five years of experience building and shipping products across frontend interfaces, backend systems, and mobile apps. My work includes REST and GraphQL products, with hands-on exploration of blockchain through CertChain.',
  github: "https://github.com/kenny-ai",
  linkedin: "https://linkedin.com/in/kenny-soyoye",
};

export const projects: Project[] = [
  {
    "title": "AfternoonPrep",
    "category": "EDUCATION & LEARNING",
    "description": "Exam preparation, study resources, and a more connected way to learn.",
    "details": [
      "Exam preparation across Nigerian and international curricula.",
      "Courses, tutoring, study communities, and personalized learning resources."
    ],
    "url": "https://www.afternoonprep.com/",
    "slug": "afternoonprep",
    "tags": [
      "Education",
      "Exam preparation",
      "Learning platform"
    ],
    "tone": "bg-preview-education",
    "image": "/assets/afternoonprep.png"
  },
  {
    "title": "BirthdayBuz",
    "category": "CELEBRATIONS & COMMERCE",
    "description": "Remember the dates. Find the gifts. Show up for the people who matter.",
    "details": [
      "Birthday tracking and reminders to keep important dates in view.",
      "A gift marketplace, wishlists, and delivery tracking."
    ],
    "url": "https://birthdaybuz.com/",
    "slug": "birthdaybuz",
    "tags": [
      "Birthday reminders",
      "Gifting",
      "Marketplace"
    ],
    "tone": "bg-preview-birthday",
    "image": "/assets/birthdaybuz.png"
  },
  {
    "title": "Inawo",
    "category": "WEDDINGS & PLANNING",
    "description": "Wedding planning across web and mobile. I lead the product team and independently built the React Native guest app.",
    "details": [
      "A wedding planning platform for staying organized.",
      "A digital experience that brings wedding preparation into one place."
    ],
    "url": "https://inawo.com/",
    "slug": "inawo",
    "mobileApp": {
    "description": "As the sole developer, I built the Inawo guest app with React Native and shipped it for iOS and Android. Guests can view invitations, RSVP, follow event details, and stay connected to wedding celebrations.",
    "links": [
        {
            "platform": "android",
            "label": "Google Play",
            "url": "https://play.google.com/store/apps/details?id=com.inawoo.inawoguest"
        },
        {
            "platform": "ios",
            "label": "App Store",
            "url": "https://apps.apple.com/ng/app/inawo/id6768661916"
        }
    ]
},
    "tags": [
      "Product leadership",
      "React Native",
      "iOS & Android"
    ],
    "tone": "bg-preview-wedding",
    "image": "/assets/inawo.png"
  },
  {
    "title": "Life of the Party",
    "category": "MUSIC & SOCIAL EXPERIENCES",
    "description": "Live DJs, shared dance floors, and real-world parties in one social experience.",
    "details": [
      "A social experience centered on live DJ sets and virtual dance floors.",
      "Tickets for real-world parties alongside online experiences."
    ],
    "url": "https://lotp.social/",
    "slug": "lotp",
    "tags": [
      "Live music",
      "Social platform",
      "Event tickets"
    ],
    "tone": "bg-preview-social",
    "image": "/assets/lotp.png"
  },
  {
    "title": "CertChain",
    "category": "BLOCKCHAIN & DIGITAL CREDENTIALS",
    "description": "Certificate issuance and hash-based verification, connecting a familiar web experience with Aptos testnet records.",
    "details": [
      "Institutions issue credentials; recipients can view and download their certificates.",
      "Verification looks up a certificate hash in Supabase and compares it with an Aptos testnet record."
    ],
    "url": "https://certchain-blond.vercel.app/",
    "sourceUrl": "https://github.com/Kenny-ai/CertChain",
    "slug": "certchain",
    "tags": [
      "Aptos & Move",
      "Next.js",
      "Supabase"
    ],
    "tone": "bg-preview-credentials",
    "image": "/assets/certchain.png",
    "imageWidth": 1280,
    "imageHeight": 720
  },
{
  "title": "Space Tourism",
  "category": "INTERACTIVE WEB EXPERIENCE",
  "description": "A cinematic journey through destinations, crew, and spaceflight technology, with interactive orbital views and an editorial feel.",
  "details": [
    "Explore four destinations through selectable content and interactive planet views.",
    "Meet the crew and discover launch technology through focused, image-led interfaces."
  ],
  "url": "https://kb-space-tourism.vercel.app/",
  "slug": "space-tourism",
  "tags": [
    "Interactive UI",
    "3D planet views",
    "Responsive design"
  ],
  "tone": "bg-preview-space",
  "image": "/assets/space-tourism-desktop.png",
  "imageWidth": 1280,
  "imageHeight": 720
}
];
