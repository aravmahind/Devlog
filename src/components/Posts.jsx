import { useState, useEffect } from "react"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import axios from 'axios';

function AddPost({t, d, p}) {
    return (
        <>
        <div>Title - {t}</div>
        <div>Description - {d}</div>
        <SyntaxHighlighter language="cpp" style={atomDark}>
            {p}
        </SyntaxHighlighter>
        </>
    )
}

function Posts() {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [post, setPost] = useState("");
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/posts')
        .then((res) => setPosts(...posts, res.data));
    }, []);

    function handlePost() {
        const newPost = {
            title,
            desc,
            post
        };

        axios.post('http://localhost:5000/posts', newPost)
        .then((res) => setPosts([...posts, res.data]));

        setTitle('');
        setDesc('');
        setPost('');
    }

    return (
        <>
        <div className="m-23">
            <input type="text" className="w-full border-1 p-1 m-1" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter the Title..." required></input><br></br>
            <input type="text" className="w-full border-1 p-1 m-1" value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="Enter the Description..."></input><br></br>
            <textarea rows={8} className="w-full border-1 p-1 m-1 resize-none" value={post} onChange={(e) => setPost(e.target.value)} placeholder="Post here..." required></textarea><br></br>
            <button className="border-1 p-3 m-1 bg-emerald-700 text-white" disabled={!title || !post} onClick={handlePost}>Post</button>
        </div>

        {posts.length > 0 && ( 
            posts.map((p, i) => (
            <div key={i} className="m-23">
                <div>Post - {i+1}</div>
                    <AddPost t={p.title} d={p.desc} p={p.post}/>
                <br></br>
            </div>
            )
        ))}
        </>
    )
}

export default Posts;