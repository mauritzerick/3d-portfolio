const navLinks = [
    {
      name: "Work",
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
    {
      name: "Testimonials",
      link: "#testimonials",
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
    { value: 5, suffix: "+", label: "Years of Experience" },
    { value: 100, suffix: "+", label: "Satisfied Colleagues" },
    { value: 58, suffix: "+", label: "Completed Projects" },
    { value: 90, suffix: "%", label: "Satisfied Clients" },
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
      title: "Code Quality & Precision",
      desc: "Building robust, maintainable code with a strong emphasis on best practices and meticulous attention to detail.",
    },
    {
      imgPath: "/images/chat.png",
      title: "Clear & Direct Communication",
      desc: "Providing concise, straightforward updates to ensure transparency and keep everyone on the same page.",
    },
    {
      imgPath: "/images/time.png",
      title: "Reliable & Timely Delivery",
      desc: "Prioritizing deadlines without compromising on quality—delivering features and fixes on time, every time.",
    },
  ];
  
  const techStackImgs = [
    {
      name: "Front-End Developer",
      imgPath: "/images/logos/react.png",
    },
    {
      name: "Data Visualization",
      imgPath: "/images/logos/python.svg",
    },
    {
      name: "Back-End Developer",
      imgPath: "/images/logos/node.png",
    },
    {
      name: "Software Architectures",
      imgPath: "/images/logos/three.png",
    },
    {
      name: "Project Management",
      imgPath: "/images/logos/git.svg",
    },
  ];
  
  const techStackIcons = [
    {
      name: "Front-End Developer",
      modelPath: "/models/react_logo-transformed.glb",
      scale: 0.5,
      rotation: [0, 0, 0],
    },
    {
      name: "Data Visualization",
      modelPath: "/models/python-transformed.glb",
      scale: 0.5,
      rotation: [0, 0, 0],
    },
    {
      name: "Back-End Developer",
      modelPath: "/models/node-transformed.glb",
      scale: 3,
      rotation: [0, -Math.PI / 2, 0],
    },
    {
      name: "Software Architectures",
      modelPath: "/models/three.js-transformed.glb",
      scale: 0.03,
      rotation: [0, 0, 0],
    },
    {
      name: "Project Management",
      modelPath: "/models/git-svg-transformed.glb",
      scale: 0.03,
      rotation: [0, -Math.PI / 4, 0],
    },
  ];
  
  const expCards = [
    {
      // review: "Mauritz brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
      imgPath: "/images/exp1.png",
      logoPath: "/images/logo1.png",
      title: "Frontend Developer",
      date: "January 2022 - Present",
      responsibilities: [
        "Developed and maintained user-facing features for the Appliances Online website.",
        "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
        "Optimized web applications for maximum speed and scalability.",
      ],
    },
    {
      // review: "Mauritz’s contributions to Hello Clever's payment applications have been outstanding. He approaches challenges with a problem-solving mindset.",
      imgPath: "/images/exp2.png",
      logoPath: "/images/logo2.png",
      title: "Integration Manager",
      date: "June 2020 - December 2022",
      responsibilities: [
        "Oversee and manage technical integrations with global payment platforms and partners.",
        "Coordinate with cross-functional teams to ensure seamless payment processing and compliance.",
        "Troubleshoot and resolve integration issues to maintain service reliability and performance.",
      ],
    },
    {
      // review: "Mauritz’s work on Hello Clever's operations brought a high level of quality and efficiency. He delivered solutions that enhanced our customers experience & meet our product goals.",
      imgPath: "/images/exp3.png",
      logoPath: "/images/logo3.png",
      title: "Integration Engineer / Developer",
      date: "March 2019 - May 2020",
      responsibilities: [
        "Developed clear API and SDK documentation to support seamless integrations.",
        "Assisted clients with technical onboarding, troubleshooting, and best practices.",
        "Created tutorials, sample code, and knowledge base articles to streamline developer support.",
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
      name: "Vape King",
      mentions: "@estherhoward",
      review:
        "Easy integration and support engineer is always responsive to assist me from onboarding, integration, and answering all of my questions. great round of applause from the King.",
      imgPath: "/images/client1.png",
    },
    {
      name: "Nick Rivett",
      mentions: "@wadewarren",
      review:
        "Working with Mauritz was a fantastic experience. He transformed our website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
      imgPath: "/images/client3.png",
    },
    {
      name: "SWC Clouds",
      mentions: "@guyhawkins",
      review:
        "Great app so far, really easy to set up & use, customer support was great! Mauritz was great help! Highly recommended.",
      imgPath: "/images/client2.png",
    },
    {
      name: "Reinard Surya",
      mentions: "@marvinmckinney",
      review:
        "Mauritz was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
      imgPath: "/images/client5.png",
    },
    {
      name: "Rob Dunn",
      mentions: "@floydmiles",
      review:
        "Mauritz’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our appliances online site, creating reusable components which can be used across 5 sites!",
      imgPath: "/images/client4.png",
    },
    {
      name: "Gajendra Singh",
      mentions: "@albertflores",
      review:
        "Mauritz was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and Back-End dev are top-notch.",
      imgPath: "/images/client6.png",
    },
  ];
  
  const socialImgs = [
    {
      name: "github",
      imgPath: "/images/github.png",
      url: "https://github.com/mauritzerick?tab=repositories",
    },
    {
      name: "insta",
      imgPath: "/images/insta.png",
      url: "https://www.instagram.com/mauritzerick/",
    },
    // {
    //   name: "fb",
    //   imgPath: "/images/fb.png",
    // },
    // {
    //   name: "x",
    //   imgPath: "/images/x.png",
    // },
    {
      name: "linkedin",
      imgPath: "/images/linkedin.png",
      url: "https://www.linkedin.com/in/mauritzerick/"
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