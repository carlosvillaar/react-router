import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const initialFormData = {
    title: "",
    content: "",
    image: "",
    tags: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const baseAPI = import.meta.env.VITE_BASE_API_URL;
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleAddPost = (e) => {
    e.preventDefault();

    const arrayTags = formData.tags.split(",").map((tag) => tag.trim());
    const newPost = { ...formData, tags: arrayTags };

    axios.post(`${baseAPI}/posts`, newPost).then((res) => {
      setFormData(initialFormData);
      navigate("/posts");
    });
  };
  return (
    <>
      <h1 className="my-5 text-center">Nuovo Post</h1>
      <div className="container my-5">
        <div className="card">
          <div className="card-body">
            <div className="card-title my-2 mb-4">
              <h2>Aggungi un nuovo post</h2>
            </div>
            <form action="" onSubmit={handleAddPost}>
              <div className="mb-3">
                <label htmlFor="name">Titolo del post</label>
                <input
                  id="title"
                  type="text"
                  name="title"
                  className="form-control"
                  placeholder="Titolo"
                  value={formData.title}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="image">URL immagine</label>
                <input
                  id="image"
                  type="text"
                  name="image"
                  className="form-control"
                  placeholder="URL dell'immagine"
                  value={formData.image}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="content">Descrizione</label>
                <textarea
                  id="content"
                  name="content"
                  class="form-control"
                  placeholder="Descrivi la tua ricetta"
                  rows="3"
                  value={formData.content}
                  onChange={handleInputChange}
                ></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="tags">Tags (separati da virgola)</label>
                <input
                  id="tags"
                  type="text"
                  name="tags"
                  className="form-control"
                  value={formData.tags}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <button
                  className="btn btn-primary"
                  type="submit"
                  onClick={handleAddPost}
                >
                  Aggiungi Post
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatePost;
