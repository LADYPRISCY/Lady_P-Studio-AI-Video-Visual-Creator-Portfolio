import { Project, GalleryItem, ServiceItem, Testimonial } from '../types.ts';

// Local generated high-fidelity assets
import heroReelImg from '../assets/images/hero_cinematic_ai_reel_1790369933783.jpg';
import cyberEditorialImg from '../assets/images/project_cyber_editorial_1790369947336.jpg';
import automotiveImg from '../assets/images/project_automotive_commercial_1790369960087.jpg';
import architectureImg from '../assets/images/project_scifi_architecture_1790369970503.jpg';
import directorPortraitImg from '../assets/images/portrait_creator_director_1790369981538.jpg';
import femaleWarriorImg from '../assets/images/female_warrior_fire_1790531984108.jpg';
import supercarNightFogImg from '../assets/images/matte_black_supercar_fog_1790532102977.jpg';
import luxuryUrbanBuildingImg from '../assets/images/luxury_urban_building_1790533345006.jpg';

export const CREATOR_PROFILE = {
  name: 'LADY_P STUDIO',
  role: 'AI Video & Visual Creator',
  tagline: 'ABOUT ME',
  location: 'Los Angeles / Tokyo / Remote',
  email: 'adelekepriscilla2019@gmail.com',
  whatsapp: '+2347068539317',
  whatsappDisplay: '+234 706 853 9317 (07068539317)',
  whatsappUrl: 'https://wa.me/2347068539317?text=Hello%20Lady_P%20Studio%2C%20I%20am%20interested%20in%20working%20with%20you%20on%20a%20project.',
  tiktok: 'https://www.tiktok.com/@adelekepriscilla8?_r=1&_t=ZS-9A5a3kWJAdl',
  tiktokHandle: '@adelekepriscilla8',
  tiktokName: 'Adeleke Priscilla',
  availability: 'Available for Commercial & Independent Commissions (Q2–Q4 2026)',
  bioHeadline: 'Turning Ideas Into Visual Experiences.',
  bioParagraph:
    'I create AI-powered videos and visuals designed to bring ideas, brands, products and stories to life. From cinematic scenes and advertising concepts to AI-generated images and visual storytelling, I combine creativity, direction and AI tools to create visuals that feel intentional and engaging.',
  portrait: 'https://res.cloudinary.com/d6ir6dye/image/upload/v1790375754/Change_suit_color_and_background.jpg',
  metrics: [
    { value: '45M+', label: 'Global Video Impressions' },
    { value: '120+', label: 'Commercial Visual Works' },
    { value: '4K', label: 'Cinema Grade Master Outputs' },
    { value: '04', label: 'AI Film Festival Selections' },
  ],
};

