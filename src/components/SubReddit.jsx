/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux"
import subRedditProfilePlaceholder from "../assets/images/profile_image_placeholder.png"
import { selectSubreddit } from "../features/subreddits/RedditsSlice";

const SubReddit = ({image=subRedditProfilePlaceholder,subRedditTitle="SubredditRandom",subred}) => {
  const dispatch = useDispatch();

  const handleClick = ()=>{
    dispatch(selectSubreddit(subred))
  }
  return (
    <div onClick={handleClick} className="flex items-center gap-2 p-4">
        <img className="h-8 aspect-square rounded-full" src={image} alt="subreddit-image" />
        <p className="font-bold">{subRedditTitle}</p>
    </div>
  )
}

export default SubReddit