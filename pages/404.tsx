import { Icon } from "@iconify/react";
import { Button } from "flowbite-react";
import Head from "next/head";
import Link from "next/link";
import { MovingEye } from "../components/atoms";
import { NavBar } from "../components/organisms";

const Custom404 = () => {
	return (
		<>
			<Head>
				<title>404 | Dibesh Raj Subedi</title>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<div className="container">
					<NavBar activePage="nan" />
					<div className="m-4 flex flex-col items-center">
						<MovingEye />
						<h3 className="font-semibold text-gray-500 text-lg">
							Oops! 404 Page Not Found
						</h3>
						<div className="m-5">
							<Link href="/">
								<Button color="gray" className="m-2">
									Back to Home
									<Icon
										icon="ic:round-home"
										className="ml-2"
										width={20}
									/>
								</Button>
							</Link>
						</div>
					</div>
				</div>
			</main>
		</>
	);
};

export default Custom404;
