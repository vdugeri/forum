import healthIcon from "../../assets/icons/doctor.png";
import politicsIcon from "../../assets/icons/candidates.png";
import economyIcon from "../../assets/icons/euro.png";

export default [
  {
    name: "General Health",
    posts: [
      { author: { image: healthIcon, username: "verem" } },
      { author: { image: healthIcon, username: "verem" } }
    ],
    icon: healthIcon
  },
  {
    name: "Politics",
    icon: politicsIcon,
    posts: [{ author: { image: healthIcon, username: "verem" } }]
  },
  {
    name: "Economy",
    icon: economyIcon,
    posts: [{ author: { image: healthIcon, username: "verem" } }]
  }
];
