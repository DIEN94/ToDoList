import React, { useState, FC, useRef, useEffect } from "react";
import { PostList } from "./components/PostList";
import { PostForm } from "./components/PostForm/PostForm";
import { NoTaskElement } from "./components/NoTaskElement/NoTaskElement";
import { Post } from "./type";
import { ModalProvider } from "./contexts/ModalContext/ModalContext";
import { Modals } from "./components/Modals";
import "./App.css";

function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    const idFromLocalStorage = localStorage.getItem("posts");
    setPosts(idFromLocalStorage ? JSON.parse(idFromLocalStorage) : []);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  const createPost = (newPost: Post): void => {
    setPosts((prevPosts) => [...prevPosts, newPost]);
  };

  const removePost = (id: number) => {
    setPosts((posts) => posts.filter((p: Post) => p.id !== id));
  };

  const redactorPost = (id: number, title: string, body: string) => {
    console.log(id, title, body);
    setPosts((posts) =>
      posts.map((p: Post) => {
        if (p.id === id) {
          p.title = title;
          p.body = body;
        }
        return p;
      })
    );
  };

  // }
  return (
    <div className="App">
      <ModalProvider>
        <PostForm create={createPost} />
        {posts.length !== 0 
        ? <PostList posts={posts} /> 
        : <NoTaskElement />}
        <Modals redactorPost={redactorPost} removePost={removePost}/>
      </ModalProvider>
    </div>
  );
}

export default App;
