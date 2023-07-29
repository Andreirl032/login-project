import axios from "axios";

type postProps = {
  id: string;
  userId: number;
  title: string;
  body: string;
};

const getPosts = async () => {
  const response = await axios.get<postProps[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return response.data;
};
// const getDataExample = async () => {
//   const response = await axios.get("https://httpstat.us/202");
//   return response.data;
// };

export default async function Axios() {
  //   const [response1, response2] = await Promise.all([
  //     getData(),
  //     getDataExample(),
  //   ]);
  //   const response = await getData();
  //   console.log({ response1, response2 });

  const posts = await getPosts();
  console.log(posts);
  return (
    <>
      <h2>Axios</h2>

      {posts.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </>
  );
}
