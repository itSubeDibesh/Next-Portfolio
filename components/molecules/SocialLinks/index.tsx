import { Icon } from "@iconify/react";
import { Card } from "flowbite-react";
import { ISocialLinks } from "../../../config";

interface ISocial {
	title: string;
	summary: string;
	socialLinks: ISocialLinks[];
}

export const SocialLinks = ({ title, socialLinks, summary }: ISocial) => {
	return title && summary && socialLinks ? (
		<>
			<Card>
				<h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
					{title}
				</h5>
				<p className="mb-2 text-base text-gray-500 dark:text-gray-400 sm:text-lg">
					{summary}
				</p>
				<ul className="space-y-2 max-h-24 overflow-y-auto scrollbar-hide">
					{socialLinks.map(({ title, icon, isPopular, url }) => {
						return (
							<li key={title}>
								<a
									href={url}
									className="group flex items-center rounded-lg bg-gray-50 p-3 text-base font-bold text-gray-900 hover:bg-gray-100 hover:shadow dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500"
								>
									<Icon icon={icon} className="h-5" />
									<span className="ml-3 flex-1 whitespace-nowrap">
										{title}
									</span>
									{isPopular && (
										<span className="ml-3 inline-flex items-center justify-center rounded bg-gray-200 px-2 py-0.5 text-xs font-medium text-gray-500 dark:bg-gray-700 dark:text-gray-400">
											Popular
										</span>
									)}
								</a>
							</li>
						);
					})}
				</ul>
			</Card>
		</>
	) : (
		<></>
	);
};
