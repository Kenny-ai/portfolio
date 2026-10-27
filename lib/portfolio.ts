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
};

export const profile = {
  name: "Kenny Soyoye",
  shortName: "kenny",
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
    "description": "A modern home for organizing one of life’s biggest days.",
    "details": [
      "A wedding planning platform for staying organized.",
      "A digital experience that brings wedding preparation into one place."
    ],
    "url": "https://inawo.com/",
    "slug": "inawo",
    "tags": [
      "Wedding planning",
      "Event management",
      "Web platform"
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
  }
];
