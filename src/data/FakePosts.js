import post1 from "../seed/images/houses/1.1.jpeg";
import post2 from "../seed/images/houses/1.2.jpeg";
import post3 from "../seed/images/houses/1.3.jpeg";

const fakePosts = [
  {
    id: "1",
    img: post1,
    location: ["Paris", "France"],
    dates: ["3 July", "28 July"],
    rating: 4.8,
  },

  {
    id: "2",
    img: post2,
    location: ["Barcelona", "Spain"],
    dates: ["10 August", "25 August"],
    rating: 4.5,
  },
  {
    id: "3",
    img: post3,
    location: ["New York", "US"],
    dates: ["5 September", "20 September"],
    rating: 4.9,
  },
];

const dp = fakePosts.concat(fakePosts);

export { fakePosts, dp as duplicatePosts };
