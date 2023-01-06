import { Icon } from "@iconify/react";
import { Breadcrumb as BC } from "flowbite-react";
import Link from "next/link";

export const Breadcrumb = ({ name }: { name: string }) => {
	return (
		<>
			<BC aria-label="Navigation" className="mb-5">
				<BC.Item>
					<Link href="/" className="inline-flex">
						<Icon
							icon="ic:round-home"
							width={20}
							className="m-1 text-blue-500"
						/>
						<span className="mt-1 font-bold">Home</span>
					</Link>
				</BC.Item>
				<BC.Item className="cursor-pointer">
					<Link href="/blogs" className="font-bold">
						Blogs
					</Link>
				</BC.Item>
				<BC.Item className="cursor-default">Repositories</BC.Item>
				<BC.Item className="cursor-default">{name}</BC.Item>
			</BC>
		</>
	);
};
