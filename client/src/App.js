import React, { useEffect, useState } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import memories from './images/memories.png';
import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';
import { useDispatch } from 'react-redux';
import { getPosts } from './redux/actions/posts';
import useStyles from './styles';

const App = () => {
  const [currentPostId, setCurrentPostId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentPostId, dispatch]);

  return (
    <Container maxwidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          My-Memories
        </Typography>
        <img
          className={classes.image}
          src={memories}
          alt="memories"
          height="80"
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            className={classes.mainContainer}
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts setCurrentPostId={setCurrentPostId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form
                currentPostId={currentPostId}
                setCurrentPostId={setCurrentPostId}
              />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
