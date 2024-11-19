import profileImage from '../assets/images/profile_image_placeholder.png';

const Comment = ({ profileUrl = profileImage, username ="Missing username", created ="Created at unknown", text="Missing Comment" }) => (
  <div className="comment flex flex-col items-start gap-3 mb-3 hover:shadow-md p-5 relative text-gray-400 rounded-md">
    <div className='flex items-center gap-3'>
      <img
        className="h-[20px] aspect-square rounded-full"
        src={profileUrl}
        alt={`${username}'s profile`}
      />
      <p className="font-bold text-primary">{username}</p>
    </div>
    <p>{text}</p>
    <p className="absolute top-4 right-4">{created}</p>
  </div>
);

export default Comment;
