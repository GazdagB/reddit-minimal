import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Post from "../../components/Post";
import { fetchRedditPosts } from "./PostsSlice";
import PostSkeleton from "./PostSkeleton";
import { selectFilteredPosts } from "./PostsSlice";

const PostContainer = () => {
  const dispatch = useDispatch();
  const { posts,status, error } = useSelector((state) => state.posts);
  const { selectedSubreddit } = useSelector((state) => state.subreddits);
  const filteredPosts = useSelector(selectFilteredPosts);
  
  // Fetch posts whenever the selected subreddit changes
  useEffect(() => {
    if (selectedSubreddit) {
      dispatch(fetchRedditPosts());
    }
  }, [dispatch, selectedSubreddit]);

  if (status === "loading") {
    return (<div className="flex flex-col justify-center w-full mx-4 items-center">
      {/* Render skeleton placeholders */}
      {Array.from(new Array(5)).map((postSkeleton,id) => {
        return (<PostSkeleton key={id}/>)
      })}
    </div>)
  }

  if (status === "failed") {
    // TODO: Design an Error Message Component
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex flex-col justify-center w-full mx-4 items-center">
     
      {filteredPosts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          title={post.title}
          image={post.imageUrl}
          profileImg={post.profileUrl}
          publicationTime={post.posted}
          commentCount={post.num_comments} // Pass the length, not the array
          userName={post.user}
          likes={post.upvotes}
          comments={post.comments} // Pass the whole comments array if needed
        />
      ))}
    </div>
  );
};

export default PostContainer;