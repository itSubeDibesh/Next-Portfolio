import { Icon } from "@iconify/react";
import { Button, Card } from "flowbite-react";
import moment from "moment";
import Link from "next/link";
import { TRepoIncites } from "../../../config";
import { bytesToSize } from "../../../utils";
import { Breadcrumb } from "../../atoms";

interface IRepoDetails {
	repoDetails: TRepoIncites;
}

export const RepoDetails = ({ repoDetails }: IRepoDetails) => {
	return (
		<>
			<Breadcrumb name={repoDetails.name} />
			<div>
				<Card horizontal={true} imgSrc="/images/OctaCat.png">
					<p className="text-xs text-end text-gray-700 -mb-10">
						{moment(repoDetails.created_at).format(
							"MMMM Do YYYY, h:mm:ss a"
						)}
					</p>
					<h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
						{repoDetails.name}
					</h3>
					<h5 className="text-gray-700 font-semibold text-md border-b-2 pb-2 -mt-2 ">
						{repoDetails.fullName}
					</h5>
					<p className="text-gray-500 text-xs -mt-12 text-end mb-2">
						{repoDetails.language}
					</p>
					<div>
						<p className="font-normal text-gray-700 dark:text-gray-400 indent-5">
							{repoDetails.description}
						</p>
						<div className="mt-4"></div>
					</div>
					<div className="flex flex-col items-center">
						<Link href={repoDetails.html_url}>
							<Button color="gray" className="m-2">
								Get source code {bytesToSize(repoDetails.size)}
								<Icon
									icon="vscode-icons:folder-type-github"
									className="ml-2"
									width={20}
								/>
							</Button>
						</Link>
					</div>
				</Card>
			</div>
		</>
	);
};
