import { Project } from './types';

// Note: In a real deployment, these video URLs should be replaced with direct links to the files in your Drive folder.
// Since Google Drive folder links cannot be directly used as video sources, you would typically host these 
// videos on a platform like Vimeo, YouTube, or an AWS S3 bucket for direct streaming.
// Below are placeholder video URLs to demonstrate the functionality.

const SAMPLE_VIDEO_1 = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4";
const SAMPLE_VIDEO_2 = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4";
const SAMPLE_VIDEO_3 = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4";
const SAMPLE_VIDEO_4 = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4";

export const projects: Project[] = [
  {
    id: 1,
    brand: "Vogue",
    title: "Synthetic Couture",
    agency: "Future Creative",
    team: ["Ilkin Ibrahimov", "Sarah Jenkins"],
    date: "Oct 2024",
    description: "An editorial series exploring the intersection of high fashion and generative AI. We trained custom LoRA models on vintage archival fabrics to create impossible garments that maintain textile realism.",
    images: [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=1000"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Vogue_logo.svg",
    videoUrl: SAMPLE_VIDEO_1
  },
  {
    id: 2,
    brand: "Nike",
    title: "Motion Algorithm",
    agency: "R/GA",
    team: ["Ilkin Ibrahimov", "Mike Ross"],
    date: "Aug 2024",
    description: "A dynamic branding system that evolves based on the runner's speed data. Using p5.js and real-time telemetry, we visualized athletic performance as generative art.",
    images: [
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=1000"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
    videoUrl: SAMPLE_VIDEO_2
  },
  {
    id: 3,
    brand: "BMW",
    title: "The Neural Drive",
    agency: "Serviceplan",
    team: ["Ilkin Ibrahimov", "Hans Zimmer"],
    date: "June 2024",
    description: "Generative soundscapes for the new electric fleet. The visual component uses audio-reactive shaders to map sound frequencies to visual landscapes displayed on the dashboard.",
    images: [
      "https://images.unsplash.com/photo-1555212697-194d092e3b8f?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&q=80&w=1000"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg",
    videoUrl: SAMPLE_VIDEO_3
  },
  {
    id: 4,
    brand: "Sony Music",
    title: "Album Cycle 01",
    agency: "Freelance",
    team: ["Ilkin Ibrahimov"],
    date: "Feb 2024",
    description: "Full visual identity generated for a synthetic pop artist. Includes album art, Spotify canvases, and social media assets generated via Midjourney v6 and upscaled for print.",
    images: [
      "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&q=80&w=1000"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Sony_Music_Entertainment_logo.svg",
    videoUrl: SAMPLE_VIDEO_4
  },
  {
    id: 5,
    brand: "MoMA",
    title: "Archive Dreams",
    agency: "Pentagram",
    team: ["Ilkin Ibrahimov", "Curatorial Team"],
    date: "Jan 2024",
    description: "An installation that hallucinates new art pieces based on the museum's entire digital archive. The system projects evolving paintings that never existed but stylistic fit within specific art movements.",
    images: [
      "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1574169208507-84376144848b?auto=format&fit=crop&q=80&w=1000"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/22/MoMA_Logo.svg",
    videoUrl: SAMPLE_VIDEO_1
  },
  {
    id: 6,
    brand: "Aesop",
    title: "Scent Visualization",
    agency: "In-House",
    team: ["Ilkin Ibrahimov"],
    date: "Dec 2023",
    description: "Synesthetic visualization of fragrance notes. We used fluid dynamics simulations controlled by AI to represent top, middle, and base notes of new perfumes as swirling, mixing colored smoke.",
    images: [
      "https://images.unsplash.com/photo-1618331835717-801e976710b2?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1605647540924-852290f6b0d5?auto=format&fit=crop&q=80&w=1000"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/30/Aesop_logo_2013.svg",
    videoUrl: SAMPLE_VIDEO_2
  },
  {
    id: 7,
    brand: "Wired",
    title: "The Future Issue",
    agency: "Condé Nast",
    team: ["Ilkin Ibrahimov", "Editorial"],
    date: "Nov 2023",
    description: "Cover art and interior spreads generated entirely by code. The project challenged the definition of authorship in journalism.",
    images: [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=1000"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Wired_logo.svg",
    videoUrl: SAMPLE_VIDEO_3
  },
  {
    id: 8,
    brand: "Apple",
    title: "Siri Next-Gen",
    agency: "Apple Design",
    team: ["Ilkin Ibrahimov", "Human Interface"],
    date: "Sep 2023",
    description: "Prototyping fluid interfaces for the next generation of Siri. Using generative UI to create adaptive, context-aware visual responses that morph based on user intent.",
    images: [
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&q=80&w=1000"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    videoUrl: SAMPLE_VIDEO_4
  },
  {
    id: 9,
    brand: "Tesla",
    title: "Autopilot Vision",
    agency: "Tesla AI",
    team: ["Ilkin Ibrahimov", "Autopilot Team"],
    date: "Jul 2023",
    description: "Visualizing the neural network of the autopilot system for consumer displays. Turning raw LIDAR and camera data into an aesthetic, reassuring confidence monitor.",
    images: [
      "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1536700503339-1e4b06520771?auto=format&fit=crop&q=80&w=1000"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
    videoUrl: SAMPLE_VIDEO_1
  },
  {
    id: 10,
    brand: "Spotify",
    title: "Wrapped Gen-Z",
    agency: "Spotify In-House",
    team: ["Ilkin Ibrahimov"],
    date: "Dec 2022",
    description: "Concepts for Spotify Wrapped 2022 using hyper-personalized generative video summaries. Each user received a unique video abstracting their listening habits into fluid art.",
    images: [
      "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1614680376408-81e91ffe3db7?auto=format&fit=crop&q=80&w=1000"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
    videoUrl: SAMPLE_VIDEO_2
  },
  {
    id: 11,
    brand: "Google",
    title: "DeepMind AlphaFold",
    agency: "Google Creative Lab",
    team: ["Ilkin Ibrahimov", "Research Team"],
    date: "Oct 2022",
    description: "Visualizing protein folding for educational outreach. We created accurate yet beautiful representations of complex biological processes using procedural generation.",
    images: [
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=1000"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    videoUrl: SAMPLE_VIDEO_3
  },
  {
    id: 12,
    brand: "Prada",
    title: "Synthetic Runway",
    agency: "AMO",
    team: ["Ilkin Ibrahimov", "Rem Koolhaas"],
    date: "Aug 2022",
    description: "A virtual runway show held in a space that defies physics. The environment and lighting were generated in real-time, reacting to the movement of the models.",
    images: [
      "https://images.unsplash.com/photo-1500917293049-7247a158d863?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1520006403909-838d6b92c22e?auto=format&fit=crop&q=80&w=1000"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Prada-Logo.svg",
    videoUrl: SAMPLE_VIDEO_4
  },
  {
    id: 13,
    brand: "NASA",
    title: "Exoplanet Vistas",
    agency: "JPL",
    team: ["Ilkin Ibrahimov", "Science Team"],
    date: "Jun 2022",
    description: "Artistic interpretations of exoplanet data. Using spectroscopic data, we generated photorealistic landscapes of worlds we can only see as points of light.",
    images: [
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=1000"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg",
    videoUrl: SAMPLE_VIDEO_1
  },
  {
    id: 14,
    brand: "Adidas",
    title: "Futurecraft 4D",
    agency: "Adidas Innovation",
    team: ["Ilkin Ibrahimov"],
    date: "Apr 2022",
    description: "Generative design for 3D printed midsoles. The lattice structures were evolved using genetic algorithms to maximize energy return and stability.",
    images: [
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?auto=format&fit=crop&q=80&w=1000"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
    videoUrl: SAMPLE_VIDEO_2
  }
];

export const uniqueBrands = Array.from(new Map(projects.map(p => [p.brand, p])).values());