import React from 'react';
import { Skeleton } from '@mui/material';
import { LiaCommentsSolid } from 'react-icons/lia';
import { FaArrowDown } from 'react-icons/fa';
import { FaArrowUp } from 'react-icons/fa';

const PostSkeleton = () => {
  return (
    <div className="max-w-[900px] w-full p-5 shadow-lg rounded-md flex relative ps-16">
      {/* Upvote Section */}
      <div className="absolute top-12 left-6 text-gray-400 font-bold flex flex-col gap-2 cursor-pointer items-center justify-center">
        <FaArrowUp />
        <Skeleton animation="pulse" variant="text" width="100%" height={40} />
        <FaArrowDown />
      </div>

      <div className="post w-full">
        <Skeleton width="100%" height={80} variant="text" />
        <Skeleton variant="rectengular" height={700} width="100%" />
        <div className="h-[1.5px] w-full bg-gray-200 my-5"></div>

        {/* Post Footer */}
        <div className="post-footer px-5 flex justify-between w-full mb-6">
          <div className="flex items-center gap-2">
            <Skeleton width={20} height={20} variant="circular" />
            <Skeleton width={100} variant="text" />
          </div>
          <Skeleton width="30%" variant="text" />
          <div className="comment-container flex gap-2 items-center cursor-pointer">
            <LiaCommentsSolid className="text-xl text-gray-500" />
            <Skeleton width="100%" variant="text" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostSkeleton;
