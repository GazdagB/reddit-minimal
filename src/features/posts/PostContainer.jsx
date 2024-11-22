import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Post from "../../components/Post";
import { fetchRedditPosts } from "./PostsSlice";

//TODO: Add sceleton loader to posts 

const PostContainer = () => {
  const dispatch = useDispatch();
  const { posts, status, error } = useSelector((state) => state.posts);
  const { selectedSubreddit } = useSelector((state) => state.subreddits);

  // Fetch posts whenever the selected subreddit changes
  useEffect(() => {
    if (selectedSubreddit) {
      dispatch(fetchRedditPosts());
    }
  }, [dispatch, selectedSubreddit]);

  if (status === "loading") {
    return <div>Loading posts...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex flex-col justify-center w-full mx-4 items-center">
      {posts.map((post) => (
        <Post
          key={post.id}
          title={post.title}
          image={post.imageUrl}
          profileImg={post.profileUrl}
          publicationTime={post.posted}
          commentCount={post.comments.length} // Pass the length, not the array
          userName={post.user}
          likes={post.upvotes}
          comments={post.comments} // Pass the whole comments array if needed
        />
      ))}
    </div>
  );
};

export default PostContainer;