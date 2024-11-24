import { useDispatch, useSelector } from "react-redux"
import SubReddit from "../../components/SubReddit"
import { useEffect } from "react"
import { fetchSubreddits } from "./RedditsSlice"
import SubredditsSkeleton from "./SubredditsSkeleton"
//import { subredditsMocks } from "../../utils/mocks"
//import { selectSubreddit } from "./RedditsSlice"


const SubRedditsContainer = () => {
  const dispatch = useDispatch()
  const {subreddits,status,error} = useSelector((state)=> state.subreddits)

  useEffect(() => {
    dispatch(fetchSubreddits())
  }, [dispatch]);

  if (status === "loading") {
    return (
      <div className="w-fit shadow-md min-w-[350px] max-w-[500px] p-5 px-14 rounded-md">
        <h2 className="text-2xl font-bold mb-4">Subreddits</h2>
        {Array.from(new Array(20)).map((skeleton,id)=>{
          return (<SubredditsSkeleton key={id}/>)
        })}
      </div>
    );
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="w-fit shadow-md min-w-[350px] max-w-[500px] p-5 px-14 rounded-md">
        <h2 className="text-2xl font-bold mb-4">Subreddits</h2>
        {subreddits.map(subred => {
          return (<SubReddit subred={subred} key={subred.id} image={subred.icon} subRedditTitle={subred.subredditName}/>)
        })}
    </div>
  )
}

export default SubRedditsContainer