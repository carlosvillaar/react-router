import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const PostDetails = () => {
  const { id } = useParams();
  const baseAPI = import.meta.env.VITE_BASE_API_URL;
  const [posts, setPosts] = useState(null);
  const navigate = useNavigate();

  const fetchApi = () => {
    axios
      .get(`${baseAPI}/posts/${id}`)
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log("Errore nel caricamento dei post", err);
      });
  };

  const handleDeletePizza = () => {
    axios
      .delete(`${baseAPI}/posts/${id}`)
      .then((res) => {
        // torno all'elenco
        navigate("/posts");
      })
      .catch((error) => {
        console.error("Errore ", error);
      });
  };

  useEffect(fetchApi, []);
  return (
    <>
      <div className="container d-flex justify-content-center">
        <div className="card h-50 w-50">
          <img
            className="my-3 ps-3 pe-3"
            src={posts?.image}
            alt={posts?.title}
          />
          <h4 className="my-3 ps-3 pe-3">{posts?.title}</h4>
          <p className="my-3 ps-3 pe-3">{posts?.content}</p>
        </div>
      </div>
      <div className="container d-flex justify-content-center my-5 gap-5">
        <button className="btn btn-lg btn-warning" onClick={() => navigate(-1)}>
          Torna indietro
        </button>
        <button className="btn btn-lg btn-danger" onClick={handleDeletePizza}>
          Elimina Post
        </button>
      </div>
    </>
  );
};

export default PostDetails;
