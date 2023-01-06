import { Icon } from "@iconify/react";
import { Button, Card, Timeline } from "flowbite-react";
import { TBlogDetails } from "../../../config";

interface IBlogs {
	blogs: TBlogDetails[];
}

export const MediumBlogs = ({ blogs }: IBlogs) => {
	return blogs ? (
		<>
			<Card>
				<h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
					Blogs at medium
				</h5>
				<Timeline className="m-5 max-h-80 overflow-y-auto scrollbar-hide">
					{blogs.map(({ title, summary, url, publishedDate }) => {
						return (
							<Timeline.Item key={title}>
								<Timeline.Point>
									<span className="inline-flex">
										<Icon icon="uim:calender" width={30} />
										<Timeline.Time className="m-2">
											{publishedDate}
										</Timeline.Time>
									</span>
								</Timeline.Point>
								<Timeline.Content>
									<Timeline.Title className="inline-flex">
										<Icon
											icon="ant-design:medium-square-filled"
											width={25}
											className="mr-2"
										/>
										{title}
									</Timeline.Title>
									<Timeline.Body>{summary}</Timeline.Body>
									<div className="inline-flex">
										<a
											href={url}
											target="_blank"
											rel="noreferrer"
										>
											<Button
												color="gray"
												className="m-2"
											>
												View Details
												<Icon
													icon="ph:article-medium-bold"
													className="ml-2"
													width={20}
												/>
											</Button>
										</a>
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
