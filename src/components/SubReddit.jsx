/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import subRedditProfilePlaceholder from "../assets/images/profile_image_placeholder.png";
import { selectSubreddit } from "../features/subreddits/RedditsSlice";
import { useState, useEffect } from "react";

const SubReddit = ({
  image = subRedditProfilePlaceholder,
  subRedditTitle = "SubredditRandom",
  subred,
}) => {
  const dispatch = useDispatch();
  const { selectedSubreddit } = useSelector((state) => state.subreddits);
  const [isSelected, setIsSelected] = useState(false);

  // Update `isSelected` when `selectedSubreddit` changes
  useEffect(() => { 
    setIsSelected(selectedSubreddit.subredditName === subRedditTitle);
  }, [selectedSubreddit, subRedditTitle]);

  const handleClick = () => {
    dispatch(selectSubreddit(subred));
    console.log("selectSubreddit dispatched");
  };

  return (
    <div
      onClick={handleClick}
      className={`flex items-center gap-2 p-4 cursor-pointer ${
        isSelected ? "bg-blue-100 border-l-4 border-blue-500" : ""
      }`}
    >
      <img
        className="h-8 aspect-square rounded-full"
        src={image}
        alt="subreddit-image"
      />
      <p className="font-bold">{subRedditTitle}</p>
    </div>
  );
};

export default SubReddit;
