import { v4 as uuidv4 } from "uuid";

const profilePic = "https://i.pravatar.cc/300"

// Subreddits mocks
export const subredditsMocks = [
  {
    id: uuidv4(),
    name: "Home",
    imageUrl: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: uuidv4(),
    name: "AskReddit",
    imageUrl: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: uuidv4(),
    name: "NoStupidQuestions",
    imageUrl: "https://i.pravatar.cc/150?img=3",
  },
  {
    id: uuidv4(),
    name: "BaldursGate3",
    imageUrl: "https://i.pravatar.cc/150?img=4",
  },
  {
    id: uuidv4(),
    name: "facepalm",
    imageUrl: "https://i.pravatar.cc/150?img=5",
  },
  {
    id: uuidv4(),
    name: "interestingasfuck",
    imageUrl: "https://i.pravatar.cc/150?img=6",
  },
  {
    id: uuidv4(),
    name: "Damnthatsinteresting",
    imageUrl: "https://i.pravatar.cc/150?img=7",
  },
  {
    id: uuidv4(),
    name: "LivestreamFail",
    imageUrl: "https://i.pravatar.cc/150?img=8",
  },
  {
    id: uuidv4(),
    name: "pics",
    imageUrl: "https://i.pravatar.cc/150?img=9",
  },
  {
    id: uuidv4(),
    name: "Palworld",
    imageUrl: "https://i.pravatar.cc/150?img=10",
  },
];

//Posts Mock
export const postsMocks = [
  {
    id: uuidv4(),
    title: "Exploring the mountains",
    imageUrl: "https://picsum.photos/200",
    profileUrl: profilePic,
    upvotes: 42,
    comments: 8,
    posted: "posted 2 hours ago",
    user: "MountainLover123",
  },
  {
    id: uuidv4(),
    title: "Delicious homemade pasta",
    imageUrl: "https://picsum.photos/200",
    profileUrl: profilePic,
    upvotes: 89,
    comments: 15,
    posted: "posted 5 hours ago",
    user: "FoodieGal",
  },
  {
    id: uuidv4(),
    title: "Sunset over the city skyline",
    imageUrl: "https://picsum.photos/200",
    profileUrl: profilePic,
    upvotes: 120,
    comments: 23,
    posted: "posted 1 day ago",
    user: "SkyWatcher",
  },
  {
    id: uuidv4(),
    title: "My latest art piece",
    imageUrl: "https://picsum.photos/200",
    profileUrl: profilePic,
    upvotes: 30,
    comments: 5,
    posted: "posted 3 hours ago",
    user: "ArtisticSoul",
  },
  {
    id: uuidv4(),
    title: "Tips for planting tomatoes",
    imageUrl: "https://picsum.photos/200",
    profileUrl: profilePic,
    upvotes: 55,
    comments: 10,
    posted: "posted 8 hours ago",
    user: "GreenThumb",
  },
];
