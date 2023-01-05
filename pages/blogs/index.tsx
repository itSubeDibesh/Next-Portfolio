import Head from "next/head";
import { EEmoji } from "../../components/atoms";
import { GitHubTimeline } from "../../components/molecules";
import { NavBar } from "../../components/organisms";
import { getAllRepositories } from "../../config/blogsPage";

export default function Blogs() {
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
						{/* <div>
							<GitHubTimeline />
						</div> */}
						<div>
							<GitHubTimeline />
						</div>
					</div>
				</div>
			</main>
		</>
	);
}

export const getStaticProps = async () => {
	//  My Info
	const githubAPI = await getAllRepositories();
	// console.log(githubAPI);

	// log(githubAPI);

	return {
		props: {},
	};
};