export const PROJECTS: Project[] = [
  {
    id: 'chronicles-of-solitude',
    title: 'Vogue Motion: Editorial Noir',
    category: 'Cinematic',
    subCategory: 'Fashion Film',
    shortDescription:
      'High-fashion dynamic motion editorial exploring sculptural poses and fluid silhouettes under dramatic studio lighting.',
    fullDescription:
      'A cinematic fashion campaign capturing haute couture dynamism through high-framerate AI motion synthesis. Blending high-contrast editorial lighting, flowing textiles, and sculptural model poses into an arresting visual reel.',
    image: heroReelImg,
    videoUrl: 'https://res.cloudinary.com/d6ir6dye/video/upload/v1790458913/Woman_posing_in_fashion_video.mp4',
    client: 'Maison Noir Fashion Lab',
    year: '2026',
    aspectRatio: '16:9',
    tools: ['Runway Gen-3 Alpha', 'Midjourney v6.1', 'Topaz Video AI', 'DaVinci Resolve Studio'],
    promptConcept:
      'High fashion editorial video of a graceful woman striking dramatic statuesque poses in luxury attire, dramatic studio rim lighting, flowing shadows, slow motion 4k cinema capture.',
    duration: '00:15 Fashion Reel',
    featured: true,
  },
  {
    id: 'aethel-liquid-gold',
    title: 'Aura: Woman Applying Perfume',
    category: 'Advertising',
    subCategory: 'Luxury Commercial',
    shortDescription:
      'Sensory slow-motion commercial capturing a woman applying signature perfume mist in a sunlit suite.',
    fullDescription:
      'A cinematic commercial blending intimate slow-motion cinematography with delicate vapor physics and warm ambient lighting. Crafted to evoke luxury, self-care, and sensory intimacy with photorealistic diffusion and motion control.',
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=85',
    videoUrl: 'https://res.cloudinary.com/d6ir6dye/video/upload/v1790456755/Woman_applying_perfume_in_room_.mp4',
    client: 'Maison de L’Aura',
    year: '2026',
    aspectRatio: '4:3',
    tools: ['Runway Gen-3 Alpha', 'Midjourney v6.1', 'Topaz Video AI', 'DaVinci Resolve Studio'],
    promptConcept:
      'Slow motion cinematic close-up of an elegant woman gently spraying luxury glass perfume mist in modern sunlit room, golden mist particles, soft shallow focus, warm editorial tones.',
    duration: '00:15 Commercial',
    featured: true,
  },
  {
    id: 'zephyr-gt-hypercar',
    title: 'Zephyr GT: The Electric Nocturne',
    category: 'Advertising',
    subCategory: 'Automotive Commercial',
    shortDescription:
      'High-speed commercial teaser featuring an electric hypercar cutting through wet coastal mist at dusk.',
    fullDescription:
      'A commercial advertising sequence engineered to showcase aerodynamic velocity. Combining camera path conditioning in Runway with motion vector stabilization and custom foley sound design.',
    image: automotiveImg,
    videoUrl: 'https://res.cloudinary.com/d6ir6dye/video/upload/v1790459740/Car_commercial_video.mp4',
    client: 'Zephyr Motors Global',
    year: '2026',
    aspectRatio: '16:9',
    tools: ['Luma Dream Machine', 'Runway Gen-3', 'Premiere Pro', 'Foley Sound Engine'],
    promptConcept:
      'Low angle tracking shot alongside sleek graphite electric hypercar on wet coastal tarmac, golden headlights cutting through salt fog, puddles reflecting dusk sun, cinematic speed blur.',
    duration: '01:15 Commercial',
    featured: true,
  },
  {
    id: 'monolith-at-twilight',
    title: 'Awakening: The Solar Eclipse',
    category: 'Cinematic',
    subCategory: 'Cosmic Spec Film',
    shortDescription:
      'Mystical cinematic sequence capturing a woman awakening as a total solar eclipse crowns the celestial horizon.',
    fullDescription:
      'A cinematic exploration blending human emotion with celestial grandeur. Features high-dynamic-range lighting, delicate optical corona flares, and evocative slow-motion character animation synthesized with cutting-edge generative video pipelines.',
    image: architectureImg,
    videoUrl: 'https://res.cloudinary.com/d6ir6dye/video/upload/v1790460599/Woman_awakening_with_solar_eclipse_.mp4',
    client: 'Celestial Media Lab',
    year: '2026',
    aspectRatio: '16:9',
    tools: ['Runway Gen-3 Alpha', 'Midjourney v6.1', 'Topaz Video AI', 'DaVinci Resolve Studio'],
    promptConcept:
      'Cinematic slow motion medium shot of a woman gently awakening as the golden corona of a total solar eclipse crowns the dark sky behind her, ambient cosmic haze, rim lighting.',
    duration: '00:15 Cosmic Reel',
    featured: true,
  },
  {
    id: 'echoes-of-tomorrow',
    title: 'Elysium: Modern Luxury Estate',
    category: 'Product Visuals',
    subCategory: 'Luxury Real Estate',
    shortDescription:
      'Cinematic architectural tour showcasing ultra-luxury modern residential estates with photorealistic dynamic camera sweeps.',
    fullDescription:
      'High-end real estate visualization engineered to immerse prospective buyers. Featuring smooth indoor-outdoor drone fly-throughs, natural golden hour lighting simulations, and refined interior design staging.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85',
    videoUrl: 'https://res.cloudinary.com/d6ir6dye/video/upload/v1790371258/REAL_ESTATE_VIDEO_AI.mp4',
    client: 'Elysium Luxury Properties',
    year: '2026',
    aspectRatio: '16:9',
    tools: ['Runway Gen-3 Alpha', 'Luma Dream Machine', 'DaVinci Resolve Studio', 'Premiere Pro'],
    promptConcept:
      'Cinematic drone fly-through of ultra modern luxury villa, infinity pool overlooking scenic valley at sunset, warm floor-to-ceiling interior lighting, smooth architectural camera motion.',
    duration: '01:20 Commercial',
    featured: true,
  },
  {
    id: 'sol-chronicles-genesis',
    title: 'Descent: The Desert Abyss',
    category: 'Storytelling',
    subCategory: 'Cinematic Narrative',
    shortDescription:
      'Dramatic sci-fi narrative sequence depicting characters falling through endless golden desert dunes and subterranean chasms.',
    fullDescription:
      'An episodic cinematic sequence exploring gravity-defying narrative motion. Features complex multi-character physics simulations, cascading desert sand clouds, and immersive scale created with advanced generative video pipelines.',
    image: cyberEditorialImg,
    videoUrl: 'https://res.cloudinary.com/d6ir6dye/video/upload/v1790529724/Characters_falling_through_deser__scene_2_9_10.mp4',
    client: 'Mythos Media Collective',
    year: '2026',
    aspectRatio: '16:9',
    tools: ['Runway Gen-3 Alpha', 'Kling AI', 'DaVinci Resolve Studio', 'Premiere Pro'],
    promptConcept:
      'Cinematic slow motion wide shot of characters falling through vast golden sand dunes into deep subterranean canyon, swirling sand particles, dramatic desert sunlight, high dynamic range.',
    duration: '00:15 Scene Cut',
    featured: true,
  },
  {
    id: 'nova-synthetic-odyssey',
    title: 'Horizon Odyssey: Astronaut On Near Planet',
    category: 'Cinematic',
    subCategory: 'Sci-Fi Cinematic Spec',
    shortDescription:
      'Atmospheric deep-space exploration visual capturing an astronaut traversing the alien terrain of a near exoplanet.',
    fullDescription:
      'A cinematic sci-fi speculative sequence exploring planetary frontiers, atmospheric starlight, and extraterrestrial terrain. Features photorealistic astronaut suit textures, environmental atmospheric physics, and sweeping cinematic motion.',
    image: 'https://res.cloudinary.com/d6ir6dye/image/upload/v1790530173/Atronaut_In_a_Near_Planet.jpg',
    videoUrl: 'https://res.cloudinary.com/d6ir6dye/video/upload/v1790531547/Astronut_video_1.mp4',
    client: 'Nebula Vision Works',
    year: '2026',
    aspectRatio: '16:9',
    tools: ['Runway Gen-3 Alpha', 'Midjourney v6.1', 'DaVinci Resolve Studio', 'Topaz AI'],
    promptConcept:
      'Cinematic slow motion wide shot of an astronaut walking across rugged terrain on a near alien planet, glowing celestial horizon, volumetric cosmic light rays, 4K cinema master grade.',
    duration: '00:15 Sci-Fi Video',
    featured: true,
  },
  {
    id: 'refreshing-coca-cola-commercial',
    title: 'Pure Chill: Coca-Cola Cinematic Commercial',
    category: 'Advertising',
    subCategory: 'Beverage Commercial Spec',
    shortDescription:
      'Electrifying slow-motion beverage commercial capturing ice-cold Coca-Cola pouring over crystal ice with effervescent carbonation.',
    fullDescription:
      'A cinematic commercial advertising piece engineered for pure refreshment appeal. Features high-speed fluid simulations of carbonated soda cascades, condensation droplets glistening on glass, ice cubes clinking, and vibrant red brand aesthetics in studio macro lighting.',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=1200&q=85',
    videoUrl: 'https://res.cloudinary.com/d6ir6dye/video/upload/v1790540843/Cocacola_Ai_Video.mp4',
    client: 'Beverage Media Vision',
    year: '2026',
    aspectRatio: '16:9',
    tools: ['Runway Gen-3 Alpha', 'Midjourney v6.1', 'DaVinci Resolve Studio', 'Topaz AI'],
    promptConcept:
      'Ultra high-speed commercial macro tracking shot of ice-cold dark cola soda pouring into crystal glass filled with ice, effervescent bubbles rising, glistening condensation droplets, dramatic studio backlighting.',
    duration: '00:15 Commercial Cut',
    featured: true,
  },
  {
    id: 'artisan-burger-commercial',
    title: 'Gourmet Sizzle: Artisan Burger Commercial',
    category: 'Advertising',
    subCategory: 'Food & Beverage Commercial Spec',
    shortDescription:
      'Mouthwatering culinary commercial capturing fresh gourmet burger layers, melting cheese, and smoking grill sizzle in ultra slow motion.',
    fullDescription:
      'A cinematic commercial advertising piece engineered for high appetite appeal. Showcases hyper-realistic food dynamics: flame-broiled beef patty, cascading melted cheddar cheese, crisp lettuce, vibrant tomato, and sesame brioche bun assembly in dramatic studio macro lighting.',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=85',
    videoUrl: 'https://res.cloudinary.com/d6ir6dye/video/upload/v1790536365/Burger_Ai_Video.mp4',
    client: 'Gourmet Feast Studios',
    year: '2026',
    aspectRatio: '16:9',
    tools: ['Runway Gen-3 Alpha', 'Midjourney v6.1', 'DaVinci Resolve Studio', 'Topaz AI'],
    promptConcept:
      'Cinematic slow motion food commercial of a mouthwatering gourmet burger, sizzling beef patty with melting cheese, cascading fresh ingredients, dramatic studio lighting, 4K macro culinary capture.',
    duration: '00:15 Food Commercial',
    featured: true,
  },
  {
    id: 'lactea-pure-commercial',
    title: 'Lactea: Pure Velocity Liquid Motion',
    category: 'Advertising',
    subCategory: 'Commercial & Liquid Dynamic Motion',
    shortDescription:
      'Mesmerizing high-speed commercial fluid simulation capturing smooth white milk droplets colliding in ultra slow motion.',
    fullDescription:
      'A cinematic commercial exploration of fluid dynamics, surface tension, and macro lighting. Features high-framerate droplet impacts, volumetric creamy textures, and pristine editorial lighting balance.',
    image: supercarNightFogImg,
    videoUrl: 'https://res.cloudinary.com/d6ir6dye/video/upload/v1790371170/Milk_Ai_Video.mp4',
    client: 'Lactea Pure Dairy',
    year: '2026',
    aspectRatio: '16:9',
    tools: ['Runway Gen-3 Alpha', 'Midjourney v6.1', 'DaVinci Resolve Studio', 'Topaz AI'],
    promptConcept:
      'Ultra high-speed commercial macro camera tracking pristine creamy milk splashing and forming crown droplets in midair, soft studio diffusion, 4K high dynamic range.',
    duration: '00:15 Commercial Cut',
    featured: true,
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Aura of the Outer Rim: Astronaut on Near Planet',
    aspectRatio: '16:9',
    image: 'https://res.cloudinary.com/d6ir6dye/image/upload/v1790530173/Atronaut_In_a_Near_Planet.jpg',
    category: 'Cinematic Worldbuilding',
    promptConcept: 'Cinematic widescreen frame of an astronaut surveying an uncharted celestial horizon on a near exoplanet, atmospheric haze, volumetric starlight.',
    lensInfo: 'Anamorphic 40mm · T/2.0 · ISO 200',
    colorGrade: 'Kodak 5219 Emulation + Warm Amber Highlight Lift',
  },
  {
    id: 'gal-2',
    title: 'The Flameborn Sentinel: Warrior maiden',
    aspectRatio: '3:4',
    image: femaleWarriorImg,
    category: 'Epic Fantasy & Worldbuilding',
    promptConcept: 'Female warrior in engraved knight armor wielding a blazing flaming sword and battle shield amidst fiery battle sparks.',
    lensInfo: 'Zeiss Master Prime 50mm · T/1.3 · ISO 400',
    colorGrade: 'High-Temperature Molten Ember Glow + Burnished Steel Contrast',
  },
  {
    id: 'gal-3',
    title: 'Nocturne Beast: Matte Obsidian in Mist',
    aspectRatio: '3:4',
    image: supercarNightFogImg,
    category: 'Automotive Direction',
    promptConcept: 'Matte black exotic supercar centered on wet asphalt street enveloped in thick ground fog, sharp LED lights glowing under warm amber streetlamps.',
    lensInfo: 'Leica Noctilux-M 50mm · f/0.95 · ISO 800',
    colorGrade: 'Deep Obsidian Black + Tungsten Streetlamp Glow & Mist Diffusion',
  },
  {
    id: 'gal-4',
    title: 'The Grand Meridian: Contemporary Residences',
    aspectRatio: '9:16',
    image: luxuryUrbanBuildingImg,
    category: 'Architectural Design',
    promptConcept: 'High-angle rectilinear architectural photography of luxury residential building featuring sandstone limestone facade, corner glass balconies, and landscaped pedestrian promenade.',
    lensInfo: 'Schneider Kreuznach 35mm Tilt-Shift · f/8.0 · ISO 100',
    colorGrade: 'Natural Daylight Neutral + Warm Sandstone Stone Vibrancy',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'ai-video-production',
    number: '01',
    title: 'AI Video Production',
    description:
      'Cinematic AI-generated videos for brands, advertising, storytelling and social media.',
    deliverables: [
      'Multi-scene cinematic video generation',
      'Consistent character & environment seeding',
      'Camera trajectory conditioning & stabilization',
      '4K AI upscaling and frame interpolation',
      'Color grading & sound design mastering',
    ],
    timeline: '1–3 Weeks per project',
  },
  {
    id: 'ai-image-creation',
    number: '02',
    title: 'AI Image Creation',
    description:
      'High-quality AI visuals for campaigns, concepts, products and creative projects.',
    deliverables: [
      'Editorial lookbooks & high-fashion imagery',
      'Commercial advertising key visuals',
      'Architectural & interior spatial concepts',
      'Ultra-high-resolution print-ready exports (8K+)',
      'Custom style LoRA & prompt engineering pipelines',
    ],
    timeline: '3–7 Business days',
  },
  {
    id: 'ai-advertising-content',
    number: '03',
    title: 'AI Advertising Content',
    description:
      'Attention-grabbing visual content designed for promotional campaigns and digital marketing.',
    deliverables: [
      'High-hook 9:16 and 16:9 social video ads',
      'Dynamic product transformations & morphs',
      'Omnichannel asset adaptation (Meta, TikTok, DOOH)',
      'A/B creative test variations & fast turnarounds',
      'Full commercial usage rights & clearance guidance',
    ],
    timeline: '1–2 Weeks',
  },
  {
    id: 'visual-storytelling',
    number: '04',
    title: 'Visual Storytelling',
    description:
      'AI-powered storytelling that transforms ideas and scripts into compelling visual experiences.',
    deliverables: [
      'Script breakdown & cinematic storyboard synthesis',
      'Narrative worldbuilding bible & visual anchors',
      'Short films, music videos, & brand origin lore',
      'Emotion-driven pacing & soundscape orchestration',
      'Interactive visual pitching decks for directors',
    ],
    timeline: '2–4 Weeks',
  },
  {
    id: 'creative-ai-concepts',
    number: '05',
    title: 'Creative AI Concepts',
    description:
      'Experimental and concept-driven visuals for brands, creators and businesses.',
    deliverables: [
      'Avant-garde visual R&D and aesthetic discovery',
      'Future trend forecasting imagery',
      'Interactive visual prototypes & concept packs',
      'Creative direction consulting for creative agencies',
      'Custom AI workflow setup & prompt architecture',
    ],
    timeline: 'Flexible sprints',
  },
];

