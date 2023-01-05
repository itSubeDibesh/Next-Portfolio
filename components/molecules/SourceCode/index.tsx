import { Icon } from "@iconify/react";
import { Card } from "flowbite-react";

interface ISourceCode {
	title: string;
	summary: string;
	githubUrl: string;
}

export const SourceCode = ({ title, summary, githubUrl }: ISourceCode) => {
	return title && summary && githubUrl ? (
		<>
			<Card>
				<h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
					{title}
				</h5>
				<p className="mb-5 text-base text-gray-500 dark:text-gray-400 sm:text-lg">
					{summary}
				</p>
				<div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
					<a
						href={githubUrl}
						target="_blank"
						className="inline-flex w-full items-center justify-center rounded-lg bg-gray-800 px-4 py-2.5 text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 sm:w-auto"
						rel="noreferrer"
					>
						<Icon
							icon="bxl:github"
							color="white"
							className="mr-3 h-7 w-7"
						/>
						<div className="text-left">
							<div className="mb-1 text-xs">Download on</div>
							<div className="-mt-1 font-sans text-sm font-semibold text-center">
								GitHub
							</div>
						</div>
					</a>
				</div>
			</Card>
		</>
	) : (
		<></>
	);
};
