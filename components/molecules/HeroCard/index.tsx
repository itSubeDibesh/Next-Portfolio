import { Card } from "flowbite-react";

interface IHeroCard {
	intro: string;
	summary: string;
	imgSrc: string;
}

export const HeroCard = ({ intro, summary, imgSrc }: IHeroCard) => {
	return intro && summary && imgSrc ? (
		<>
			<div className="max-w-xl">
				<Card horizontal={true} imgSrc={imgSrc}>
					<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
						{intro}
					</h5>
					<p className="font-normal text-gray-700 dark:text-gray-400">
						{summary}
					</p>
				</Card>
			</div>
		</>
	) : (
		<></>
	);
};
