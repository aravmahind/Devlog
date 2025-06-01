import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/Devlog', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected"))
  .catch((e) => console.log(e));

const postSchema = new mongoose.Schema({
    title: String,
    desc: String,
    post: String
});

const Post = mongoose.model('Post', postSchema);

app.get('/posts', async (req, res) => {
    const posts = await Post.find();
    res.json(posts);
});

app.post('/posts', async (req, res) => {
    const newPost = new Post({
        title: req.body.title, 
        desc: req.body.desc, 
        post: req.body.post
    });

    await newPost.save();
    res.json(newPost);
});

app.listen(5000, () => console.log('Server started on http://localhost:5000'));