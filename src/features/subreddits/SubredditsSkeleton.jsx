import { Skeleton } from '@mui/material'
import React from 'react'

const SubredditsSkeleton = () => {
  return (
    <div
      className={`flex items-center gap-2 p-4 cursor-pointer`}>
      <Skeleton variant='circular' width={32} height={32}></Skeleton>
      <Skeleton variant='text' width={150}></Skeleton>
    </div>
  )
}

export default SubredditsSkeleton