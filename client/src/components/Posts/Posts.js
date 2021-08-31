import React from 'react';
import Post from './Post/Post';
import useStyles from './styles';
import { useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';
import SkeletonPost from '../../skeletons/SkeletonPost';

const Posts = ({ setCurrentPostId }) => {
  const classes = useStyles();
  const posts = useSelector((state) => state.posts);

  const SkeletonLoading = () => {
    return [1, 2, 3, 4].map((p) => (
      <Grid key={p} item xs={12} sm={6}>
        <SkeletonPost key={p} />
      </Grid>
    ));
  };

  return (
    <>
      {posts.length ? (
        <Grid
          className={classes.container}
          container
          alignItems="stretch"
          spacing={3}
        >
          {posts.map((post, idx) => (
            <Grid key={post._id} item xs={12} sm={6}>
              <Post post={post} setCurrentPostId={setCurrentPostId} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Grid
          className={classes.container}
          container
          alignItems="stretch"
          spacing={3}
        >
          <SkeletonLoading />
        </Grid>
      )}
    </>
  );
};

export default Posts;
