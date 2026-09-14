// Generated from the original Squarespace site content. Edit freely.
export type Col = 'full' | 'left' | 'right';
export type Block =
  | { type: 'heading'; level: number; text: string; col: Col; row?: number }
  | { type: 'label'; text: string; col: Col; row?: number }
  | { type: 'paragraph'; html: string; col: Col; row?: number }
  | { type: 'list'; items: string[]; col: Col; row?: number }
  | { type: 'quote'; text: string; col: Col; row?: number }
  | { type: 'image'; src: string; alt: string; width?: number; height?: number; col: Col; row?: number }
  | { type: 'video'; src: string; poster: string | null; col: Col; row?: number }
  | { type: 'still'; src: string; hls: string; width: number; height: number; col: Col; row?: number }
  | { type: 'button'; text: string; href: string; col: Col; row?: number }
  | { type: 'hr'; col: Col; row?: number }
  | { type: 'embed'; src: string | null; col: Col; row?: number }
  | { type: 'gallery'; images: { src: string; alt: string }[] };
export type Section = { theme: string; blocks: Block[] };
export type Project = {
  slug: string; title: string; year: string; category: string; deliverables: string[];
  cover: { src: string; width?: number; height?: number }; card: string;
  link: { text: string; href: string } | null;
  intro: Block[]; introMedia: Block[]; sections: Section[];
};
export const site = {
  "name": "Arnas Goldberg",
  "email": "arnasgold@gmail.com",
  "domain": "arnas.it",
  "social": [
    {
      "name": "Dribbble",
      "href": "https://dribbble.com/arnasgold"
    },
    {
      "name": "Twitter",
      "href": "https://twitter.com/arnasgold"
    },
    {
      "name": "Instagram",
      "href": "https://instagram.com/arnasgoldberg"
    },
    {
      "name": "LinkedIn",
      "href": "https://www.linkedin.com/in/arnas-goldberg-48996a26/"
    }
  ]
} as const;
export const home = {
  "headline": "Multidisciplinary designer helping  businesses to create meaningful  visual experiences.",
  "specialties": [
    "Product Design",
    "Creative Direction",
    "Design Consulting",
    "Design Mentoring"
  ],
  "bgVideo": "baUFMplaqK8",
  "showreel": {
    "youtube": "xd7ozgVvGB4",
    "cover": "/media/work/showreel-cover.jpg"
  }
};
export const about: Block[] = [
  {
    "type": "heading",
    "level": 3,
    "text": "About me",
    "col": "left",
    "row": 1
  },
  {
    "type": "paragraph",
    "html": "My name is Arnas Goldberg. I am a multidisciplinary digital designer based in Italy. I have always been interested in the arts and technology, which has led me to pursue a career in digital design. I strongly believe that creativity and innovation are key to success in any industry, and I strive to bring my unique perspective and skillset to every project I work on.",
    "col": "left",
    "row": 1
  },
  {
    "type": "paragraph",
    "html": "At the moment I am working with an amazing team at <a href=\"https://argent.xyz\">Argent</a>, where I am responsible for scaling and developing the design for self-custodial wallets on Ethereum, ZkSync and StarkNet.",
    "col": "left",
    "row": 1
  },
  {
    "type": "heading",
    "level": 4,
    "text": "A Swiss Army Knife of Design",
    "col": "left",
    "row": 1
  },
  {
    "type": "paragraph",
    "html": "I started my career in 2009 as a freelance logo designer, working with various clients from around the world. I was proud to have my work published in numerous publications such as Logopond, Logo Lounge vol. 7 and Logo Nest. I loved the creative freedom that came with being a freelance designer and the satisfaction of seeing my work used by companies and individuals alike.",
    "col": "left",
    "row": 1
  },
  {
    "type": "paragraph",
    "html": "After a brief period of design studies in Denmark I joined a London-based yet fully remote design agency called Hanno, where I spent the past 10 years building beautiful digital products.",
    "col": "left",
    "row": 1
  },
  {
    "type": "paragraph",
    "html": "My initial role at Hanno was to design brand identities, illustrations and marketing collateral. Later I added web design and front-end skills to my repertoire in order to help the team to design websites. To complement my web design efforts I decided to learn motion graphics, which allowed me to design better interactions. As a team we delivered design solutions and strategies for various startups and renowned companies such as Sony and Lenovo.&nbsp;",
    "col": "left",
    "row": 1
  },
  {
    "type": "paragraph",
    "html": "5 years later, after Hanno decided to specialise in healthcare, most of the projects were greenfield ventures enabling traditional healthcare brands to transform their businesses. This put a lot of emphasis on user experience design as one of the foundational parts of our process and required me to better understand UX design, learn Design Thinking and how to work with design systems.",
    "col": "left",
    "row": 1
  },
  {
    "type": "paragraph",
    "html": "Around that time I was also entrusted by the team to take more responsibility and ownership of creative and design decisions. I became a hands-on creative lead who would bridge the gap between ideation and development. I worked closely with researchers, designers, stakeholders and developers to design and deliver digital products for healthcare companies such as Omron, Ipsen and Smith+Nephew.",
    "col": "left",
    "row": 1
  },
  {
    "type": "paragraph",
    "html": "Ultimately, this experience and combination of various skills has shaped me into a versatile and multidisciplinary designer who could handle anything. Well, almost anything.",
    "col": "left",
    "row": 1
  },
  {
    "type": "paragraph",
    "html": "<span><em>While curiosity is the driving force in my career and life, creativity is the way everything comes together.</em></span>",
    "col": "left",
    "row": 1
  },
  {
    "type": "image",
    "src": "/media/about/profile-photo.webp",
    "alt": "",
    "width": 2000,
    "height": 2000,
    "col": "right",
    "row": 1
  }
];
export const deck = {
  "title": "Product Design Portfolio",
  "kicker": "Companies I delivered for",
  "clients": "Smith+Nephew / Ipsen / Omron / Sony / Lenovo",
  "slides": [
    "/media/portfolio/slide-01.webp",
    "/media/portfolio/slide-02.webp",
    "/media/portfolio/slide-03.webp",
    "/media/portfolio/slide-04.webp",
    "/media/portfolio/slide-05.webp",
    "/media/portfolio/slide-06.webp",
    "/media/portfolio/slide-07.webp",
    "/media/portfolio/slide-08.webp",
    "/media/portfolio/slide-09.webp",
    "/media/portfolio/slide-10.webp",
    "/media/portfolio/slide-11.webp",
    "/media/portfolio/slide-12.webp",
    "/media/portfolio/slide-13.webp",
    "/media/portfolio/slide-14.webp",
    "/media/portfolio/slide-15.webp",
    "/media/portfolio/slide-16.webp",
    "/media/portfolio/slide-17.webp",
    "/media/portfolio/slide-18.webp",
    "/media/portfolio/slide-19.webp",
    "/media/portfolio/slide-20.webp",
    "/media/portfolio/slide-21.webp"
  ],
  "outro": "Thank you"
};
export const projects: Project[] = [
  {
    "slug": "ready",
    "title": "Ready (formerly Argent)",
    "year": "2022 - PRESENT",
    "category": "Crypto Wallet",
    "deliverables": [
      "Brand Identity",
      "UX/UI Design",
      "2D Animations"
    ],
    "cover": {
      "src": "/media/ready/argent.webp",
      "width": 2500,
      "height": 1406
    },
    "card": "/media/work/cover-ready.webp",
    "link": {
      "text": "Visit Ready",
      "href": "https://www.ready.co/"
    },
    "intro": [
      {
        "type": "paragraph",
        "html": "I joined Argent in 2022 to work on their flagship mobile wallet—and soon found myself shaping design across the broader product ecosystem.",
        "col": "right",
        "row": 32
      },
      {
        "type": "paragraph",
        "html": "Early on, I took ownership of the design system, which at the time was more \"loose typography and chaos\" than system. I rebuilt it from the ground up: architecting a robust, scalable component library using the latest features in Figma (yes, auto layout hell, but we made it out alive). The result was a unified design language across products, making collaboration smoother and quality more consistent.",
        "col": "right",
        "row": 32
      },
      {
        "type": "paragraph",
        "html": "Alongside systems work, I contributed to key product experiences—especially the more interactive ones. Highlights include:",
        "col": "right",
        "row": 32
      },
      {
        "type": "list",
        "items": [
          "Spok, a collectible NFT experience designed to be playful and delightful",
          "The initial UX for Argent’s payment card, including animated onboarding flows"
        ],
        "col": "right",
        "row": 32
      },
      {
        "type": "paragraph",
        "html": "As the team grew, I naturally took on a leadership role—providing direction to other designers, maintaining design quality across the board, and staying hands-on where it mattered. Think of it as “player-coach,” minus the clipboard.",
        "col": "right",
        "row": 32
      }
    ],
    "introMedia": [],
    "sections": [
      {
        "theme": "dark-bold",
        "blocks": [
          {
            "type": "still",
            "src": "/media/ready/80ee4f34-thumb.jpg",
            "hls": "https://video.squarespace-cdn.com/content/v1/5ff19feb96a9ec7fa13f247c/80ee4f34-463f-4f39-bd00-cff8e454a07c/playlist.m3u8",
            "width": 1080,
            "height": 1652,
            "col": "full",
            "row": 1
          },
          {
            "type": "still",
            "src": "/media/ready/86631834-thumb.jpg",
            "hls": "https://video.squarespace-cdn.com/content/v1/5ff19feb96a9ec7fa13f247c/86631834-83bb-463f-99a1-81d55cad2f75/playlist.m3u8",
            "width": 1080,
            "height": 1652,
            "col": "full",
            "row": 22
          },
          {
            "type": "still",
            "src": "/media/ready/218b9909-thumb.jpg",
            "hls": "https://video.squarespace-cdn.com/content/v1/5ff19feb96a9ec7fa13f247c/218b9909-0e9f-4c6b-9851-e6e14b118ee6/playlist.m3u8",
            "width": 1080,
            "height": 1652,
            "col": "full",
            "row": 43
          }
        ]
      }
    ]
  },
  {
    "slug": "purepoker",
    "title": "Pure Poker",
    "year": "2025",
    "category": "Online Poker App",
    "deliverables": [
      "Brand Identity",
      "UX/UI Design",
      "Interaction Design"
    ],
    "cover": {
      "src": "/media/purepoker/purepoker.webp",
      "width": 2500,
      "height": 1406
    },
    "card": "/media/work/cover-purepoker.webp",
    "link": {
      "text": "Visit Pure Poker",
      "href": "https://purepoker.club/"
    },
    "intro": [
      {
        "type": "paragraph",
        "html": "Pure Poker is a radically new take on online poker: rake-free, real money gameplay built around community and social connection. Founded by Jacob Bulbulia and Harold Castiaux, and backed by over $1M from top-tier VCs and angel investors, the platform is rethinking what online poker can feel like.",
        "col": "right",
        "row": 32
      },
      {
        "type": "paragraph",
        "html": "I was brought on by the founders to design the full end-to-end experience—from gameplay to the surrounding community layer. Given the product’s social-first nature, I placed strong emphasis on chat, peer-to-peer interactions, and player-driven features like rankings and friend tables.",
        "col": "right",
        "row": 32
      },
      {
        "type": "paragraph",
        "html": "I reimagined familiar poker UX patterns to introduce a fresher, more dynamic interface, while still respecting the expectations of seasoned players. Alongside the product work, I also designed the brand identity, design system, and visual language—ensuring the platform could scale without compromising on visual cohesion.",
        "col": "right",
        "row": 32
      },
      {
        "type": "paragraph",
        "html": "To bring the interactive vision to life, I combined tools like Spline 3D, Rive animations, and advanced Figma prototyping, delivering an experience that felt alive, fluid, and uniquely <em>Pure</em>.",
        "col": "right",
        "row": 32
      },
      {
        "type": "paragraph",
        "html": "The platform is currently in closed beta but can be visited using the link below to get a glimpse of what’s coming next.",
        "col": "right",
        "row": 49
      }
    ],
    "introMedia": [],
    "sections": [
      {
        "theme": "bright",
        "blocks": [
          {
            "type": "heading",
            "level": 2,
            "text": "Figma Prototypes",
            "col": "left",
            "row": 1
          },
          {
            "type": "paragraph",
            "html": "Below are some of the high-fidelity Figma prototypes giving a glimpse of the look and feel as well as the user experience of the platform",
            "col": "left",
            "row": 5
          }
        ]
      },
      {
        "theme": "",
        "blocks": [
          {
            "type": "label",
            "text": "COMMUNITY PLATFORM",
            "col": "left",
            "row": 1
          },
          {
            "type": "still",
            "src": "/media/purepoker/5969f316-thumb.jpg",
            "hls": "https://video.squarespace-cdn.com/content/v1/5ff19feb96a9ec7fa13f247c/5969f316-17d4-430c-b8bc-417393749163/playlist.m3u8",
            "width": 1670,
            "height": 1080,
            "col": "full",
            "row": 3
          }
        ]
      },
      {
        "theme": "",
        "blocks": [
          {
            "type": "label",
            "text": "GAMEPLAY",
            "col": "left",
            "row": 1
          },
          {
            "type": "still",
            "src": "/media/purepoker/e082d36a-thumb.jpg",
            "hls": "https://video.squarespace-cdn.com/content/v1/5ff19feb96a9ec7fa13f247c/e082d36a-8c8e-4bb2-8222-907dc2fc7f60/playlist.m3u8",
            "width": 1670,
            "height": 1080,
            "col": "full",
            "row": 3
          }
        ]
      }
    ]
  },
  {
    "slug": "vesu",
    "title": "Vesu",
    "year": "2024",
    "category": "Permissionless Lending Protocol On Starknet",
    "deliverables": [
      "Brand Identity",
      "UX/UI Design",
      "Design System",
      "Design Direction"
    ],
    "cover": {
      "src": "/media/vesu/vesu.webp",
      "width": 2500,
      "height": 1406
    },
    "card": "/media/work/cover-vesu.webp",
    "link": {
      "text": "Visit Vesu",
      "href": "https://vesu.xyz/"
    },
    "intro": [
      {
        "type": "paragraph",
        "html": "I joined this early-stage DeFi protocol as the design lead through Hito Studios, owning the design across all fronts—from the ground up.",
        "col": "right",
        "row": 32
      },
      {
        "type": "paragraph",
        "html": "We started by shaping the brand: I designed the logo, crafted the visual identity, and defined a visual language that would scale with the product.",
        "col": "right",
        "row": 32
      },
      {
        "type": "paragraph",
        "html": "To support rapid iteration, I built a modular design system flexible enough to evolve alongside the protocol as it matured.",
        "col": "right",
        "row": 32
      },
      {
        "type": "paragraph",
        "html": "Given the inherent complexity of Web3 lending mechanics, I focused heavily on simplifying the user experience. The key solution: a wizard-style configurator that guides users through building lending or borrowing positions, surfacing clear cost and yield estimations at each step.",
        "col": "right",
        "row": 32
      },
      {
        "type": "paragraph",
        "html": "Beyond the core experience, I continued supporting the team with ongoing product design efforts, ensuring consistency and clarity as the protocol grew.",
        "col": "right",
        "row": 32
      },
      {
        "type": "paragraph",
        "html": "Best way to see the outcome is to experience it yourself!",
        "col": "right",
        "row": 32
      }
    ],
    "introMedia": [],
    "sections": []
  },
  {
    "slug": "oasys",
    "title": "Oasys",
    "year": "2021",
    "category": "App",
    "deliverables": [
      "Brand Identity",
      "UX/UI Design",
      "2D Animations"
    ],
    "cover": {
      "src": "/media/oasys/cover-new.webp",
      "width": 6968,
      "height": 3918
    },
    "card": "/media/work/cover-oasys.webp",
    "link": null,
    "intro": [
      {
        "type": "paragraph",
        "html": "Oasys is a risk stratification platform for clinicians treating patients with COPD (Chronic Obstructive Pulmonary Disease). It compiles various external metrics such as SPO2 readings from Apple Watch and other data of the patient. It then alerts the clinician about potential risk of exacerbations. By using Oasys, clinicians can get a more comprehensive view of their patients' health and identify risks earlier. This can help them provide better care and improve outcomes.",
        "col": "right",
        "row": 32
      },
      {
        "type": "paragraph",
        "html": "I was asked by the team at Hanno to work on the concept design of Oasys and take it further by designing the brand as well as end-to-end visual experience, which included brand identity, user interface and interaction design. My goal was to create a simple and intuitive experience that would help clinicians quickly assess a patient's risk and take appropriate action. The end result is a sleek and modern platform design that is easy to use and provides valuable insights into patient health.",
        "col": "right",
        "row": 32
      }
    ],
    "introMedia": [
      {
        "type": "video",
        "src": "/media/oasys/oasys-logo.mp4",
        "poster": null,
        "col": "full",
        "row": 47
      }
    ],
    "sections": [
      {
        "theme": "white-bold",
        "blocks": [
          {
            "type": "heading",
            "level": 2,
            "text": "Initial Challenge",
            "col": "left",
            "row": 1
          },
          {
            "type": "paragraph",
            "html": "When we started the Oasys project, we didn't even have a name for it. I was commissioned to run a workshop to explore different naming options and to design a new identity. We went through many different options, but eventually settled on the name Oasys. I also worked on designing the brand identity, including the logo, color scheme, and typography.",
            "col": "right",
            "row": 1
          },
          {
            "type": "heading",
            "level": 4,
            "text": "Logo",
            "col": "right",
            "row": 7
          },
          {
            "type": "paragraph",
            "html": "Oasys was derived from the word 'oasis' and falls within an evocative naming convention. It was chosen to recall the brand's experience of the product. The subtle play of the letters helped to retain the nature of the name while embodying multiple descriptive meanings and adding originality.",
            "col": "right",
            "row": 7
          },
          {
            "type": "paragraph",
            "html": "Because the name carried several connotations already, the main focus shifted towards designing a wordmark that is simple yet unique. We then saw an opportunity to leverage the initial letter O, which stood for oxygen, by using it across the design ecosystem as a centrepiece of branded storytelling and user interface.",
            "col": "right",
            "row": 7
          },
          {
            "type": "image",
            "src": "/media/oasys/logo-meaning2.webp",
            "alt": "",
            "width": 4098,
            "height": 2352,
            "col": "full",
            "row": 20
          },
          {
            "type": "video",
            "src": "/media/oasys/oasys-letters.mp4",
            "poster": null,
            "col": "left",
            "row": 40
          },
          {
            "type": "image",
            "src": "/media/oasys/logo-boundaries.webp",
            "alt": "Logo boundaries",
            "width": 1800,
            "height": 1800,
            "col": "right",
            "row": 40
          },
          {
            "type": "image",
            "src": "/media/oasys/app-icon.webp",
            "alt": "",
            "width": 2216,
            "height": 2216,
            "col": "left",
            "row": 57
          },
          {
            "type": "image",
            "src": "/media/oasys/book.webp",
            "alt": "",
            "width": 2700,
            "height": 1519,
            "col": "right",
            "row": 57
          }
        ]
      },
      {
        "theme": "white-bold",
        "blocks": [
          {
            "type": "heading",
            "level": 2,
            "text": "Clinician app",
            "col": "left",
            "row": 1
          },
          {
            "type": "paragraph",
            "html": "The center piece of Oasys system was the clinician's dashboard on iPad. By using this dashboard clinicians could receive alerts from their patients and take necessary actions to prevent exacerbations. The idea behind the design was a structure focusing around alert management, putting them at the front of clinicians as the most critical piece of information. When there would be no alerts that require action, clinicians could carry out regular management tasks.",
            "col": "right",
            "row": 1
          },
          {
            "type": "image",
            "src": "/media/oasys/home-2.webp",
            "alt": "",
            "width": 2700,
            "height": 1519,
            "col": "full",
            "row": 9
          },
          {
            "type": "image",
            "src": "/media/oasys/alert-close.webp",
            "alt": "",
            "width": 2160,
            "height": 2160,
            "col": "left",
            "row": 28
          },
          {
            "type": "video",
            "src": "/media/oasys/o-button.mp4",
            "poster": null,
            "col": "right",
            "row": 28
          },
          {
            "type": "image",
            "src": "/media/oasys/dashboard.webp",
            "alt": "Dashboard",
            "width": 2700,
            "height": 1519,
            "col": "full",
            "row": 45
          },
          {
            "type": "image",
            "src": "/media/oasys/UI.webp",
            "alt": "",
            "width": 2732,
            "height": 1568,
            "col": "full",
            "row": 66
          }
        ]
      },
      {
        "theme": "white-bold",
        "blocks": [
          {
            "type": "heading",
            "level": 2,
            "text": "Patient app",
            "col": "left",
            "row": 1
          },
          {
            "type": "paragraph",
            "html": "Since Oasys uses various data points to alert the clinician, one of the data points is the latest SPO2 reading. While not a requirement, patients who own Apple Watch with the blood oxygen sensor could utilise it to take an SPO2 reading. I proposed a design for an interface, which shared the same visual language and would be very simple to use by the user who is likely of a senior age.",
            "col": "right",
            "row": 1
          },
          {
            "type": "video",
            "src": "/media/oasys/watch.mp4",
            "poster": null,
            "col": "full",
            "row": 9
          },
          {
            "type": "image",
            "src": "/media/oasys/watch-faces.webp",
            "alt": "",
            "width": 2820,
            "height": 1614,
            "col": "full",
            "row": 30
          }
        ]
      }
    ]
  },
  {
    "slug": "omron-evolv",
    "title": "Omron Evolv",
    "year": "2017",
    "category": "Marketing Campaign",
    "deliverables": [
      "Creative Direction",
      "Web Design",
      "Interaction Design"
    ],
    "cover": {
      "src": "/media/omron-evolv/featured.webp",
      "width": 4694,
      "height": 2444
    },
    "card": "/media/work/cover-omron-evolv.webp",
    "link": null,
    "intro": [
      {
        "type": "paragraph",
        "html": "Omron launched a new blood pressure monitor called EVOLV, and they needed to build awareness for the launch in stores across the UK and Europe. To do that, they asked Hanno to design and launch a marketing campaign online that would be both highly effective and completely in line with their brand.",
        "col": "right",
        "row": 32
      },
      {
        "type": "paragraph",
        "html": "I was commissioned to lead the way in terms of design and creativity, developing a strong visual identity for the product and telling a story that resonated with the audience.",
        "col": "right",
        "row": 32
      }
    ],
    "introMedia": [
      {
        "type": "video",
        "src": "/media/omron-evolv/evolv.mp4",
        "poster": null,
        "col": "full",
        "row": 43
      }
    ],
    "sections": [
      {
        "theme": "white-bold",
        "blocks": [
          {
            "type": "heading",
            "level": 2,
            "text": "Early considerations",
            "col": "left",
            "row": 1
          },
          {
            "type": "paragraph",
            "html": "As a team, we wanted to make sure that the content we would put in front of the user would be there for a reason. That's why user testing was crucial. But since EVOLV was a premium product, it was equally important to reflect it through the visual language, not only through the voice and tone of the copywriting. To achieve this, I proposed several interactive solutions, which would communicate product's features and complement the story through animations.",
            "col": "right",
            "row": 1
          },
          {
            "type": "video",
            "src": "/media/omron-evolv/3d-lighting.mp4",
            "poster": null,
            "col": "full",
            "row": 11
          },
          {
            "type": "video",
            "src": "/media/omron-evolv/line-animation.mp4",
            "poster": null,
            "col": "left",
            "row": 31
          },
          {
            "type": "video",
            "src": "/media/omron-evolv/omron-connect-graph.mp4",
            "poster": null,
            "col": "right",
            "row": 31
          }
        ]
      },
      {
        "theme": "white-bold",
        "blocks": [
          {
            "type": "heading",
            "level": 2,
            "text": "The result",
            "col": "left",
            "row": 1
          },
          {
            "type": "paragraph",
            "html": "The voice and tone we used for the copywriting helped to reflect the premium nature of EVOLV, and the interactive solutions I implemented added an extra layer of polish and sophistication. Together, these elements helped to create a strong impression of quality that is essential for any premium product.",
            "col": "right",
            "row": 1
          },
          {
            "type": "image",
            "src": "/media/omron-evolv/hero.webp",
            "alt": "",
            "width": 2700,
            "height": 1519,
            "col": "full",
            "row": 8
          },
          {
            "type": "image",
            "src": "/media/omron-evolv/drawing-1.webp",
            "alt": "",
            "width": 2700,
            "height": 2700,
            "col": "left",
            "row": 28
          },
          {
            "type": "image",
            "src": "/media/omron-evolv/drawing-2.webp",
            "alt": "",
            "width": 2700,
            "height": 2700,
            "col": "right",
            "row": 28
          },
          {
            "type": "video",
            "src": "/media/omron-evolv/cut-1.mp4",
            "poster": null,
            "col": "full",
            "row": 45
          },
          {
            "type": "image",
            "src": "/media/omron-evolv/collage.webp",
            "alt": "",
            "width": 2700,
            "height": 1551,
            "col": "full",
            "row": 64
          }
        ]
      }
    ]
  },
  {
    "slug": "woundcompass",
    "title": "WoundCompass by Smith+Nephew",
    "year": "2021",
    "category": "App",
    "deliverables": [
      "Creative Direction",
      "UX/UI Design",
      "Interaction Design"
    ],
    "cover": {
      "src": "/media/woundcompass/featured.webp",
      "width": 4774,
      "height": 1900
    },
    "card": "/media/work/cover-woundcompass.webp",
    "link": null,
    "intro": [
      {
        "type": "paragraph",
        "html": "The <a href=\"https://www.smith-nephew.com/key-products/advanced-wound-management/wound-compass-clinical-support-app-csa/\">WoundCompass</a> is a comprehensive support tool for healthcare professionals that aids wound assessment and decision-making to help reduce practice variation. I came on board as a creative lead on this project, as part of the Hanno team. One of my main goals was to help define the creative direction for the WoundCompass project. This involved not only designing the user interface, but also ensuring that it was inline with the brand and could be easily extended to other digital efforts by Smith+Nephew.",
        "col": "right",
        "row": 32
      }
    ],
    "introMedia": [
      {
        "type": "video",
        "src": "/media/woundcompass/cut.mp4",
        "poster": null,
        "col": "full",
        "row": 42
      }
    ],
    "sections": [
      {
        "theme": "white-bold",
        "blocks": [
          {
            "type": "heading",
            "level": 2,
            "text": "Initial concept",
            "col": "left",
            "row": 1
          },
          {
            "type": "paragraph",
            "html": "The UX research conducted by the team revealed a need for guidance during the wound assessment. It became clear early that integrating this as a feature was a must and it quickly became one of the most important goals of the design. To allow the team have a better vision of this idea, I made a prototype showcasing one of the ways this could behave as a button that can be accessed any moment.",
            "col": "right",
            "row": 1
          },
          {
            "type": "image",
            "src": "/media/woundcompass/prototypes.webp",
            "alt": "",
            "width": 1350,
            "height": 1350,
            "col": "left",
            "row": 8
          },
          {
            "type": "video",
            "src": "/media/woundcompass/prototype-1.mp4",
            "poster": null,
            "col": "right",
            "row": 8
          },
          {
            "type": "paragraph",
            "html": "Once the team decided on the general direction for the user experience, I also began exploring how the new brand guidelines of S+N could be translated into the user interface. Although the creative direction has evolved a lot since then, this initial exploration was invaluable in helping us to identify potential problems and areas for improvement.",
            "col": "right",
            "row": 27
          },
          {
            "type": "paragraph",
            "html": "We found that some of the things that didn't work well were the choice of colour and the placement of the guide button. The colours we used made the possible actions compete for attention, and the guide button was placed too close to the primary button, which caused confusion and had to be moved elsewhere.",
            "col": "right",
            "row": 27
          },
          {
            "type": "image",
            "src": "/media/woundcompass/early-1.webp",
            "alt": "",
            "width": 2667,
            "height": 2109,
            "col": "full",
            "row": 38
          }
        ]
      },
      {
        "theme": "white-bold",
        "blocks": [
          {
            "type": "heading",
            "level": 2,
            "text": "The result",
            "col": "left",
            "row": 1
          },
          {
            "type": "paragraph",
            "html": "After countless iterations, we finally found a design language that solved our colour issues and was easy to understand. For most of the assessment process, we decided to use card components because nurses at a point of care would often be wearing gloves, so it was important that the interface felt tactile and easy to tap. We also made a rule to use S+N orange only for elements that would guide the user, providing a sense of support from brand's perspective. We found a way to display multiple choices and provide extra information by utilising bottom sheet component, which coincidentally worked really well as a confirmation.",
            "col": "right",
            "row": 1
          },
          {
            "type": "image",
            "src": "/media/woundcompass/screens.webp",
            "alt": "",
            "width": 2700,
            "height": 2516,
            "col": "full",
            "row": 11
          },
          {
            "type": "image",
            "src": "/media/woundcompass/product.webp",
            "alt": "",
            "width": 2700,
            "height": 1550,
            "col": "full",
            "row": 41
          },
          {
            "type": "heading",
            "level": 4,
            "text": "Adding finesse",
            "col": "right",
            "row": 62
          },
          {
            "type": "paragraph",
            "html": "One of the features of the app is the guide, which could be accessed at any point during the assessment process. It proved to be extremely helpful, especially for first-time users of the app.",
            "col": "right",
            "row": 62
          },
          {
            "type": "paragraph",
            "html": "I integrated subtle Lottie animations to indicate when the guide is available and how it would update at each step of the assessment.",
            "col": "right",
            "row": 62
          },
          {
            "type": "video",
            "src": "/media/woundcompass/lottie-scrub.mp4",
            "poster": null,
            "col": "left",
            "row": 72
          },
          {
            "type": "video",
            "src": "/media/woundcompass/csa-1.mp4",
            "poster": null,
            "col": "right",
            "row": 72
          }
        ]
      },
      {
        "theme": "white",
        "blocks": [
          {
            "type": "heading",
            "level": 2,
            "text": "Hand-off materials",
            "col": "left",
            "row": 1
          },
          {
            "type": "paragraph",
            "html": "I collaborated closely with engineering to provide design specifications and guidance to ensure the final layout closely represented the original design. Everything from custom designed icons to button states had to be documented. In some cases I had to support it with the guidance on spacing and interaction behaviour. These are only some examples of the core UI kit elements that were delivered at the end of the project.",
            "col": "right",
            "row": 1
          },
          {
            "type": "image",
            "src": "/media/woundcompass/kit-guide.webp",
            "alt": "",
            "width": 1350,
            "height": 1350,
            "col": "left",
            "row": 9
          },
          {
            "type": "image",
            "src": "/media/woundcompass/kit-buttons.webp",
            "alt": "",
            "width": 1350,
            "height": 1350,
            "col": "right",
            "row": 9
          },
          {
            "type": "image",
            "src": "/media/woundcompass/kit-cards.webp",
            "alt": "",
            "width": 1350,
            "height": 1350,
            "col": "left",
            "row": 26
          },
          {
            "type": "image",
            "src": "/media/woundcompass/kit-icons.webp",
            "alt": "",
            "width": 1892,
            "height": 1892,
            "col": "right",
            "row": 26
          },
          {
            "type": "image",
            "src": "/media/woundcompass/kit-spacing.webp",
            "alt": "Spacing",
            "width": 2700,
            "height": 1718,
            "col": "full",
            "row": 43
          }
        ]
      }
    ]
  }
];
export const getProject = (slug: string) => projects.find(p => p.slug === slug);
