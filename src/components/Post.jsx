/* eslint-disable react/prop-types */
//Image Imports
import imagePlaceholder from '../assets/images/image_placeholder.png';
import profileImagePlaceholder from '../assets/images/profile_image_placeholder.png';

//Icon Imports
import { LiaCommentsSolid } from "react-icons/lia";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";


const Post = ({
  title = 'This is the title of the post',
  image = imagePlaceholder,
  profileImg = profileImagePlaceholder,
  publicationTime = 'xy hours ago',
  commentCount = 0,
  userName = 'User',
  likes = 0
}) => {
  return (
    <article className="max-w-[700px] w-full p-5 shadow-lg rounded-md flex relative ps-16">

        {/* Vote Container */}
        <div className="absolute top-12 left-6 text-gray-400 font-bold flex flex-col gap-2 cursor-pointer items-center justify-center">
            <FaArrowUp />
            {likes}
            <FaArrowDown />
        </div>
      <div className="post w-full">
            
                {/* Post Title */}
                <h2 className="font-bold text-xl mb-3">{title}</h2>
          
                {/*Post Image or Video  */}
                <img className="w-full" src={image} alt="post-image" />
          
                {/* Divider */}
                <div className="h-[1.5px] w-full bg-gray-200 my-5"></div>
          
                {/* Post Footer */}
                <div className="post-footer flex justify-between w-full">
          <div className="flex items-center gap-2">
            <img
              className="h-[20px] aspect-square rounded-full "
              src={profileImg}
              alt="profile image"
            />
            <p className="font-bold text-primary">{userName}</p>
          </div>
          <div className="publication-time text-gray-400">{publicationTime}</div>
          <div className="comment-container flex gap-2 items-center">
            <LiaCommentsSolid className='text-xl text-gray-500'/>
            {commentCount}
          </div>
                </div>
      </div>
    </article>
  );
};

export default Post;
