import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PostList = () => {
  const baseAPI = import.meta.env.VITE_BASE_API_URL;
  const [posts, setPosts] = useState(null);

  const fetchApi = () => {
    axios
      .get(`${baseAPI}/posts`)
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(`errore nel caricamento `, err);
      });
  };

  useEffect(fetchApi, []);

  return (
    <>
      <div className="container my-5">
        <h1 className="text-center">Lista dei post</h1>
        <div className="row mt-5">
          {posts?.map((post) => (
            <div key={post?.id} className="col-12 my-4 col-md-4">
              <div className="card h-100">
                <img
                  className="my-3 ps-3 pe-3"
                  src={post?.image}
                  alt={post?.title}
                />
                <h4 className="my-3 ps-3 pe-3">{post?.title}</h4>
                <Link
                  className="btn btn-lg btn-warning mt-3"
                  to={`/posts/dettaglio-post/${post?.id}`}
                >
                  Visualizza
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PostList;
