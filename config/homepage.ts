export interface ISocialLinks {
	title: string;
	icon: string;
	url: string;
	isPopular: boolean;
}

export interface IHomepageDetails {
	heroCard: {
		intro: string;
		summary: string;
		imgSrc: string;
	};
	sourceCode: {
		title: string;
		summary: string;
		githubUrl: string;
	};
	socialLinks: {
		title: string;
		summary: string;
		socialLinks: ISocialLinks[];
	};
}

const homepageDetails: IHomepageDetails = {
	heroCard: {
		intro: "Hi I'm Dibesh Raj Subedi,",
		summary:
			"A dreamer, explorer, learner and enthusiast. Welcome to my journey in the tech industry. Where I learn, share, explore, and innovative things.",
		imgSrc: "/images/hero.jpg",
	},
	sourceCode: {
		title: "Get your hands dirty!",
		summary: `How did I made it, learn more about project at GitHub. Or get yourself with the source code.`,
		githubUrl: "https://github.com/itSubeDibesh/Next-Portfolio",
	},
	socialLinks: {
		title: "Wanna connect with me?",
		summary: "Get in touch with me around social medias.",
		socialLinks: [
			{
				isPopular: true,
				title: "LinkedIn",
				icon: "logos:linkedin-icon",
				url: "https://www.linkedin.com/in/itsubedibesh/",
			},
			{
				isPopular: false,
				title: "Twitter",
				icon: "logos:twitter",
				url: "https://twitter.com/iSubeDibesh",
			},
			{
				isPopular: true,
				title: "Github",
				icon: "logos:github-icon",
				url: "https://github.com/itSubeDibesh",
			},
		],
	},
};

export const getHomepageData = (): IHomepageDetails => homepageDetails;
