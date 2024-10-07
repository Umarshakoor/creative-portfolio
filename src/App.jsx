import { useState, useEffect } from "react";
// import ReactDOM from "react-dom/client";
import "./App.css";
// import Website from "./Pages/Website";
import AddPost from "./components/addPost";
import Post from "./components/Post";
function App() {
  const [posts, setPosts] = useState([]);
  console.log(posts);
  console.log(posts);
  const fetchPosts = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=4"
    );
    const data = await response.json();
    console.log(data);
    setPosts(data);
    // console.log(posts);
  };

  useEffect(() => {
    fetchPosts();
  }, []);
  const addPost = async (title, body) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        body,
        userId: Math.random().toString(36).slice(2),
      }),
      headers: {
        "content-type": "application/json; charset=UTF-8",
      },
    });

    const data = await response.json();
    // setPosts([...posts, data]);
    console.log(posts);
    setPosts((prevPosts) => [data, ...prevPosts]);
  };

  const deletePost = async (id) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        method: "DELETE",
      }
    );
    if (response.status === 200) {
      setPosts(
        posts.filter((post) => {
          return post.id !== id;
        })
      );
    }
  };
  return (
    <>
      {/* <Website /> */}
      <main>
        <h1>consuming Rest Api with Axios and fetch</h1>
        <AddPost addPost={addPost} />
        <section className="post-container">
          <h2>Posts</h2>
          {posts.map(({ id, title, body }) => (
            <Post
              key={id}
              id={id}
              title={title}
              body={body}
              deletePost={deletePost}
            />
          ))}
        </section>
      </main>
    </>
  );
}

export default App;
