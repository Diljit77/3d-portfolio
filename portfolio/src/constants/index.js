const navLinks = [
    {
      name: "project",
      link: "#work",
    },
    {
      name: "Experience",
      link: "#experience",
    },
    {
      name: "Skills",
      link: "#skills",
    },

  ];
  
  const words = [
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
  ];
  
  const counterItems = [
    { value: 15, suffix: "+", label: "Years of Experience" },
    { value: 200, suffix: "+", label: "Satisfied Clients" },
    { value: 108, suffix: "+", label: "Completed Projects" },
    { value: 90, suffix: "%", label: "Client Retention Rate" },
  ];
  
  const logoIconsList = [
    {
      imgPath: "/images/logos/company-logo-1.png",
    },
    {
      imgPath: "/images/logos/company-logo-2.png",
    },
    {
      imgPath: "/images/logos/company-logo-3.png",
    },
    {
      imgPath: "/images/logos/company-logo-4.png",
    },
    {
      imgPath: "/images/logos/company-logo-5.png",
    },
    {
      imgPath: "/images/logos/company-logo-6.png",
    },
    {
      imgPath: "/images/logos/company-logo-7.png",
    },
    {
      imgPath: "/images/logos/company-logo-8.png",
    },
    {
      imgPath: "/images/logos/company-logo-9.png",
    },
    {
      imgPath: "/images/logos/company-logo-10.png",
    },
    {
      imgPath: "/images/logos/company-logo-11.png",
    },
  ];
  
  const abilities = [
    {
      imgPath: "/images/seo.png",
      title: "Full-Stack Expertise",
      desc: "Building scalable web apps using MongoDB, Express.js, React.js, and Node.js",
    },
    {
      imgPath: "/images/chat.png",
      title: "Clean & Maintainable Code",
      desc: "Writing readable, reusable, and modular code that scales well."
    },
    {
      imgPath: "/images/time.png",
      title: "Performance Optimization",
      desc: "Delivering fast-loading, efficient websites with optimized backend logic."
    },
  ];
  
  const techStackImgs = [
    {
      name: "React Developer",
      imgPath: "/images/logos/react.png",
    },
    {
      name: "Python Developer",
      imgPath: "/images/logos/python.svg",
    },
    {
      name: "Backend Developer",
      imgPath: "/images/logos/node.png",
    },
    {
      name: "Interactive Developer",
      imgPath: "/images/logos/three.png",
    },
    {
      name: "Project Manager",
      imgPath: "/images/logos/git.svg",
    },
  ];
  
  const techStackIcons = [
    {
      name: "React Developer",
      modelPath: "/models/react_logo-transformed.glb",
      scale: 1,
      rotation: [0, 0, 0],
    },

    {
      name: "Backend Developer",
      modelPath: "/models/node-transformed.glb",
      scale: 5,
      rotation: [0, -Math.PI / 2, 0],
    },
    {
      name: "Interactive Developer",
      modelPath: "/models/three.js-transformed.glb",
      scale: 0.05,
      rotation: [0, 0, 0],
    },
    {
      name: "Project Manager",
      modelPath: "/models/git-svg-transformed.glb",
      scale: 0.05,
      rotation: [0, -Math.PI / 4, 0],
    },
  ];
  
 const expCards = [
  {
    review:
      "Daljit brought creativity and technical expertise to the team, significantly improving backend performance. His work has been invaluable in delivering faster and more reliable experiences.",
    imgPath: "/images/totle.jpg",
    logoPath: "/images/totle.jpg",
    title: "Backend Developer Intern",
    date: "May 2025 - August 2025",
    responsibilities: [
      "Designed and implemented scalable RESTful APIs for the platform.",
      "Collaborated closely with the UI/UX team to ensure seamless integration between frontend and backend.",
      "Optimized application performance by improving database queries and backend logic, enhancing scalability and speed.",
    ],
  },
  {
    review:
      "Daljit’s backend contributions improved the efficiency of our systems and made the dashboard much smoother. His problem-solving mindset was a great asset to the team.",
    imgPath: "/images/download.jpeg",
    logoPath: "/images/download.jpeg",
    title: "Software debveloper Engineer Intern",
    date: "February 2025 - March 2025",
    responsibilities: [
      "Developed and maintained RESTful APIs for the analytics dashboard.",
      "Integrated backend services with frontend components for a seamless user experience.",
      "Enhanced system reliability by debugging and optimizing backend workflows.",
    ],
  },
  {
    review:
      "Daljit’s contributions to web development were outstanding. He consistently approached challenges with creativity and delivered high-quality results.",
    imgPath: "/images/codsoft.png",
    logoPath: "/images/codsoft.png",
    title: "Web Development Intern",
    date: "June 2024 - July 2024",
    responsibilities: [
      "Improved web design, code structuring, and responsiveness of applications.",
      "Collaborated with backend engineers to integrate APIs into frontend features.",
      "Gained hands-on experience in full-stack development by working independently on end-to-end tasks.",
    ],
  },
];

  
  const expLogos = [
    {
      name: "logo1",
      imgPath: "/images/logo1.png",
    },
    {
      name: "logo2",
      imgPath: "/images/logo2.png",
    },
    {
      name: "logo3",
      imgPath: "/images/logo3.png",
    },
  ];
  
  const testimonials = [
    {
      name: "Esther Howard",
      mentions: "@estherhoward",
      review:
        "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
      imgPath: "/images/client1.png",
    },
    {
      name: "Wade Warren",
      mentions: "@wadewarren",
      review:
        "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
      imgPath: "/images/client3.png",
    },
    {
      name: "Guy Hawkins",
      mentions: "@guyhawkins",
      review:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      imgPath: "/images/client2.png",
    },
    {
      name: "Marvin McKinney",
      mentions: "@marvinmckinney",
      review:
        "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
      imgPath: "/images/client5.png",
    },
    {
      name: "Floyd Miles",
      mentions: "@floydmiles",
      review:
        "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
      imgPath: "/images/client4.png",
    },
    {
      name: "Albert Flores",
      mentions: "@albertflores",
      review:
        "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
      imgPath: "/images/client6.png",
    },
  ];
  
  const socialImgs = [
    {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    url: "https://www.linkedin.com/in/daljit-singh-14388b264/",
  },
    {
      name: "insta",
      imgPath: "/images/insta.png",
      url:"https://www.instagram.com/diljitsingh564/",
    },
    {
      name: "fb",
      imgPath: "/images/fb.png",
      url:"https://www.facebook.com/share/1EU6uUdWsd/",
    },
    {
      name: "x",
      imgPath: "/images/x.png",
      url:"https://x.com/Daljits84841555?t=wSKyY5A4x5WAiYCbEFxqJg&s=09"
    },
    
  
  ];
  
  export {
    words,
    abilities,
    logoIconsList,
    counterItems,
    expCards,
    expLogos,
    testimonials,
    socialImgs,
    techStackIcons,
    techStackImgs,
    navLinks,
  };