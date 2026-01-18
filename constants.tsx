
import { Project, Experience, SkillCategory } from './types';

export const PERSONAL_INFO = {
  name: "Irum Shahzadi",
  role: "Associate Software Engineer",
  email: "irums.dev@gmail.com",
  phone: "+923463579656",
  github: "https://github.com/irum-shah78",
  linkedin: "https://www.linkedin.com/in/irum-shahzadi/",
  tagline: "Bridging the gap between complex logic and seamless experiences.",
  about: "As a Software Engineer, I specialize in architecting modern web ecosystems that prioritize both performance and accessibility. My expertise spans the full stack, from building robust backends with FastAPI and PostgreSQL to crafting high-fidelity, pixel-perfect interfaces with React and Next.js. I thrive in collaborative environments where I can leverage my skills in JavaScript (ES6+), TypeScript and Cloud technologies to solve real-world problems. With a proactive mindset and a passion for AI-driven development, I focus on delivering scalable, cost-effective solutions that enhance user engagement and drive technical excellence."
};

export const SKILLS: SkillCategory[] = [
  {
    name: "Languages",
    skills: [
      { name: "JavaScript", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Python", level: 85 },
      { name: "HTML/CSS", level: 95 },
      { name: "C/C++", level: 75 }
    ]
  },
  {
    name: "Frameworks",
    skills: [
      { name: "React.js", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "Node.js", level: 85 },
      { name: "FastAPI", level: 85 },
      { name: "Tailwind CSS", level: 95 },
    ]
  },
  {
    name: "Databases & ORMs",
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "PostgreSQL", level: 75 },
      { name: "Google BigQuery", level: 75 },
      { name: "Prisma ORM", level: 85 }
    ]
  },
  {
    name: "Libraries & APIs",
    skills: [
      { name: "Redux", level: 88 },
      { name: "Axios", level: 90 },
      { name: "NextAuth", level: 85 },
      { name: "OAuth", level: 82 },
      { name: "JWT", level: 80 },
      { name: "Stripe API", level: 85 },
      { name: "OpenAI API", level: 88 }
    ]
  },
  {
    name: "Tools & Platforms",
    skills: [
      { name: "Git / GitHub", level: 92 },
      { name: "GCP / Firebase", level: 78 },
      { name: "Cloudinary", level: 80 },
      { name: "n8n", level: 85 },
      { name: "Chrome Extensions", level: 80 },
      { name: "REST APIs", level: 90 },
      { name: "AI & Automation", level: 88 }
    ]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    role: "Software Engineer",
    company: "Databiqs",
    period: "Sep 2024 - Present",
    bullets: [
      "Developed frontend and backend features using FastAPI, PostgreSQL, Google BigQuery and Python.",
      "Built 3D avatars, Chrome extensions and CRM systems, integrating Stripe and OpenAI APIs.",
      "Implemented cross-browser compatibility solutions and optimized performance using JS ES6+.",
      "Successfully transformed complex layouts into responsive, production-ready templates."
    ]
  },
  {
    role: "Bootcamper",
    company: "Techloset Solutions",
    period: "Jun 2024 - Oct 2024",
    bullets: [
      "Built comprehensive e-commerce and task management applications using Next.js and TypeScript.",
      "Implemented secure authentication systems with NextAuth and persistent storage with MongoDB.",
      "Managed project timelines proactively, ensuring on-time delivery of complex features."
    ]
  },
  {
    role: "MERN Developer Intern",
    company: "MAGMA3C",
    period: "Jun 2024 - Oct 2024",
    bullets: [
      "Contributed to MobileMate.io UI design and feature enhancements.",
      "Integrated Google Auth and implemented cost-effective technical solutions.",
      "Collaborated with cross-functional teams to ensure high project efficiency."
    ]
  },
  {
    role: "Frontend Developer Intern",
    company: "Interns Pakistan",
    period: "Oct 2023 - Dec 2023",
    bullets: [
      "Developed responsive UI components using HTML5, CSS3 and JavaScript, ensuring cross-browser compatibility.",
      "Collaborated with senior developers to integrate REST APIs and enhance frontend functionality.",
      "Performed debugging and optimization using Chrome DevTools to improve application performance and user experience."
    ]
  }
];

