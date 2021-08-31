import PostMessage from '../models/postMessage.js';
import mongoose from 'mongoose';

export const getPosts = async (req, res) => {
  try {
    const postsMessages = await PostMessage.find();
    res.status(200).json(postsMessages);
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
};

export const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new PostMessage(post);

  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (e) {
    res.status(409).json({ message: e.message });
  }
};

export const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;

  // check if id exists
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send('No post with that id exists');

  //if id exists, update the post
  const updatedPost = await PostMessage.findByIdAndUpdate(
    _id,
    { ...post, _id },
    {
      new: true,
    }
  );

  res.json(updatedPost);
};

export const deletePost = async (req, res) => {
  const { id } = req.params;

  // check if id exists
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send('No post with that id exists');

  await PostMessage.findByIdAndRemove(id);

  res.json({ message: 'Post was deleted successfully!' });
};

export const likePost = async (req, res) => {
  const { id } = req.params;

  // check if id exists
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send('No post with that id exists');

  const post = await PostMessage.findById(id);
  const updatedPost = await PostMessage.findByIdAndUpdate(
    id,
    { likeCount: post.likeCount + 1 },
    { new: true }
  );

  res.json(updatedPost);
};
