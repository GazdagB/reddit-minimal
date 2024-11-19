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
    comments: [
      {
        profileUrl: "https://picsum.photos/50",
        username: "AdventureSeeker99",
        created: "1 hour ago",
        text: "Looks absolutely breathtaking! Where exactly was this?",
      },
      {
        profileUrl: "https://picsum.photos/50",
        username: "TrailBlazer",
        created: "30 minutes ago",
        text: "Wow, I need to visit this place! Great shot.",
      },
    ],
    posted: "posted 2 hours ago",
    user: "MountainLover123",
  },
  {
    id: uuidv4(),
    title: "Delicious homemade pasta",
    imageUrl: "https://picsum.photos/200",
    profileUrl: profilePic,
    upvotes: 89,
    comments: [
      {
        profileUrl: "https://picsum.photos/50",
        username: "PastaLover",
        created: "2 hours ago",
        text: "That looks mouth-watering! Can you share the recipe?",
      },
      {
        profileUrl: "https://picsum.photos/50",
        username: "FoodieFanatic",
        created: "1 hour ago",
        text: "I’m drooling over this! Homemade pasta is the best.",
      },
    ],
    posted: "posted 5 hours ago",
    user: "FoodieGal",
  },
  {
    id: uuidv4(),
    title: "Sunset over the city skyline",
    imageUrl: "https://picsum.photos/200",
    profileUrl: profilePic,
    upvotes: 120,
    comments: [
      {
        profileUrl: "https://picsum.photos/50",
        username: "SunsetLover",
        created: "3 hours ago",
        text: "This is stunning! The colors are incredible.",
      },
      {
        profileUrl: "https://picsum.photos/50",
        username: "CityExplorer",
        created: "2 hours ago",
        text: "What a view! Makes me want to explore the city even more.",
      },
    ],
    posted: "posted 1 day ago",
    user: "SkyWatcher",
  },
  {
    id: uuidv4(),
    title: "My latest art piece",
    imageUrl: "https://picsum.photos/200",
    profileUrl: profilePic,
    upvotes: 30,
    comments: [
      {
        profileUrl: "https://picsum.photos/50",
        username: "ArtEnthusiast",
        created: "2 hours ago",
        text: "This is amazing! I love the colors and the emotion in it.",
      },
      {
        profileUrl: "https://picsum.photos/50",
        username: "CreativeMind",
        created: "1 hour ago",
        text: "Such a beautiful piece of art! Keep creating.",
      },
    ],
    posted: "posted 3 hours ago",
    user: "ArtisticSoul",
  },
  {
    id: uuidv4(),
    title: "Tips for planting tomatoes",
    imageUrl: "https://picsum.photos/200",
    profileUrl: profilePic,
    upvotes: 55,
    comments: [
      {
        profileUrl: "https://picsum.photos/50",
        username: "GardenGuru",
        created: "4 hours ago",
        text: "Great tips! I’ll try these out in my garden.",
      },
      {
        profileUrl: "https://picsum.photos/50",
        username: "PlantLover",
        created: "3 hours ago",
        text: "Thanks for the advice! My tomatoes have been struggling.",
      },
    ],
    posted: "posted 8 hours ago",
    user: "GreenThumb",
  },
];
