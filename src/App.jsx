import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import BlogCard from "./components/blogCard";
import FormData from "./components/FormData";

export default function App() {
  const [blogsList, setBlogsList] = useState([]);
  const [productFormData, setProductFormData] = useState({
    titolo: "",
    contenuto: "",
    immagine: "",
    tags: "",
  });

  const addProducts = () => {
    axios.get("http://localhost:3001/posts").then(function (res) {
      const blogs = res.data;
      setBlogsList(blogs);
    });
  };

  const handleDeleteList = (id) => {
    axios
      .delete(`http://localhost:3001/posts/${id}`)
      .then(function () {
        setBlogsList((currentList) =>
          currentList.filter((post) => post.id !== id)
        );
      })
      .catch((error) => {
        console.error("Error delete:", error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const tagsArray = productFormData.tags
      ? productFormData.tags.split(",").map((tag) => tag.trim())
      : [];

    const newProduct = {
      ...productFormData,
      tags: tagsArray,
    };

    axios.post("http://localhost:3001/posts", newProduct).then((res) => {
      setBlogsList([...blogsList, res.data]);
      setProductFormData({ titolo: "", contenuto: "", tags: "", immagine: "" });
    });
    console.log(productFormData);
  };

  useEffect(addProducts, []);
  console.log(FormData);

  return (
    <>
      <div className="container">
        <h1 className="title-principale">Lista blogs</h1>
        <div className="row">
          {blogsList.map((elm) => {
            return (
              <div className="col" key={elm.id}>
                <BlogCard
                  tags={elm.tags}
                  immagine={elm.immagine}
                  titolo={elm.titolo}
                  contenuto={elm.contenuto}
                  onClick={() => handleDeleteList(elm.id)}
                />
              </div>
            );
          })}
        </div>

        <div className="form-data">
          <hr />
          <h1>Aggiungi prodotto</h1>
          <FormData
            productFormData={productFormData}
            setProductFormData={setProductFormData}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    </>
  );
}
