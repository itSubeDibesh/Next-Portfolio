import { Icon } from "@iconify/react";
import { Button, Card, Timeline } from "flowbite-react";
import moment from "moment";
import Link from "next/link";
import { TAllRepos } from "../../../config";

interface IGitHubTimeline {
	timeline: TAllRepos | null;
}

const navigate = (url: string) => {
	const a = document.createElement("a");
	a.href = url;
	a.target = "_blank";
	a.click();
	a.remove();
};

export const GitHubTimeline = ({ timeline }: IGitHubTimeline) => {
	return timeline ? (
		<>
			<Card>
				<h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
					Public Repository
				</h5>
				<Timeline className="m-5 max-h-80 overflow-y-auto scrollbar-hide">
					{timeline.map(({ id, created_at, name, html_url }) => {
						return (
							<Timeline.Item key={id}>
								<Timeline.Point>
									<span className="inline-flex">
										<Icon icon="uim:calender" width={30} />
										<Timeline.Time className="m-2">
											{moment(created_at).format(
												"dddd, MMMM Do YYYY, h:mm:ss a"
											)}
										</Timeline.Time>
									</span>
								</Timeline.Point>
								<Timeline.Content>
									<Timeline.Title className="inline-flex">
										<Icon
											icon="logos:github-icon"
											width={25}
											className="mr-2"
										/>
										{name}
									</Timeline.Title>
									<div className="inline-flex">
										<Button
											color="gray"
											className="m-2"
											onClick={() => {
												navigate(html_url);
											}}
										>
											Get source code
											<Icon
												icon="vscode-icons:folder-type-github"
												className="ml-2"
												width={20}
											/>
										</Button>
										<Link
											href={`/blogs/repository/${name}`}
										>
											<Button
												color="gray"
												className="m-2"
											>
												View Details
												<Icon
													icon="vscode-icons:folder-type-github-opened"
													className="ml-2"
													width={20}
												/>
											</Button>
										</Link>
									</div>
								</Timeline.Content>
							</Timeline.Item>
						);
					})}
				</Timeline>
			</Card>
		</>
	) : (
		<></>
	);
};
