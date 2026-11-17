/**
 * Editable portfolio content.
 * Update this file to change copy, links, experience, and project details.
 * Leave description / technologies / contribution empty until you add real details.
 */

export const site = {
  name: 'Sparsh Thakur',
  title: 'Full-Stack Developer | Software Engineer',
  tagline: 'Engineering Scalable Applications. Building Digital Experiences.',
  heroHeadline: 'I build digital products that make an impact.',
  email: 'thakursparsh.st@gmail.com',
  phone: '7018107871',
  whatsapp: 'https://wa.me/917018107871',
  location: 'Palampur, Himachal Pradesh, India',
  linkedin: 'https://www.linkedin.com/in/sparshthakur1999',
  availability: 'Open to freelance & contract projects',
}

export const about = {
  eyebrow: 'About',
  headline: 'Full-stack engineer focused on reliable products and clean delivery.',
  paragraphs: [
    'I design and build web applications, e-commerce platforms, and API-driven systems - from architecture through production deployment.',
    'My work spans Laravel and modern JavaScript frontends, CMS and commerce platforms, mobile API integrations, and server infrastructure.',
    'I also build and ship mobile applications - from Android app development to mobile API integrations that connect apps with robust backends, payments, notifications, and third-party services.',
  ],
}

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Projects', href: '#featured' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

/** Featured case studies - keep description / technologies / contribution editable and empty until filled with real details. */
export const featuredProjects = [
  {
    id: 'venture-down-south',
    number: '01',
    title: 'Venture Down South',
    url: 'https://venturedownsouth.com.au',
    image: '/screenshots/venture-down-south.jpg',
    description: '',
    technologies: [],
    contribution: '',
  },
  {
    id: 'thedogline',
    number: '02',
    title: 'The Dog Line',
    url: 'https://thedogline.com.au',
    image: '/screenshots/thedogline.jpg',
    description: '',
    technologies: [],
    contribution: '',
  },
  {
    id: 'petlufu',
    number: '03',
    title: 'Petlufu',
    url: 'https://petlufu.com',
    image: '/screenshots/petlufu.jpg',
    description: '',
    technologies: [],
    contribution: '',
  },
]

/** Website gallery - all ten projects. Featured three also appear above. */
export const websiteGallery = [
  {
    id: 'venture-up-north',
    title: 'Venture Up North',
    url: 'https://ventureupnorth.com.au',
    image: '/screenshots/venture-up-north.jpg',
  },
  {
    id: 'venture-down-south',
    title: 'Venture Down South',
    url: 'https://venturedownsouth.com.au',
    image: '/screenshots/venture-down-south.jpg',
  },
  {
    id: 'thedogline',
    title: 'The Dog Line',
    url: 'https://thedogline.com.au',
    image: '/screenshots/thedogline.jpg',
  },
  {
    id: 'sobroome',
    title: 'Sobroome',
    url: 'https://sobroome.com.au',
    image: '/screenshots/sobroome.jpg',
  },
  {
    id: 'farmer-near-me',
    title: 'Farmer Near Me',
    url: 'https://farmernear.me',
    image: '/screenshots/farmer-near-me.jpg',
  },
  {
    id: 'wapapp',
    title: 'WAPAPP',
    url: 'https://wapapp.tittu.in',
    image: '/screenshots/wapapp.jpg',
  },
  {
    id: 'cine-samugam',
    title: 'Cine Samugam',
    url: 'https://cinesamugam.com',
    image: '/screenshots/cine-samugam.jpg',
  },
  {
    id: 'samugam-live',
    title: 'Samugam Live',
    url: 'https://samugamlive.com',
    image: '/screenshots/samugam-live.jpg',
  },
  {
    id: 'yourekko',
    title: 'Yourekko',
    url: 'https://yourekko.com',
    image: '/screenshots/yourekko.jpg',
  },
  {
    id: 'petlufu',
    title: 'Petlufu',
    url: 'https://petlufu.com',
    image: '/screenshots/petlufu.jpg',
  },
]

export const techStack = [
  {
    category: 'Backend',
    items: ['PHP', 'Laravel', 'CodeIgniter', 'Python', 'Django', 'Node.js'],
  },
  {
    category: 'Frontend',
    items: ['JavaScript', 'React.js', 'Vue.js', 'HTML5', 'CSS3'],
  },
  {
    category: 'CMS & E-commerce',
    items: ['WordPress', 'WooCommerce', 'Shopify'],
  },
  {
    category: 'Mobile & Applications',
    items: [
      'Android Application Development',
      'Mobile Application Development',
      'Mobile API Integrations',
    ],
  },
  {
    category: 'Database',
    items: ['MySQL', 'PostgreSQL', 'MongoDB'],
  },
  {
    category: 'APIs & Integrations',
    items: [
      'REST API Development',
      'Webhooks',
      'Third-party API Integrations',
      'WhatsApp Business API',
    ],
  },
  {
    category: 'Infrastructure & DevOps',
    items: [
      'Linux',
      'Ubuntu',
      'Nginx',
      'Apache',
      'Docker',
      'Cloud Server Setup',
      'Server Configuration',
      'Server Migration',
      'SSL Configuration',
      'DNS Management',
      'Application Deployment',
      'Production Environment Management',
      'Server Monitoring',
      'Git',
      'GitHub',
    ],
  },
]

/** Service offerings - category labels aligned to stack; edit freely. */
export const services = [
  {
    title: 'Web Application Development',
    description:
      'Custom full-stack applications with Laravel, Node.js, and modern JavaScript frontends.',
  },
  {
    title: 'App Development',
    description:
      'Android and mobile application development with API integrations for backend, payments, and notifications.',
  },
  {
    title: 'CMS & E-commerce',
    description:
      'WordPress, WooCommerce, and Shopify builds tailored for product catalogues and conversions.',
  },
  {
    title: 'API & Integrations',
    description:
      'REST APIs, webhooks, third-party integrations, and WhatsApp Business API workflows.',
  },
  {
    title: 'Infrastructure & Deployment',
    description:
      'Linux servers, Nginx/Apache, Docker, SSL, DNS, migrations, and production operations.',
  },
]

export const workflow = [
  { step: '01', title: 'Discover', detail: 'Clarify goals, constraints, and success criteria.' },
  { step: '02', title: 'Architect', detail: 'Shape data models, APIs, and deployment topology.' },
  { step: '03', title: 'Build', detail: 'Implement iteratively with clear milestones and reviews.' },
  { step: '04', title: 'Ship', detail: 'Deploy, monitor, and harden the production environment.' },
]

export const heroTags = ['Laravel', 'React', 'PHP', 'Python']

export const contact = {
  eyebrow: 'Contact',
  headline: 'Let’s build something that lasts.',
  body: 'Reach out for freelance work, contract engagements, or product collaboration.',
}
