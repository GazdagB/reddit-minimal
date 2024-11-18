/* eslint-disable react/prop-types */
import subRedditProfilePlaceholder from "../assets/images/profile_image_placeholder.png"

const SubReddit = ({image=subRedditProfilePlaceholder,subRedditTitle="SubredditRandom"}) => {
  return (
    <div className="flex items-center gap-2 p-4">
        <img className="h-8 aspect-square rounded-full" src={image} alt="subreddit-image" />
        <p>{subRedditTitle}</p>
    </div>
  )
}

export default SubReddit