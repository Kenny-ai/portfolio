export type CaseStudyPoint = { title: string; description: string };

export type CaseStudy = {
  draft: boolean;
  roleLabel?: string;
  contributionHeading?: string;
  outcomesHeading?: string;
  references?: { label: string; url: string }[];
  role: string;
  headline: string;
  summary: string;
  snapshot: { label: string; value: string }[];
  focusAreas: string[];
  brief: string;
  contribution: CaseStudyPoint[];
  technologies: string[];
  challengeHeading?: string;
  challenge: string;
  approachHeading?: string;
  approach: string;
  engineeringNotes: CaseStudyPoint[];
  flow?: CaseStudyPoint[];
  outcomes: string[];
  takeaway: string;
};

// Ownership is based on Kenny's confirmed roles. Product-level engineering
// considerations describe context and judgment, without invented metrics,
// unconfirmed feature ownership, or inferred per-project technologies.
export const caseStudies: Record<string, CaseStudy> = {
  "afternoonprep": {
    "draft": false,
    "role": "Frontend & backend contributor",
    "contribution": [
      {
        "title": "Frontend product development",
        "description": "I built parts of the student-facing application, contributing to the interface through which people interact with the learning product. The work forms part of a broader learning platform with existing users and surrounding functionality."
      },
      {
        "title": "Backend application work",
        "description": "I also built parts of the backend. That gave me responsibility beyond the visible interface and experience with the application logic supporting the product."
      },
      {
        "title": "Connecting both sides of a feature",
        "description": "Working across frontend and backend brings the relationship between interface behavior and application behavior into focus. I contributed with context on both sides of that boundary."
      },
      {
        "title": "Delivery within an existing product",
        "description": "My work formed part of the wider engineering effort. That kind of contribution calls for understanding how a feature fits into the surrounding application, as well as implementing the area directly in front of you."
      }
    ],
    "technologies": [],
    "challengeHeading": "The engineering context",
    "challenge": "Discovery, study content, and the supporting application need to form a coherent learning experience. Contributing to both the interface and backend requires attention to those connections and to the boundaries of the areas being changed.",
    "approachHeading": "Thinking beyond a single layer",
    "approach": "My scope covered selected frontend and backend areas. I bring the same product context to both: what a person is trying to do, what the interface needs to communicate, and what the application must support underneath. That perspective is especially useful in a shared product, where an individual change becomes part of a much larger experience.",
    "outcomes": [
      "Frontend functionality contributed to the live AfternoonPrep product.",
      "Backend functionality contributed as part of the wider platform.",
      "Hands-on experience delivering work across both the interface and supporting application."
    ],
    "headline": "Working across the learning experience and the systems behind it.",
    "summary": "Frontend and backend contributions to an education platform, bringing experience on both sides of the application to a product built around exam preparation and learning.",
    "snapshot": [
      {
        "label": "My role",
        "value": "Frontend & backend"
      },
      {
        "label": "Product domain",
        "value": "Education & learning"
      },
      {
        "label": "Ownership",
        "value": "Contributed areas"
      }
    ],
    "focusAreas": [
      "Full-stack contribution",
      "Product development",
      "Frontend–backend integration"
    ],
    "brief": "AfternoonPrep brings exam preparation, tutoring, and study resources into a digital learning product. The visible experience needs to help students understand what is available and find their way into learning, while the application behind it supports the product’s content and behavior. My contribution covered parts of both the frontend and the backend within that wider platform.",
    "engineeringNotes": [
      {
        "title": "Interface and application behavior belong together",
        "description": "What a student sees needs to make sense alongside the data and behavior supplied by the application. Cross-stack work makes that relationship hard to ignore."
      },
      {
        "title": "Product context matters",
        "description": "Exam preparation, tutoring, and resources have different purposes. Understanding the wider learning journey helps put an individual piece of engineering work in context."
      },
      {
        "title": "Contributing inside a larger system",
        "description": "The job includes understanding existing boundaries and surrounding functionality. The value of a contribution is how well it fits the product people are already using."
      }
    ],
    "outcomesHeading": "Contribution in practice",
    "takeaway": "I’m comfortable moving between the interface and the system behind it, and understanding how a contribution fits into the larger product."
  },
  "birthdaybuz": {
    "draft": false,
    "role": "Frontend developer",
    "contribution": [
      {
        "title": "Customer-facing frontend development",
        "description": "I worked as the project’s frontend developer, building parts of the web experience through which people use the birthday and gifting product."
      },
      {
        "title": "Translating product intent into interfaces",
        "description": "My contribution focused on the user-facing application: expressing product functionality through screens and interactions, and giving people a way to move through the experience."
      },
      {
        "title": "Working across a connected product",
        "description": "The product serves several related purposes. The frontend has to give birthday tracking and gifting a shared sense of direction while making individual tasks understandable."
      },
      {
        "title": "Frontend delivery in a wider application",
        "description": "I contributed the frontend as part of the overall product. That involves looking beyond how a screen appears to how the user-facing experience relates to the functionality behind it."
      }
    ],
    "technologies": [],
    "challengeHeading": "The product challenge",
    "challenge": "A personal reminder tool and a shopping experience have different interaction patterns. Bringing them together introduces a product-design problem: people should be able to remember someone’s birthday without unnecessary complexity, while still finding the gifting features when they are useful.",
    "approachHeading": "Making the product understandable",
    "approach": "My work centered on frontend implementation and the user-facing experience. The engineering priority is to translate a broad set of product capabilities into interfaces with a clear purpose. For a product like this, visual presentation and the relationship between tasks matter together: the interface is how a person understands what the product can do for them.",
    "outcomes": [
      "Frontend contributions to the live BirthdayBuz web product.",
      "User-facing development for a platform combining birthday utility and gift discovery."
    ],
    "headline": "Frontend engineering for a product built around remembering people.",
    "summary": "Frontend development for a birthday and gifting platform, turning a product that combines everyday reminders and commerce into a user-facing web experience.",
    "snapshot": [
      {
        "label": "My role",
        "value": "Frontend developer"
      },
      {
        "label": "Product domain",
        "value": "Reminders & gifting"
      },
      {
        "label": "Delivery",
        "value": "Live web product"
      }
    ],
    "focusAreas": [
      "Frontend development",
      "User-facing product work",
      "Connected product journeys"
    ],
    "brief": "BirthdayBuz brings birthday tracking, reminders, wishlists, and gift discovery together. Its value depends on making several related tasks feel like one useful product: remembering a date, preparing for it, and finding a way to celebrate someone. I worked on the frontend, where those capabilities become an experience people can navigate and use.",
    "engineeringNotes": [
      {
        "title": "A reminder is a starting point",
        "description": "An upcoming birthday can lead to several next steps. The interface needs to make those possibilities understandable without turning a simple task into a complicated one."
      },
      {
        "title": "Commerce needs clarity",
        "description": "Moving from browsing to choosing a gift adds another layer of product behavior. The frontend is responsible for presenting that journey in a way people can follow."
      },
      {
        "title": "The interface carries the product story",
        "description": "Product features become meaningful through the screens and interactions that expose them. Good frontend work helps people understand the relationship between those features."
      }
    ],
    "outcomesHeading": "What I delivered",
    "takeaway": "I approach frontend work as product engineering: the interface needs to make the underlying functionality useful and understandable."
  },
  "inawo": {
    "draft": false,
    "role": "Lead Product Engineer & React Native developer",
    "contribution": [
      {
        "title": "Product and engineering leadership",
        "description": "I lead a product team of four and make product decisions. The role connects what the product needs to achieve with the engineering work required to deliver it, keeping a view of the whole experience as the team builds individual parts."
      },
      {
        "title": "Pull-request review and technical oversight",
        "description": "I review the team’s pull requests, staying close to implementation while carrying broader product responsibility. Code review is an important point where implementation choices, maintainability, and the intended product behavior meet."
      },
      {
        "title": "Sole ownership of the mobile app",
        "description": "I was the sole developer of the Inawo mobile app, building the React Native application for iOS and Android. I owned the mobile implementation end to end, alongside my leadership responsibilities on the wider product."
      },
      {
        "title": "Delivery across both mobile platforms",
        "description": "The app is published on the Apple App Store and Google Play. It gives guests access to invitations, RSVPs, event details, and wedding updates in one place, with a single product experience spanning iOS and Android."
      }
    ],
    "technologies": [
      "React Native"
    ],
    "challengeHeading": "The engineering context",
    "challenge": "This role spans two kinds of ownership: helping a team deliver the wider product, and being the individual developer responsible for the mobile application. The engineering context includes decisions about product direction, reviewing other developers’ work, and carrying a mobile experience through to public release.",
    "approachHeading": "Leadership close to the code",
    "approach": "I stay involved at both the product and implementation levels. Product decisions establish what we should build and why; pull-request reviews keep me connected to how it is being built. Independently developing the React Native app also means my leadership is informed by hands-on delivery, including the practical differences between a web experience and a product people use on their phones.",
    "outcomes": [
      "A React Native guest app independently built and publicly available on iOS and Android.",
      "Ongoing product engineering leadership for a team of four.",
      "A product role spanning decisions, code review, and hands-on mobile development."
    ],
    "headline": "Leading the product. Building the mobile experience.",
    "summary": "Lead Product Engineer for a wedding platform, combining responsibility for a four-person product team with independent delivery of the React Native app for iOS and Android.",
    "snapshot": [
      {
        "label": "Team leadership",
        "value": "4-person product team"
      },
      {
        "label": "Mobile ownership",
        "value": "Independently built"
      },
      {
        "label": "Shipped on",
        "value": "iOS & Android"
      }
    ],
    "focusAreas": [
      "Product engineering",
      "Technical leadership",
      "Code review",
      "React Native",
      "Mobile delivery"
    ],
    "brief": "Inawo connects wedding planning with the experience of attending a celebration. Couples need a platform to organize their event, while guests need a convenient way to find invitations, respond, and stay informed. That makes the work broader than building individual screens: the product has to make sense across different users, responsibilities, and platforms.",
    "engineeringNotes": [
      {
        "title": "Different users, connected journeys",
        "description": "Planning a wedding and attending one are different tasks. The product needs to connect them while keeping each person’s next action clear."
      },
      {
        "title": "Team delivery and individual ownership",
        "description": "Leading the team requires a broad view of the product; building the mobile app independently requires responsibility for the details. This project brings both forms of work together."
      },
      {
        "title": "Designing for a mobile context",
        "description": "Invitations, event details, and updates need to feel convenient on a phone. React Native is the foundation for delivering that guest experience across iOS and Android."
      }
    ],
    "outcomesHeading": "What shipped",
    "takeaway": "This project captures how I like to work: take responsibility for the product, stay close to the code, and carry the work through to something people can use."
  },
  "lotp": {
    "draft": false,
    "role": "Frontend & backend contributor",
    "contribution": [
      {
        "title": "Frontend application development",
        "description": "I contributed to the user-facing side of the product, building parts of the interface through which people interact with its social and event experience."
      },
      {
        "title": "Supporting backend functionality",
        "description": "I also built parts of the backend. My scope therefore included application behavior behind the interface, alongside the frontend work visible to users."
      },
      {
        "title": "Understanding the experience across layers",
        "description": "A product that connects music, social activity, and events needs its different parts to work together. Contributing across the stack gave me context on the relationship between what the application presents and how it behaves."
      },
      {
        "title": "Contributing to a broader implementation",
        "description": "My work was part of a wider engineering effort. I brought frontend and backend development to that shared product, working within the scope of the areas I contributed."
      }
    ],
    "technologies": [],
    "challengeHeading": "The engineering context",
    "challenge": "The product combines different kinds of activity: discovering an event, entering a music-led experience, and engaging socially. That breadth makes the boundaries between interface behavior and supporting application behavior an important part of the engineering context.",
    "approachHeading": "Keeping the full product in view",
    "approach": "My involvement covered selected frontend and backend areas. I think about that work from both directions: the experience a person is trying to have, and the system behavior needed to support it. Working across those layers helps keep an individual piece of implementation connected to the purpose of the larger product.",
    "outcomes": [
      "Frontend work contributed to the live Life of the Party product.",
      "Backend work delivered as part of the wider application.",
      "Experience working across the visible experience and supporting systems of a social product."
    ],
    "headline": "Building across the frontend and backend of a social experience.",
    "summary": "Contributions to both sides of a product connecting live music, social interaction, and events, with work spanning the user-facing application and supporting backend.",
    "snapshot": [
      {
        "label": "My role",
        "value": "Frontend & backend"
      },
      {
        "label": "Product domain",
        "value": "Music, social & events"
      },
      {
        "label": "Ownership",
        "value": "Contributed areas"
      }
    ],
    "focusAreas": [
      "Cross-stack development",
      "Social product experience",
      "Frontend–backend integration"
    ],
    "brief": "Life of the Party brings live DJ sessions, social experiences, and event discovery into one product. People encounter it as an experience, but that experience spans interfaces and application systems. I built parts of the frontend and parts of the backend as a contributor to the wider product.",
    "engineeringNotes": [
      {
        "title": "Several contexts, one product",
        "description": "Music, social activity, and events have distinct purposes. The product needs a clear relationship between them and a coherent way to move between those contexts."
      },
      {
        "title": "State is part of the experience",
        "description": "In an interactive social product, what the interface presents depends on the application’s current state. That is an important boundary between frontend work and backend behavior."
      },
      {
        "title": "Scope within a larger system",
        "description": "Contributing to a product means understanding the surrounding implementation. Working on both frontend and backend creates useful context for those decisions."
      }
    ],
    "outcomesHeading": "Contribution in practice",
    "takeaway": "I enjoy products where the interface and the system behind it need to be considered together, especially when several experiences meet in one application."
  },
  "certchain": {
    "draft": false,
    "roleLabel": "MY ROLE",
    "role": "Sole developer — frontend, backend & blockchain",
    "contributionHeading": "What I built",
    "outcomesHeading": "What I delivered",
    "contribution": [
      {
        "title": "The complete web application",
        "description": "Built the Next.js and TypeScript application, including institution and recipient account views, Supabase authentication, and database integration. The interface uses Tailwind CSS and shadcn/ui components."
      },
      {
        "title": "Certificate issuance across two systems",
        "description": "Implemented form validation with React Hook Form and Zod, serialized the certificate data, calculated a SHA-256 hash, and submitted a wallet-signed Aptos transaction. The flow waits for transaction confirmation before saving the associated record and transaction identifier in Supabase."
      },
      {
        "title": "On-chain record and verification lookup",
        "description": "Built the Move issuance and lookup functionality, alongside a public verification flow. Verification resolves the supplied hash through Supabase, calls the contract’s get_certificate view function, and compares the returned value with the expected hash string."
      },
      {
        "title": "Recipient access and portable credentials",
        "description": "Built certificate access for recipients and PDF export using React PDF. Exported documents include the credential hash and a link to the corresponding Aptos testnet transaction."
      }
    ],
    "technologies": [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Supabase Auth",
      "PostgreSQL",
      "Aptos TypeScript SDK",
      "Move",
      "React Hook Form",
      "Zod",
      "React PDF"
    ],
    "challenge": "A database and a blockchain do different jobs. Accounts and searchable product metadata fit the conventional application stack, while an on-chain record gives the credential a reference outside that database. The engineering challenge is connecting those representations and making the result usable without exposing every underlying step to the person issuing or checking a certificate.",
    "approach": "Supabase holds account information and certificate metadata. The Move module stores certificate identifiers and hash-bearing strings on Aptos testnet. The application coordinates the two: issuance links a database record to a wallet transaction, while verification uses the stored identifier to look up the on-chain value. This keeps the web experience familiar while making the blockchain interaction an explicit part of the workflow.",
    "outcomes": [
      "An independently built web application with a deployed public demo.",
      "Institution-side issuance, recipient account views, and PDF certificate export.",
      "A Supabase-to-Aptos verification flow and a Move module with issuance and lookup functions.",
      "A source-level issue-and-retrieve test for the Move module."
    ],
    "references": [
      {
        "label": "Issuance workflow",
        "url": "https://github.com/Kenny-ai/CertChain/blob/master/frontend/components/ui/AccountForms/CreateCertificate.tsx"
      },
      {
        "label": "Verification flow",
        "url": "https://github.com/Kenny-ai/CertChain/blob/master/frontend/app/verify/page.tsx"
      },
      {
        "label": "Move contract & test",
        "url": "https://github.com/Kenny-ai/CertChain/blob/master/aptos/CredChain/sources/issue_certificate.move"
      },
      {
        "label": "Recipient views & PDF export",
        "url": "https://github.com/Kenny-ai/CertChain/blob/master/frontend/components/ui/AccountForms/CertificatesOwned.tsx"
      }
    ],
    "headline": "From the web interface to the blockchain record. Built end to end.",
    "summary": "A credential-issuance and verification application I built independently, connecting a conventional web stack with wallet-signed transactions and certificate records on Aptos testnet.",
    "snapshot": [
      {
        "label": "Ownership",
        "value": "Sole developer"
      },
      {
        "label": "Application",
        "value": "Web + backend + Move"
      },
      {
        "label": "Blockchain network",
        "value": "Aptos testnet"
      }
    ],
    "focusAreas": [
      "End-to-end ownership",
      "Application architecture",
      "Blockchain integration",
      "Credential verification"
    ],
    "brief": "CertChain explores a practical problem: how an institution can issue a digital credential and let someone else check its record. The implementation combines a familiar account-based web application with on-chain certificate references. I built the whole project, including the frontend, backend integration, and Move functionality, so the boundaries between these systems were part of my ownership.",
    "challengeHeading": "The systems boundary",
    "approachHeading": "A clear responsibility for each layer",
    "engineeringNotes": [
      {
        "title": "Hash, identifier, and transaction are different concepts",
        "description": "The certificate hash represents serialized data, the certificate ID connects the records, and the transaction hash identifies the blockchain operation. Keeping those roles separate is central to understanding the implementation."
      },
      {
        "title": "Confirmation changes the meaning of “done”",
        "description": "Submitting a wallet transaction is different from its confirmation. The issuance flow waits for confirmation before saving the related application record and transaction identifier."
      },
      {
        "title": "Useful verification needs a clear result",
        "description": "The public form connects a supplied certificate hash with database lookup and an Aptos view call. The interface surrounds that work with loading, error, and result states."
      }
    ],
    "flow": [
      {
        "title": "Prepare the credential",
        "description": "Validate and serialize the form data, calculate its hash, and generate a certificate ID."
      },
      {
        "title": "Write the on-chain record",
        "description": "Submit a wallet-signed transaction to the Move module on Aptos testnet."
      },
      {
        "title": "Connect the metadata",
        "description": "After transaction confirmation, save the certificate details and transaction ID in Supabase."
      },
      {
        "title": "Verify the reference",
        "description": "Resolve a supplied hash, read the contract record, and compare the returned value."
      }
    ],
    "takeaway": "CertChain demonstrates the kind of systems work I enjoy: understand what each layer is responsible for, connect them deliberately, and give the user a coherent experience."
  },
  "space-tourism": {
    "draft": false,
    "role": "Sole developer — frontend & interactive experience",
    "headline": "Making exploration feel like an experience, not a list of destinations.",
    "summary": "An immersive space tourism website I built independently, pairing cinematic typography and imagery with interactive planet views, destination discovery, crew profiles, and spaceflight technology.",
    "snapshot": [
      {
        "label": "My role",
        "value": "Sole developer"
      },
      {
        "label": "Experience",
        "value": "Multi-page exploration"
      },
      {
        "label": "Interaction",
        "value": "3D & content selectors"
      }
    ],
    "focusAreas": [
      "Visual execution",
      "Interactive interfaces",
      "Responsive layouts",
      "Accessible controls"
    ],
    "brief": "Space Tourism invites visitors to imagine a journey beyond Earth. The experience spans a landing page, four destinations, crew profiles, and launch technology. It is an opportunity to show a different side of my work: the craft involved in turning rich imagery, concise storytelling, and interface behavior into a cohesive website. The goal is to make exploration feel inviting while keeping the content easy to navigate.",
    "contribution": [
      {
        "title": "A coherent visual experience",
        "description": "I built the frontend, bringing together large editorial headings, restrained supporting copy, atmospheric backgrounds, and prominent imagery. A shared navigation and visual language connect the individual pages while giving destinations, people, and technology their own treatment."
      },
      {
        "title": "Destination discovery",
        "description": "I built the destination exploration interface. Visitors can switch between the Moon, Mars, Europa, and Titan, with destination descriptions and travel information presented alongside the planet view. The orbital interface includes rotation, pause, reset, and a static-view option, giving the visual centerpiece a practical set of controls."
      },
      {
        "title": "Content that responds to exploration",
        "description": "I implemented the crew and technology selectors. Crew profiles use member selectors and previous/next controls. The technology section uses numbered selectors to introduce the launch vehicle, spaceport, and space capsule. These interactions give visitors a focused way to move through the story without overwhelming each page with content."
      },
      {
        "title": "Attention beyond the hero",
        "description": "I built the mobile navigation experience with a dedicated navigation overlay, readable content hierarchy, and controls with descriptive labels. Skip links and keyboard instructions for the planet view make usability part of the experience alongside its visual presentation."
      }
    ],
    "technologies": [],
    "challengeHeading": "Balancing spectacle with clarity",
    "challenge": "A visually ambitious site still needs to work as an interface. Large imagery and interactive planets can compete with the content, especially on a small screen. Changing destinations or profiles also introduces multiple interface states that need a clear selected state and a predictable relationship between the controls and the information shown.",
    "approachHeading": "Give each interaction a clear purpose",
    "approach": "The experience separates discovery into distinct pages and keeps related controls close to their content. Planet exploration supports the destination story, crew navigation follows a familiar previous/next pattern, and numbered technology selectors provide a clear sequence. This keeps the visual ambition grounded in recognizable navigation and content patterns.",
    "engineeringNotes": [
      {
        "title": "A useful alternative to continuous motion",
        "description": "The orbital view offers pause and static-view controls. Providing those choices lets visitors decide how they want to explore instead of making animation the only way to access the experience."
      },
      {
        "title": "Selection should communicate state",
        "description": "Destination, crew, and technology controls need to make the current selection understandable. Their labels and selected states are as important as the visual transition between subjects."
      },
      {
        "title": "Consistency across different layouts",
        "description": "Destination imagery, crew portraits, and launch photography have different proportions. The shared typography and navigation help the site feel like one experience across these distinct page compositions."
      }
    ],
    "outcomesHeading": "What this project demonstrates",
    "outcomes": [
      "A deployed, multi-page frontend with a distinctive visual identity.",
      "Interactive destination exploration with four worlds and controllable planet views.",
      "Crew and technology sections with focused content-selection interfaces.",
      "A mobile navigation experience and visible accessibility provisions, including skip links and labeled controls."
    ],
    "takeaway": "I enjoy the detail that makes a website feel considered: the relationship between type and imagery, the way a control explains itself, and how a complex visual experience stays approachable.",
    "contributionHeading": "What I built"
  }
};
