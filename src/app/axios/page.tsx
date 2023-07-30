"use client";
import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";

type postProps = {
  id: string;
  userId: number;
  title: string;
  body: string;
};

axios.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err instanceof AxiosError) {
      if (err.response?.status === 500) {
        console.error(err);
        throw new Error("Server error!");
      }
      if (err.response?.status === 401) {
        console.error(err);
        throw new Error("Unauthenticated!");
      }
      if (err.response?.status === 404) {
        console.error(err);
        throw new Error("Error: not found");
      }
      console.error(err);
      return Promise.reject(err);
    }
    console.error(err);
  }
);

const getPosts = async () => {
  const response = await axios.get<postProps[]>(
    "https://jsonplaceholder.typicode.com/posts/500"
  );
  return response?.data;
};
const createPost = async (data: {
  title: string;
  body: string;
  userId: number;
}) => {
  const response = await axios.post(
    "https://jsonplaceholder.typicode.com/posts",
    data
  );
  return response.data;
};

export default function Axios() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [posts, setPosts] = useState<postProps[] | undefined>();

  useEffect(() => {
    getPosts()
      .then((posts) => {
        setPosts(posts);
        setError("");
      })
      .catch((err) => {
        setPosts(undefined);
        setError(err.message);
        console.warn(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (error) {
    return (
      <>
        <h2>Axios</h2>

        <h1>{error}</h1>
      </>
    );
  }

  return (
    <>
      <h2>Axios</h2>

      {posts?.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </>
  );
}
