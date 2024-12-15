import {
  awsIcon,
  chatgptIcon,
  cssIcon,
  deliveryIcon,
  digitalOceanIcon,
  domaincerIcon,
  expoIcon,
  gitIcon,
  HyringIcon,
  nestIcon,
  nextIcon,
  nodeIcon,
  psqlIcon,
  reactIcon,
  reactNative,
  redisIcon,
  RyzoneIcon,
  stripeIcon,
  tailwindIcon,
  tsIcon,
} from "@/assets/skill/_index";

const project_constant = [
  {
    id: 1,
    image: domaincerIcon,
    number: "01",
    company: "Domaincer Website",
    description:
      "Part of the team that developed a static website using Next.js, Tailwind CSS, and React to showcase the company’s services and products. Focused on UI design, React optimizations, and responsive performance",
    stack: [reactIcon, cssIcon,digitalOceanIcon, gitIcon],
  },
  {
    id: 2,
    image: RyzoneIcon,
    number: "02",
    company: "Ryzone",
    description:
      "Led the team in building an e-commerce app using React Native and Node.js, where users can browse products, add them to the cart, and make payments.",
    stack: [
      nextIcon,
      nodeIcon,
      tailwindIcon,
      digitalOceanIcon,
      reactNative,
      expoIcon,
      psqlIcon,
      gitIcon,
    ],
  },
  {
    id: 3,
    image: deliveryIcon,
    number: "03",
    company: "Ryzone Delivery Agent",
    description:
      "Led the team in building a delivery agent app using React Native and Redux, where agents receive orders and deliver them to customers.",
    stack: [
      nextIcon,
      nodeIcon,
      tailwindIcon,
      digitalOceanIcon,
      psqlIcon,
      gitIcon,
    ],
  },
  {
    id: 4,
    image: HyringIcon,
    number: "04",
    company: "Hyring",
    description:
      "Led the team in building the Hyring C2H platform for hiring and managing employees, where employers can post jobs and job seekers can apply. Developed a pipeline for the hiring process, with 40k active users.",
    stack: [
      nextIcon,
      nodeIcon,
      tailwindIcon,
      digitalOceanIcon,
      psqlIcon,
      awsIcon,
      redisIcon,
      nestIcon,
      tsIcon,
      gitIcon,
    ],
  },
  {
    id: 5,
    image: HyringIcon,
    number: "05",
    company: "Hyring AI Screener",
    description:
      "Led the team in developing AI Screener SaaS with LLM includes video proctoring, TTS, STT, WebSocket, queue-driven audio/video processing, event-driven notifications, Redis cache, and AWS services.",
    stack: [
      nextIcon,
      nodeIcon,
      tailwindIcon,
      digitalOceanIcon,
      psqlIcon,
      awsIcon,
      redisIcon,
      nestIcon,
      tsIcon,
      gitIcon,
      stripeIcon,
      chatgptIcon
    ],
  },
];

export default project_constant;
