import './App.css'
import PostContainer from './features/posts/PostContainer'
import SubRedditsContainer from './features/subreddits/SubRedditsContainer'

function App() {


  return (
    <div className='app flex justify-center items-start w-screenn'>
      <PostContainer />
      <SubRedditsContainer />
    </div>
  )
}

export default App
