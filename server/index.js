import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import PostRoutes from './routes/posts.js';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

//middlewares
app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

// routes
app.use('/posts', PostRoutes);
app.get('/', (req, res) => {
  res.send('Welcome to Memories App');
});

// https://www.mongodb.com/cloud/atlas
const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT || 5000;

// mongodb connection
mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((e) => console.log(e.message));
