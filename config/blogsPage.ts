import { z } from "zod";

const AllRepos = z
	.object({
		id: z.number(),
		name: z.string(),
		fullName: z.string(),
		description: z.nullable(z.string()),
		html_url: z.string(),
		url: z.string(),
		created_at: z.string(),
	})
	.array();

export type TAllRepos = z.infer<typeof AllRepos>;

export const getAllRepositories = async (): Promise<TAllRepos | null> => {
	try {
		const githubAPI = await fetch(`${process.env.GITHUB_API}`).then(
			(resp) => resp.json()
		);
		const newDataset = [
			...githubAPI.map((items: any) => {
				return {
					id: items.id,
					name: items.name,
					fullName: items.full_name,
					description: items.description,
					html_url: items.html_url,
					url: items.url,
					created_at: items.created_at,
				};
			}),
		];
		const parsing = AllRepos.safeParse(newDataset);
		// Sort By Date Ascending
		if (parsing.success)
			return parsing.data.sort((a, b) =>
				new Date(b.created_at) > new Date(a.created_at) ? 1 : -1
			);
		return null;
	} catch (error) {
		console.error(`Error occurred: `, error);
		return null;
	}
};
