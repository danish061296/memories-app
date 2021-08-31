import axios from 'axios';

const url = 'BACKEND_URL';

export const fetchPosts = () => axios.get(url);

export const createPost = (newPost) => axios.post(url, newPost);

export const updatePost = (currentId, postData) => {
  return axios.patch(`${url}/${currentId}`, postData);
};

export const deletePost = (currentId) => axios.delete(`${url}/${currentId}`);

export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
