/* eslint-disable react/prop-types */
//Image Imports
import imagePlaceholder from '../assets/images/image_placeholder.png';
import profileImagePlaceholder from '../assets/images/profile_image_placeholder.png';
import Comment from './Comment';
import { createUpvoteString } from '../utils/postsUtils';
import { useState } from 'react';

//Icon Imports
import { LiaCommentsSolid } from 'react-icons/lia';
import { FaArrowDown } from 'react-icons/fa';
import { FaArrowUp } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { toggleComments } from '../features/posts/PostsSlice';
import { fetchCommentsForPost } from '../features/posts/PostsSlice';

//TODO: Create comments in the posts slice + In the mocks

const Post = ({
    title = 'This is the title of the post',
    id,
    image = imagePlaceholder,
    profileImg = profileImagePlaceholder,
    publicationTime = 'xy hours ago',
    commentCount = 0,
    userName = 'User',
    likes = 0,
  }) => {

    const dispatch = useDispatch();
    const commentsOpened = useSelector((state) =>
      state.posts.posts.find((post) => post.id === id)?.commentsOpened
    );

    const commentsForPost = useSelector((state)=> 
    state.posts.posts.find((post)=>post.id ===id).comments
    )

    const [isUpvoted, setIsUpvoted] = useState("")
    
    function handleUpVote(){
      setIsUpvoted("upVote")
    }

    function handleDownVote(){
      setIsUpvoted("downVote")
    }

    function handleToggleComments() {
      const post = commentsOpened;
      if (!post) {
        // Fetch comments if they are not already opened
        dispatch(fetchCommentsForPost(id)).then(() => {
          dispatch(toggleComments(id));
        });
      } else {
        // If comments are already opened, just toggle
        dispatch(toggleComments(id));
      }
    }
    
    
    
    return (
      <article className="max-w-[900px] w-full p-5 shadow-lg rounded-md flex relative ps-24">
        {/* Vote Container */}
        <div className="absolute top-12 left-6 text-gray-400 font-bold flex flex-col gap-2 items-center justify-center">
          <FaArrowUp onClick={handleUpVote} className={`cursor-pointer ${isUpvoted === "upVote" ? "text-orange-700" : ""}`} />
          {createUpvoteString(likes)}
          <FaArrowDown onClick={handleDownVote} className={`cursor-pointer  ${isUpvoted === "downVote" ? "text-orange-700" : ""}`}/>
        </div>


        <div className="post w-full">
          <h2 className="font-bold text-xl mb-3">{title}</h2>
          {image && <img className="w-full" src={image} alt="post-image" />}
          <div className="h-[1.5px] w-full bg-gray-200 my-5"></div>
          <div className="post-footer flex justify-between w-full mb-6">
            <div className="flex items-center gap-2">
              <img
                className="h-[20px] aspect-square rounded-full"
                src={profileImg}
                alt="profile image"
              />
              <p className="font-bold text-primary">{userName}</p>
            </div>
            <div className="publication-time text-gray-400">{publicationTime}</div>
            <div onClick={handleToggleComments} className="comment-container flex gap-2 items-center cursor-pointer">
              <LiaCommentsSolid className="text-xl text-gray-500" />
              {commentCount}
            </div>
          </div>
          <div className="comments">
            {commentsOpened && commentsForPost.map((comment, index) => (
              <Comment
                key={comment.id}
                id={id}
                profileUrl={comment.profileUrl}
                username={comment.author}
                created={comment.createdAt}
                text={comment.body_html}
              />
            ))}
          </div>
        </div>
      </article>
    );
  };
  

export default Post;
