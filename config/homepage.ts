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
}

const homepageDetails: IHomepageDetails = {
	heroCard: {
		intro: "Hi I'm Dibesh Raj Subedi,",
		summary:
			"A dreamer, explorer, learner and enthusiast. Welcome to my journey in the tech industry. Where I learn, share, explore, and innovative things.",
		imgSrc: "/images/hero.jpg",
	},
	sourceCode: {
		title: "Get your hands dirty",
		summary: `How did I made it, learn more about project at GitHub
					Download the source code.`,
		githubUrl: "https://github.com/itSubeDibesh/Next-Portfolio",
	},
};

export const getHomepageData = (): IHomepageDetails => homepageDetails;
