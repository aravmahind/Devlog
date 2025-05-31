import { useState } from "react"

function AddPost({t, d, p}) {
    return (
        <>
        <div>Title - {t}</div>
        <div>Description - {d}</div>
        <pre className="bg-gray-300">
            <code>{p}</code>
        </pre>
        </>
    )
}

function Posts() {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [post, setPost] = useState("");
    const [posts, setPosts] = useState([]);

    function handlePost() {
        const newPost = {
            title,
            desc,
            post
        };

        setPosts([...posts, newPost]);
        setTitle('');
        setDesc('');
        setPost('');
    }

    return (
        <>
        <div className="m-10">
            <input type="text" className="w-full" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter the Title..." required></input><br></br>
            <input type="text" className="w-full" value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="Enter the Description..."></input><br></br>
            <textarea rows={8} className="w-full" value={post} onChange={(e) => setPost(e.target.value)} placeholder="Post here..." required></textarea><br></br>
            <button className="border-2" disabled={!title || !post} onClick={handlePost}>Post</button>
        </div>

        {posts.length > 0 && ( 
            posts.map((p, i) => (
            <div key={i} className="m-10">
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