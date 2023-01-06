import Head from "next/head";
import { EEmoji } from "../../components/atoms";
import { GitHubTimeline, MediumBlogs } from "../../components/molecules";
import { NavBar } from "../../components/organisms";
import { blogDetails, getAllRepositories } from "../../config";

export default function Blogs({ timeline, blogs }: any) {
	return (
		<>
			<Head>
				<title>Blogs | Dibesh Raj Subedi </title>
				<meta
					name="description"
					content="A simple portfolio website with in-memory database"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<div className="container">
					<NavBar activePage="blogs" emoji={EEmoji.MIND_BLOWING} />

					<div className="grid m-4 md:grid-cols-2 gap-4">
						<div>
							<MediumBlogs blogs={blogs} />
						</div>
						<div>
							<GitHubTimeline timeline={timeline} />
						</div>
					</div>
				</div>
			</main>
		</>
	);
}

export const getStaticProps = async () => {
	const timeline = await getAllRepositories();
	const blogs = blogDetails();
	return {
		props: {
			timeline,
			blogs,
		},
	};
};
