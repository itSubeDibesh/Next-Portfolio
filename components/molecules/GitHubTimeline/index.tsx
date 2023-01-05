import { Icon } from "@iconify/react";
import { Button, Card, Timeline } from "flowbite-react";

export const GitHubTimeline = () => {
	return (
		<>
			<Card>
				<h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
					Public Repository
				</h5>
				<Timeline className="m-5 max-h-100 overflow-y-auto scrollbar-hide">
					<Timeline.Item>
						<Timeline.Point>
							<span className="inline-flex">
								<Icon icon="uim:calender" width={30} />
								<Timeline.Time className="m-2">
									February 2022
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
								Application UI code in Tailwind CSS
							</Timeline.Title>
							<Timeline.Body>
								Get access to over 20+ pages including a
								dashboard layout, charts, kanban board,
								calendar, and pre-order E-commerce & Marketing
								pages.
							</Timeline.Body>
							<div className="inline-flex">
								<Button color="gray" className="m-2">
									Get source code
									<Icon
										icon="vscode-icons:folder-type-github"
										className="ml-2"
										width={20}
									/>
								</Button>
								<Button color="gray" className="m-2">
									View Details
									<Icon
										icon="vscode-icons:folder-type-github-opened"
										className="ml-2"
										width={20}
									/>
								</Button>
							</div>
						</Timeline.Content>
					</Timeline.Item>
				</Timeline>
			</Card>
		</>
	);
};
