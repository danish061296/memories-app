import React from 'react';
import Shimmer from './Shimmer';
import SkeletonElements from './SkeletonElements';

const SkeletonPost = () => {
  return (
    <div className="skeleton-wrapper">
      <div className="skeleton-post">
        <SkeletonElements type="creator" />
        <SkeletonElements type="time" />
        <SkeletonElements type="tags" />

        <SkeletonElements type="title" />
        <SkeletonElements type="text" />
        <SkeletonElements type="button" />
      </div>
      <Shimmer />
    </div>
  );
};

export default SkeletonPost;
