import { z } from "zod";
import { backupDataset } from "./backup";

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

const RepoIncites = z.object({
	language: z.string(),
	id: z.number(),
	name: z.string(),
	fullName: z.nullable(z.string()),
	description: z.nullable(z.string()),
	default_branch: z.nullable(z.string()),
	size: z.number(),
	html_url: z.string(),
	created_at: z.string(),
	updated_at: z.string(),
	pushed_at: z.string(),
	git_url: z.string(),
	ssh_url: z.string(),
	clone_url: z.string(),
	svn_url: z.string(),
	visibility: z.string(),
	open_issues: z.number(),
	watchers: z.number(),
	subscribers_count: z.number(),
});

export type TAllRepos = z.infer<typeof AllRepos>;
export type TRepoIncites = z.infer<typeof RepoIncites>;

export const getAllRepositories = async (): Promise<TAllRepos | null> => {
	try {
		const githubAPI = backupDataset;
		// const githubAPI = await fetch(
		// 	`${process.env.GITHUB_API}/users/${process.env.GITHUB_USER}/repos`
		// ).then((resp) => resp.json());
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

export const repoDetailsByName = async (name: string) => {
	try {
		const githubAPI = await fetch(
			`${process.env.GITHUB_API}/repos/${
				process.env.GITHUB_USER
			}/${name.toLowerCase()}`
		).then((resp) => resp.json());
		const newDataset: TRepoIncites = {
			id: githubAPI.id,
			name: githubAPI.name,
			description: githubAPI.description,
			html_url: githubAPI.html_url,
			created_at: githubAPI.created_at,
			fullName: githubAPI.full_name,
			language: githubAPI.language,
			default_branch: githubAPI.default_branch,
			size: githubAPI.size,
			updated_at: githubAPI.updated_at,
			pushed_at: githubAPI.pushed_at,
			git_url: githubAPI.git_url,
			ssh_url: githubAPI.ssh_url,
			clone_url: githubAPI.clone_url,
			svn_url: githubAPI.svn_url,
			visibility: githubAPI.visibility,
			open_issues: githubAPI.open_issues,
			watchers: githubAPI.watchers,
			subscribers_count: githubAPI.subscribers_count,
		};
		const parsing = RepoIncites.safeParse(newDataset);
		if (parsing.success) return parsing.data;
		return null;
	} catch (error) {
		console.error(`Error occurred: `, error);
		return null;
	}
};

export const getAllRepoId = async () => {
	try {
		const details = await getAllRepositories();
		if (!details) throw new Error("No Details Found");
		return [
			...details.map((item) => {
				return {
					params: {
						name: item.name,
					},
				};
			}),
		];
	} catch (err) {
		console.log("Error:", err);
		return [];
	}
};

export type TBlogDetails = {
	title: string;
	summary: string;
	publishedDate: string;
	url: string;
};

export const blogDetails = (): TBlogDetails[] => {
	return [
		{
			title: "Why do conditionals matter in ReactJs == vs ===?",
			summary:
				"At core of ReactJs conditionals play a significant role in determining the whole application's behaviour. But first, let's understand what...",
			publishedDate: "Aug 26, 2022",
			url: "https://medium.com/seriea-pub/why-do-conditionals-matter-in-reactjs-vs-e92525410e0f",
		},
		{
			title: "Things to consider as a web developer",
			summary:
				"If you are willing to start your career as a web developer, you might be hustling with several blogs, articles, and videos. This article...",
			publishedDate: "Jul 30, 2022",
			url: "https://medium.com/seriea-pub/things-to-consider-as-a-web-developer-e43c0903ba7",
		},
	];
};
