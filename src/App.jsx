import './App.css'
import PostContainer from './features/posts/PostContainer'
import SubRedditsContainer from './features/subreddits/SubRedditsContainer'
import Navbar from './components/Navbar'

function App() {


  return (
    <div className=''>
      <Navbar></Navbar>
      <div className='app flex justify-between items-start w-screen'>
        <PostContainer />
        <SubRedditsContainer />
      </div>
    </div>
  )
}

export default App