export const PROCESS_STEPS = [
  {
    number: '01',
    name: 'IDEA',
    subtitle: 'Understanding the concept, message and desired outcome.',
    details:
      'We begin with an in-depth creative brief. We establish target emotion, narrative arc, audience resonance, brand boundaries, and technical aspect deliverables.',
  },
  {
    number: '02',
    name: 'DIRECTION',
    subtitle: 'Developing the visual style, storytelling and creative direction.',
    details:
      'Curating mood boards, color palettes, lighting formulas, and custom prompt syntax. We create initial visual lookframes to lock the exact aesthetic before heavy generation.',
  },
  {
    number: '03',
    name: 'CREATION',
    subtitle: 'Using AI tools to generate, refine and animate the visuals.',
    details:
      'Orchestrating state-of-the-art diffusion models, camera motion controls, depth maps, and iterative generative passes to craft high-coherence, cinematic frames.',
  },
  {
    number: '04',
    name: 'DELIVERY',
    subtitle: 'Polishing the final content and preparing it for its intended platform.',
    details:
      'Refining through DaVinci color grading, timeline pacing, Foley audio synthesis, 4K upscaling, and exporting optimized deliverables ready for cinema, digital, or broadcast.',
  },
];

export const TOOLS_EXPERTISE = [
  { label: 'AI Video', highlight: true },
  { label: 'AI Image Generation', highlight: true },
  { label: 'Visual Storytelling', highlight: false },
  { label: 'Prompt Design', highlight: false },
  { label: 'Video Editing', highlight: false },
  { label: 'Motion Design', highlight: false },
  { label: 'Creative Direction', highlight: true },
  { label: 'Advertising Content', highlight: false },
];

