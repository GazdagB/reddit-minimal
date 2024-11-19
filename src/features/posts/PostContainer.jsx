import Post from "../../components/Post"
import { postsMocks } from "../../utils/mocks"

const PostContainer = () => {
  return (
    <div className="flex flex-col justify-center w-full mx-4 items-center">
        {postsMocks.map(post => {
          return (<Post key={post.id} title={post.title} image={post.imageUrl} profileImg={post.profileUrl} publicationTime={post.posted} commentCount={post.comments} userName={post.user} likes={post.upvotes} />)
        })}
    </div>

  )
}

export default PostContainer