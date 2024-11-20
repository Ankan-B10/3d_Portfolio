import {
	npm,
	appleVision,
	flappyBird,
	razorpay,
	weatherApp,
	SimonSays,
} from "../assets/images";
import {
	contact,
	css,
	express,
	git,
	github,
	html,
	javascript,
	linkedin,
	mongodb,
	motion,
	mui,
	nextjs,
	nodejs,
	react,
	redux,
	sass,
	tailwindcss,
	typescript,
} from "../assets/icons";

export const skills = [
	{
		imageUrl: css,
		name: "CSS",
		type: "Frontend",
	},
	{
		imageUrl: express,
		name: "Express",
		type: "Backend",
	},
	{
		imageUrl: git,
		name: "Git",
		type: "Version Control",
	},
	{
		imageUrl: github,
		name: "GitHub",
		type: "Version Control",
	},
	{
		imageUrl: html,
		name: "HTML",
		type: "Frontend",
	},
	{
		imageUrl: javascript,
		name: "JavaScript",
		type: "Frontend",
	},
	{
		imageUrl: mongodb,
		name: "MongoDB",
		type: "Database",
	},
	{
		imageUrl: motion,
		name: "Motion",
		type: "Animation",
	},
	{
		imageUrl: mui,
		name: "Material-UI",
		type: "Frontend",
	},
	{
		imageUrl: nextjs,
		name: "Next.js",
		type: "Frontend",
	},
	{
		imageUrl: nodejs,
		name: "Node.js",
		type: "Backend",
	},
	{
		imageUrl: react,
		name: "React",
		type: "Frontend",
	},
	{
		imageUrl: redux,
		name: "Redux",
		type: "State Management",
	},
	{
		imageUrl: sass,
		name: "Sass",
		type: "Frontend",
	},
	{
		imageUrl: tailwindcss,
		name: "Tailwind CSS",
		type: "Frontend",
	},
	{
		imageUrl: typescript,
		name: "TypeScript",
		type: "Frontend",
	},
];

export const experiences = [
	{
		title: "NPM Package",
		company_name: "PaySync",
		icon: npm,
		iconBg: "#accbe1",
		date: "Sept 2024 - Oct 2024",
		points: [
			"PaySync is your one-stop solution for seamless payment processing across multiple providers.",
			"It offers a unified interface that integrates effortlessly with any payment platforms, ensuring smooth transitions, scalability, and a consistent codebase.",
		],
	},
	{
		title: "Frontend Developer",
		company_name: "Apple Vision Pro",
		icon: appleVision,
		iconBg: "#7dd3fc",
		date: "Jan 2024 - Mar 2024",
		points: [
			"Apple Vision Pro seamlessly blends digital content with your physical space.So you can work, watch, relive memories, and connect in ways never before possible.The era of spatial computing is here.",
			"It helps me to know more about Various JavaScript Libraires",
		],
	},
];

export const socialLinks = [
	{
		name: "Contact",
		iconUrl: contact,
		link: "/contact",
	},
	{
		name: "GitHub",
		iconUrl: github,
		link: "https://github.com/Ankan-B10",
	},
	{
		name: "LinkedIn",
		iconUrl: linkedin,
		link: "https://www.linkedin.com/in/ankan-bera-8a2920244/",
	},
];

export const projects = [
	{
		iconUrl: npm,
		theme: "btn-back-black",
		name: "PaySync-NPM Package",
		description:
			"PaySync is a TypeScript library that provides a unified interface for integrating multiple payment providers, such as Stripe, LemonSqueezy, and RozerPay. It allows developers to easily switch between different payment gateways without changing existing payment logic, simplifying the management of various payment systems.",
		link: "https://github.com/Ankan-B10/Paysync_Fronend",
	},
	{
		iconUrl: appleVision,
		theme: "btn-back-blue",
		name: "Apple Vision Pro",
		description:
			"The Apple Vision Pro redefines mixed reality with unmatched precision. It delivers lifelike visuals and seamless real-time performance. VisionOS enables intuitive interaction through eye tracking, hand gestures, and voice, making it a game-changer in spatial computing.",
		link: "https://github.com/Ankan-B10/Apple-Vision",
	},
	{
		iconUrl: flappyBird,
		theme: "btn-back-red",
		name: "Flappy-Bird Game",
		description:
			"Designed and built a very interesting Online Game. Tap the arrow button to navigate an 8-bit bird character named Faby through the gaps between green pipes without hitting them.",
		link: "https://github.com/Ankan-B10/FlappyBird-Game",
	},
	{
		iconUrl: razorpay,
		theme: "btn-back-pink",
		name: "Razorpay Full Website Clone",
		description:
			"Built a Fully Responsive Website of Razorpay using Tailwind CSS",
		link: "https://github.com/Ankan-B10/Razorpay-Clone",
	},
	{
		iconUrl: weatherApp,
		theme: "btn-back-black",
		name: "Weather Web-App",
		description:
			"Developed a web application for real time weather details. Weather keeps you informed about conditions including temperature, rain, snow, and wind.",
		link: "https://github.com/Ankan-B10/Weather-Web-App",
	},
	{
		iconUrl: SimonSays,
		theme: "btn-back-yellow",
		name: "Simon-Says Game",
		description:
			"Simon Says Game is very Interesting Memorizing game for children. Simon had four different colored buttons. Each button played a unique note. Players had to be able to repeat an increasingly long string of tones that Simon created ",
		link: "https://github.com/Ankan-B10/Simon-Game",
	},
];
