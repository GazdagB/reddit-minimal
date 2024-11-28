import { Skeleton } from '@mui/material';


const CommentsSkeleton = ({ size }) => {
  // Create an array of a given size, filled with undefined (or any dummy value)
  const array = Array.from({ length: size });

  return (
    <div>
      {array.map((_, key) => (
        <div
          key={key}
          className="comment flex flex-col items-start gap-3 mb-3 hover:shadow-md p-5 relative text-gray-400 rounded-md"
        >
          <div className="flex items-center gap-3">
            <Skeleton variant="circular" width={40} height={40} />
            <Skeleton variant="text" width={100} />
          </div>
          <div className='w-full'>
            <Skeleton variant="text" width="100%" />
            <Skeleton variant="text" width="100%" />
            <Skeleton variant="text" width="60%" />
          </div>
          <Skeleton className='absolute top-4 right-4' variant="text" width={100} />
        </div>
      ))}
    </div>
  );
};

export default CommentsSkeleton;