export const MODEL_STACK = [
  { name: 'Runway Gen-3 Alpha', category: 'Camera Motion & Video Synthesis' },
  { name: 'Midjourney v6.1', category: 'High-Fidelity Keyframes & Textures' },
  { name: 'Luma Dream Machine', category: 'Dynamic Spatial Transitions' },
  { name: 'Kling AI / Hailuo', category: 'Character Coherence & Pacing' },
  { name: 'Topaz Video AI 4K', category: 'Upscaling & Temporal Polish' },
  { name: 'DaVinci Resolve Studio', category: 'Anamorphic Grading & Master Color' },
  { name: 'Adobe Premiere & AE', category: 'Editorial Cut & Visual Compositing' },
  { name: 'ComfyUI / ControlNet', category: 'Pose Conditioning & Structural Lock' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    quote:
      'Kaien bridged the gap between raw AI capability and genuine cinematic auteurship. The spec commercial he produced for our hypercar launch captured 18 million organic impressions in 72 hours.',
    author: 'Marcus Vance-Reid',
    role: 'Global Creative Director',
    company: 'Zephyr Mobility Labs',
    projectHighlight: 'Zephyr GT Campaign',
  },
  {
    id: 'test-2',
    quote:
      'Finding a creator who understands lighting, lens choices, and subtle emotion—not just throwing random prompts together—is rare. His visual storytelling brought our fashion house into a whole new dimension.',
    author: 'Astrid Lindholm',
    role: 'Head of Brand & Visuals',
    company: 'Maison Aethel Paris',
    projectHighlight: 'Haute Couture Series',
  },
  {
    id: 'test-3',
    quote:
      'The speed and polish blew our executive team away. In three weeks, we received cinema-grade visual assets that normally take a 40-person VFX team six months to render.',
    author: 'Devon Kurosawa',
    role: 'Executive Producer',
    company: 'Autonomous Media Collective',
    projectHighlight: 'Chronicles of Solitude',
  },
];
