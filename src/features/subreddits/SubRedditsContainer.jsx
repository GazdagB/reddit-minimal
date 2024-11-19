import SubReddit from "../../components/SubReddit"
import { subredditsMocks } from "../../utils/mocks"

const SubRedditsContainer = () => {
  return (
    <div className="w-1/4 shadow-md min-w-[300px] max-w-[450px] p-5 px-14 rounded-md">
        <h2 className="text-2xl font-bold mb-4">Subreddits</h2>
        {subredditsMocks.map(subred => {
          return (<SubReddit key={subred.id} image={subred.imageUrl} subRedditTitle={subred.name}/>)
        })}
    </div>
  )
}

export default SubRedditsContainer