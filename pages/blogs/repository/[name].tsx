import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { EEmoji } from "../../../components/atoms";
import { RepoDetails } from "../../../components/molecules";
import { NavBar } from "../../../components/organisms";
import { getAllRepoId, repoDetailsByName } from "../../../config";

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = await getAllRepoId();
	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
	const repoDetails = await repoDetailsByName(params.name);
	return {
		props: {
			repoDetails,
		},
	};
};

export default function RepositoryDetails({ repoDetails }: any) {
	return (
		<>
			<Head>
				<title>{repoDetails.name} | Dibesh Raj Subedi</title>
			</Head>
			<main>
				<div className="container">
					<NavBar activePage="blogs" emoji={EEmoji.MIND_BLOWING} />
					<div className="m-4 flex flex-col items-center">
						<RepoDetails repoDetails={repoDetails} />
					</div>
				</div>
			</main>
		</>
	);
}
