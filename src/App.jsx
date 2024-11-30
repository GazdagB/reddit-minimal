import { Provider } from "react-redux"; 
import store from "./store/store"; 
import Navbar from "./components/Navbar";
import PostContainer from "./features/posts/PostContainer";
import SubRedditsContainer from "./features/subreddits/SubRedditsContainer";

function App() {
  return (
    <Provider store={store}> {/* Wrap your components with Provider */}
      <div className="">
        <Navbar />
        <div className="app flex flex-col mdc:flex-row justify-between items-center mdc:items-start w-screen">
          <PostContainer />
          <SubRedditsContainer />
        </div>
      </div>
    </Provider>
  );
}

export default App;