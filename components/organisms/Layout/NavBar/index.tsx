import { Navbar as NB } from "flowbite-react";
import Link from "next/link";
import { navigationList } from "../../../../config";
import { ucFirst } from "../../../../utils";
import { EEmoji, Emoji } from "../../../atoms";
import styles from "./navbar.module.css";

interface INavBar {
	activePage: "home" | "blogs" | "nan";
	emoji?: EEmoji;
}

export const NavBar = ({
	activePage = "nan",
	emoji = EEmoji.HAPPY,
}: INavBar) => {
	return (
		<NB>
			<NB.Brand>
				<Emoji emoji={emoji} width={100} height={100} />
				<span className="self-center whitespace-nowrap text-3xl font-bold dark:text-white">
					Dibesh Raj Subedi
				</span>
			</NB.Brand>
			<NB.Toggle />
			<NB.Collapse>
				{navigationList.map((page) => {
					return (
						<Link
							key={page.pageName}
							href={page.url}
							className={`${
								activePage === page.pageName
									? styles.active
									: styles.default
							}`}
						>
							<span>{ucFirst(page.pageName)}</span>
						</Link>
					);
				})}
			</NB.Collapse>
		</NB>
	);
};
