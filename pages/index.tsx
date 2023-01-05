import Head from "next/head";
import { HeroCard, SourceCode } from "../components/molecules";
import { NavBar } from "../components/organisms";
import { getHomepageData } from "../config";

export default function Home({ pageDetails }: any) {
	return (
		<>
			<Head>
				<title>Dibesh Raj Subedi</title>
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
					<NavBar activePage="home" />
					<div className="m-4 flex flex-col items-center">
						<HeroCard {...pageDetails.heroCard} />
					</div>
					<div className="grid m-4 md:grid-cols-2 gap-4">
						{/* <div><SocialLinks /></div> */}
						<div>
							<SourceCode {...pageDetails.sourceCode} />
						</div>
					</div>
				</div>
			</main>
		</>
	);
}

export async function getStaticProps() {
	const pageDetails = getHomepageData();
	return {
		props: {
			pageDetails,
		},
	};
}
