import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

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

  const handleSumbit = (e) => {
    e.preventDefault();

    const tagsArray = productFormData.tags
      ? productFormData.tags.split(",").map((tag) => tag.trim())
      : [];
    const newProduct = {
      ...productFormData,
      id: blogsList[blogsList.length - 1].id + 1,
      tags: tagsArray,
    };
    axios.post("http://localhost:3001/posts", newProduct).then((res) => {
      setBlogsList([...blogsList, res.data]);
      setProductFormData({ titolo: "", contenuto: "", tags: "", immagine: "" });
    });
    console.log(productFormData);
  };

  useEffect(addProducts, []);

  return (
    <>
      <div className="container">
        <h1>Lista blogs</h1>

        <div className="button"></div>
        <div className="row">
          {blogsList.map((elm) => {
            return (
              <div className="col" key={elm.id}>
                <div className="card">
                  <button
                    className="btn"
                    onClick={() => handleDeleteList(elm.id)}
                  >
                    x
                  </button>
                  <h3 className="title">{elm.titolo}</h3>
                  <div className="detaills">
                    <div className="text col-details">
                      <ul>
                        {elm.tags.map((tag, index) => {
                          return <li key={index}>{tag}</li>;
                        })}
                      </ul>
                    </div>
                    <div className="image col-details">
                      <img src={elm.immagine} alt={elm.titolo} />
                    </div>
                  </div>
                  <p>{elm.contenuto}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="form-data">
          <hr />
          <h1>Aggiungi prodotto</h1>
          <form onSubmit={handleSumbit}>
            <input
              type="text"
              value={productFormData.titolo}
              placeholder="inserisci il nome"
              onChange={(e) =>
                setProductFormData({
                  ...productFormData,
                  titolo: e.target.value,
                })
              }
            />
            <input
              type="text"
              value={productFormData.contenuto}
              placeholder="inserisci il contenuto"
              onChange={(e) =>
                setProductFormData({
                  ...productFormData,
                  contenuto: e.target.value,
                })
              }
            />
            <input
              type="text"
              value={productFormData.tags}
              placeholder="inserisci dei tag"
              onChange={(e) =>
                setProductFormData({ ...productFormData, tags: e.target.value })
              }
            />
            <input
              type="text"
              value={productFormData.immagine}
              placeholder="inserisci l'url"
              alt=""
              onChange={(e) =>
                setProductFormData({
                  ...productFormData,
                  immagine: e.target.value,
                })
              }
            />
            <button type="submit">Invia</button>
          </form>
        </div>
      </div>
    </>
  );
}
