/* eslint-disable react/prop-types */
//Image Imports 
import imagePlaceholder from '../assets/images/image_placeholder.png';
import profileImagePlaceholder from '../assets/images/profile_image_placeholder.png';

const Post = ({
  title = 'This is the title of the post',
  image = imagePlaceholder,
  profileImg = profileImagePlaceholder,
  publicationTime = "xy hours ago",
  commentCount = 0
}) => {
  return (
    <article>
      <h2>{title}</h2>
      <img src={image} alt="post-image" />
      <div className='post-footer' >
        <img src={profileImg} alt="profile image" />
        <div className='publication-time'>{publicationTime}</div>
        <div className='comment-container'>
            {/* TODO: Place Comment item here */}
            {commentCount}
        </div>
      </div>
    </article>
  );
};

export default Post;