export const PROJECTS: Project[] = [
  // Full Stack Projects
  {
    title: "Tayraan - Flight & Hotel Booking Platform",
    description: "A modern travel booking application that allows users to search and book flights (one-way, round-trip, multi-city) and hotels from 450+ airlines and 1.5M+ properties worldwide, featuring deals, discounts for members, trending hotels by category, and last-minute weekend offers.",
    tech: ["Next.js", "TypeScript", "MongoDB", "React-i18next"],
    link: "https://tayraan.vercel.app/",
    github: "https://github.com/irum-shah78",
    image: "./assets/projects/tayraan.png",
    codeSnippet: "const searchFlights = async (params: FlightSearchParams) => { try { const res = await fetch('/api/flights/search', { method: 'POST', body: JSON.stringify(params) }); const data = await res.json(); setResults(data); } catch (err) { toast.error('Search failed'); } };",
    category: "fullstack"
  },
  {
    title: "MyPie - AI English Learning Assistant",
    description: "An interactive AI-powered platform that helps users improve English fluency through conversational practice, powered by advanced AI models with seamless payment integration.",
    tech: ["Next.js", "Stripe", "OpenAI", "FastAPI", "PostgreSQL"],
    link: "https://mypie.ai/",
    github: "https://github.com/irum-shah78",
    image: "./assets/projects/mypie.png",
    codeSnippet: "const handleConversation = async (message: string) => { try { const response = await openai.chat.completions.create({ model: 'gpt-4o', messages: [{ role: 'user', content: message }] }); setReply(response.choices[0].message.content); } catch (error) { toast.error('Failed to get AI response'); } };",
    category: "fullstack"
  },
  {
    title: "MobileMate - Ultimate Mobile Companion",
    description: "A comprehensive mobile phone platform for Pakistan featuring latest prices, detailed specs, smart comparisons, buy/sell marketplace, repair services & diagnosis, news, and reviews.",
    tech: ["Next.js", "MongoDB", "Firebase", "Cloudinary"],
    link: "https://www.mobilemate.io/",
    github: "https://github.com/irum-shah78",
    image: "./assets/projects/mobilemate.png",
    codeSnippet: "const fetchLatestPhones = async () => { try { const response = await fetch('/api/phones/latest'); const data = await response.json(); setPhones(data); } catch (error) { console.error('Failed to fetch phones:', error); } };",
    category: "fullstack"
  },
  {
    title: "Full-Stack Task Ecosystem",
    description: "A secure, feature-rich task manager with Google Auth, custom themes and profile management.",
    tech: ["Next.js", "Redux", "TailwindCSS", "Prisma", "MongoDB"],
    link: "https://todo-app-irum.vercel.app/",
    github: "https://github.com/irum-shah78/Todo-App",
    image: "./assets/projects/task-mgmt.png",
    codeSnippet: "const handleAddTask = async () => {if (taskName.trim() && todoId) {try {await dispatch(addTask({ name: taskName, todoId }));setTaskName('');toast.success('Task added successfully!');} catch (error) {toast.error('Failed to add task');}} else {toast.error('Please enter a task name');}}",
    category: "fullstack"
  },
  // React/Next Projects
  {
    title: "Patient Companion - Personal Health Assistant",
    description: "A clean, user-friendly React application designed as a companion tool for patients, helping manage health information, appointments, reminders, or medical tracking with an intuitive interface.",
    tech: ["React", "Vite", "TypeScript", "Tailwind CSS"],
    link: "https://patient-companion-eta.vercel.app/",
    github: "https://github.com/irum-shah78",
    image: "./assets/projects/patient-companion.png",
    codeSnippet: "const addReminder = (reminder: Reminder) => { setReminders(prev => [...prev, reminder]); toast.success('Reminder added!'); };",
    category: "react"
  },
  {
    title: "Care Closure - Care Management Portal",
    description: "A secure login-based React web application for managing care-related services (potentially patient care, closure processes, or support services), featuring a modern and responsive authentication interface.",
    tech: ["React", "JavaScript", "Tailwind CSS"],
    link: "https://care-closure-snowy.vercel.app/login",
    github: "https://github.com/irum-shah78",
    image: "./assets/projects/care-closure.png",
    codeSnippet: "const handleLogin = async (credentials: Credentials) => { try { await auth.signIn(credentials); navigate('/dashboard'); } catch (err) { setError('Invalid credentials'); } };",
    category: "react"
  },
  {
    title: "E-Commerce Experience",
    description: "High-performance store with dynamic product listings, shopping cart, and custom React hooks.",
    tech: ["Next.js", "Redux", "Prisma", "MongoDB", "Cloudinary"],
    link: "https://e-commerce-store-irum.vercel.app/",
    github: "https://github.com/irum-shah78/E-commerce-Store",
    image: "./assets/projects/e-commerce.png",
    codeSnippet: "export const useCart = () => { const context = useContext(CartContext); return context; };",
    category: "react"
  },
  {
    title: "Creche Home - Premium Childcare Services",
    description: "A beautiful business website for a professional creche/childcare center, showcasing dedicated babysitting and personalized childcare services for children 6 months+, with easy appointment booking and parent testimonials.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://creche-home.vercel.app/",
    github: "https://github.com/irum-shah78",
    image: "./assets/projects/creche-home.png",
    codeSnippet: "const bookAppointment = async (formData: AppointmentForm) => { await fetch('/api/book', { method: 'POST', body: JSON.stringify(formData) }); toast.success('Appointment requested!'); };",
    category: "react"
  },
  {
    title: "Fidget Admin - Modern Admin Dashboard",
    description: "A sleek, TypeScript-powered admin panel built with Next.js, designed for managing content, users, orders, or data in a fidget/product-related application with responsive layouts and efficient controls.",
    tech: ["Next.js", "TypeScript"],
    link: "https://fidget-admin.vercel.app/",
    github: "https://github.com/irum-shah78",
    image: "./assets/projects/fidget-admin.png",
    codeSnippet: "const fetchUsers = async () => { const data = await fetch('/api/users').then(res => res.json()); setUsers(data); };",
    category: "react"
  },
  {
    title: "3D Bolt - Interactive 3D Product Viewer",
    description: "An impressive 3D interactive showcase of a detailed bolt/model using Three.js, built as a high-performance frontend demo with smooth controls, lighting, and rotation — perfect for product visualization or portfolio piece.",
    tech: ["React", "Vite", "Three.js", "TypeScript"],
    link: "https://3-d-bolt.vercel.app/",
    github: "https://github.com/irum-shah78",
    image: "./assets/projects/3d-bolt.png",
    codeSnippet: "useFrame(() => { ref.current.rotation.y += 0.005; }); <mesh ref={ref}><boxGeometry /><meshStandardMaterial color='steelblue' /></mesh>",
    category: "react"
  },
  {
    title: "YouTube Clone - Video Streaming Interface",
    description: "A responsive single-page YouTube clone built with React, featuring video search, category browsing, dynamic video cards, player view, and modern UI components — perfect for demonstrating frontend skills with API fetching and state management.",
    tech: ["React", "JavaScript", "Tailwind CSS"],  
    link: "https://clone-reactjs.netlify.app/",
    github: "https://github.com/irum-shah78/youtube-clone",
    image: "./assets/projects/youtube-clone.png",  
    codeSnippet: "const fetchVideos = async (query) => { try { const res = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=${API_KEY}`); const data = await res.json(); setVideos(data.items); } catch (err) { console.error('API error:', err); } };",
    category: "react"
  },
  // HTML/CSS/JS Projects
  {
    title: "Chips Website - Exotic Snacks Landing Page",
    description: "A vibrant single-page landing site for a premium chips brand, highlighting organic, healthy snacks with global exotic flavors (Crab, Cheese, BBQ, Hot, Mix), health benefits (low calories, natural oils, no preservatives), best-sellers showcase, and contact details — built with clean, responsive design.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://chipswebsite.netlify.app/",
    github: "https://github.com/irum-shah78/Chips-Website",
    image: "./assets/projects/chips-website.png",
    codeSnippet: "document.querySelector('.flavor-btn').addEventListener('click', () => { document.querySelector('.products').scrollIntoView({ behavior: 'smooth' }); });",
    category: "html-css-js"
  },
  {
    title: "Restaurant Landing Page - Modern Food Showcase",
    description: "A responsive, visually appealing single-page restaurant website featuring a hero section, special dishes menu with add-to-cart functionality, healthy food highlights, chef expertise showcase, customer testimonials in a Swiper slider, smooth scroll navigation, and scroll-reveal animations — designed to attract diners with mouth-watering visuals and easy browsing.",
    tech: ["HTML", "CSS", "JavaScript", "Swiper.js", "ScrollReveal.js"],
    link: "https://irum-shah78.github.io/Restaurant-Landing-Page/",
    github: "https://github.com/irum-shah78/Restaurant-Landing-Page",
    image: "./assets/projects/restaurant-landing.png",
    codeSnippet: "const swiper = new Swiper('.testimonial-slider', { loop: true, autoplay: { delay: 5000 }, pagination: { el: '.swiper-pagination', clickable: true } });",
    category: "html-css-js"
  },
  {
    title: "Responsive Admin Dashboard - Metrics & Activity Tracker",
    description: "A clean, modern admin panel interface with collapsible sidebar navigation, dark mode toggle, stat cards (likes, comments, shares), recent activity feed (user names, emails, join dates, actions), and fully responsive layout using Bootstrap — ideal for showcasing dashboard UI patterns, theme switching, and organized data presentation in pure frontend tech.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    link: "https://irum-shah78.github.io/Admin-Dashboard/",
    github: "https://github.com/irum-shah78/Admin-Dashboard",
    image: "./assets/projects/admin-dashboard.png",
    codeSnippet: "document.getElementById('darkModeToggle').addEventListener('click', () => { document.body.classList.toggle('dark-mode'); });",
    category: "html-css-js"
  },
  {
    title: "McBlog FamilyFirst - Conservative Blog Platform",
    description: "A classic blog website focused on family values, conservative social/political commentary, and New Zealand issues, featuring categorized articles (e.g., Family Matters, Media Releases), recent posts on topics like religious freedom, gender debates, and media trust, plus contact info and resource links.",
    tech: ["HTML", "CSS"],
    link: "https://irum-shah78.github.io/McBlog-FamilyFirst/",
    github: "https://github.com/irum-shah78/McBlog-FamilyFirst",
    image: "./assets/projects/mcblog.png",
    codeSnippet: "/* Pure CSS responsive navigation toggle */ .nav-toggle:checked ~ .nav-menu { display: block; }",
    category: "html-css-js"
  },
  {
    title: "Image Search App - Unsplash-Powered Gallery",
    description: "An interactive image search tool that fetches high-quality photos from the Unsplash API based on user keywords. Features a clean search input, dynamic grid results, clickable images linking to originals, responsive layout, and a 'Show More' button for pagination/load more functionality — great for demonstrating API integration and dynamic content loading.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "Unsplash API"],
    link: "https://irum-shah78.github.io/Image-Search-App/",
    github: "https://github.com/irum-shah78/Image-Search-App",
    image: "./assets/projects/image-search-app.png",
    codeSnippet: "fetch(`https://api.unsplash.com/search/photos?query=${query}&page=${page}&client_id=${API_KEY}`).then(res => res.json()).then(data => { displayImages(data.results); });",
    category: "html-css-js"
  },
  {
    title: "Text-to-Speech Converter - Voice Synthesis Tool",
    description: "An interactive web tool that converts user-entered text into spoken audio using browser SpeechSynthesis API, featuring a simple input area, play/listen controls, and clean interface for easy text-to-voice conversion.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    link: "https://irum-shah78.github.io/Text-to-Speech-Converter/",
    github: "https://github.com/irum-shah78/Text-to-Speech-Converter",
    image: "./assets/projects/text-to-speech.png",
    codeSnippet: "const utterance = new SpeechSynthesisUtterance(textInput.value); speechSynthesis.speak(utterance);",
    category: "html-css-js"
  },
  {
    title: "Weather App - Real-Time City Forecast",
    description: "A straightforward weather lookup application that fetches and displays current conditions (temperature, humidity, wind speed, weather icons) for any city using an external API, with error handling for invalid inputs and a minimal, user-friendly design.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://irum-shah78.github.io/Weather-App/",
    github: "https://github.com/irum-shah78/Weather-App",
    image: "./assets/projects/weather-app.png",
    codeSnippet: "fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`).then(res => res.json()).then(data => { updateUI(data); });",
    category: "html-css-js"
  },
  {
    title: "QR Code Generator - Instant QR Creator",
    description: "A handy utility tool that generates QR codes from any text or URL input, with a clean form, generate button, and visual QR display — ideal for quick sharing of links, contacts, or messages using JavaScript QR library integration.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://irum-shah78.github.io/QR-Code-Generator/",
    github: "https://github.com/irum-shah78/QR-Code-Generator",
    image: "./assets/projects/qr-generator.png",
    codeSnippet: "new QRCode(document.getElementById('qrcode'), { text: input.value, width: 200, height: 200 });",
    category: "html-css-js"
  },
  // AI Automation Projects
  {
    title: "AI-Powered LinkedIn Carousel Generator",
    description: "An end-to-end automation tool that lets users submit any article via a Next.js form. The system intelligently summarizes content into 4 key points, generates matching carousel slide images using DALL·E, uploads everything to LinkedIn, publishes the carousel post automatically, and returns the live post URL — all in one seamless workflow.",
    tech: ["Next.js", "n8n", "OpenAI API (GPT + DALL·E)", "LinkedIn API"],
    link: "#", 
    github: "https://github.com/irum-shah78", 
    image: "./assets/projects/linkedin-carousel-automation.png",
    codeSnippet: "const summarizeAndGenerate = async (article) => { const summary = await openai.chat.completions.create({ model: 'gpt-4o', messages: [{ role: 'user', content: `Summarize into 4 key points: ${article}` }] }); const images = await Promise.all(summary.choices[0].message.content.split('\\n').map(point => openai.images.generate({ prompt: point, n: 1, size: '1024x1024' }))); };",
    category: "ai-automation"
  },
  {
    title: "Multi-Agent AI Workflow Automation",
    description: "A powerful n8n-based AI automation platform integrating OpenAI GPT models with Gmail and Google Sheets APIs. Features specialized agents for Facebook Ads performance analysis, email summarization, competitive intelligence gathering, and LLM-powered citation/source ranking — significantly reducing manual marketing and research workload while delivering high-quality, actionable insights.",
    tech: ["n8n", "OpenAI API", "Gmail API", "Google Sheets API", "Multi-LLM Routing (GPT, Gemini, Claude, Perplexity)"],
    link: "#",
    github: "https://github.com/irum-shah78",
    image: "./assets/projects/ai-workflow-automation.jpg",
    codeSnippet: "const rankCitations = async (sources) => { const ranked = await openai.chat.completions.create({ model: 'gpt-4o', messages: [{ role: 'system', content: 'Rank these sources by credibility and relevance' }, { role: 'user', content: JSON.stringify(sources) }] }); return ranked.choices[0].message.content; };",
    category: "ai-automation"
  },
];
