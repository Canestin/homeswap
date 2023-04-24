import posts from "../images/posts/";

const fakePosts = [
	{
		id: "1",
		img: posts[0],
		location: ["Paris", "France"],
		dates: ["3 July", "28 July"],
		rating: 4.8,
	},

	{
		id: "2",
		img: posts[1],
		location: ["Barcelona", "Spain"],
		dates: ["10 August", "25 August"],
		rating: 4.5,
	},
	{
		id: "3",
		img: posts[2],
		location: ["New York City", "United States"],
		dates: ["5 September", "20 September"],
		rating: 4.9,
	},
	{
		id: "4",
		img: posts[3],
		location: ["Tokyo", "Japan"],
		dates: ["8 October", "23 October"],
		rating: 4.7,
	},
	{
		id: "5",
		img: posts[4],
		location: ["Sydney", "Australia"],
		dates: ["12 November", "27 November"],
		rating: 4.6,
	},
	{
		id: "6",
		img: posts[5],
		location: ["London", "United Kingdom"],
		dates: ["1 December", "16 December"],
		rating: 4.8,
	},
	{
		id: "7",
		img: posts[6],
		location: ["Bangkok", "Thailand"],
		dates: ["20 January", "4 February"],
		rating: 4.5,
	},
	{
		id: "6",
		img: posts[7],
		location: ["New Delhi", "Inde"],
		dates: ["22 April", "14 May"],
		rating: 4.9,
	},
	{
		id: "9",
		img: posts[8],
		location: ["Cape Town", "South Africa"],
		dates: ["10 April", "25 April"],
		rating: 4.7,
	},
	{
		id: "10",
		img: posts[9],
		location: ["Libreville", "Gabon"],
		dates: ["13 April", "5 May"],
		rating: 4.7,
	},
	{
		id: "11",
		img: posts[10],
		location: ["Lagos", "Nigeria"],
		dates: ["18 April", "8 May"],
		rating: 4.9,
	},
	{
		id: "12",
		img: posts[11],
		location: ["Rio de Janeiro", "Brazil"],
		dates: ["15 March", "30 March"],
		rating: 4.5,
	},
];

let dp = fakePosts.concat(fakePosts);

export { fakePosts, dp as duplicatePosts };
