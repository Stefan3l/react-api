import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function App() {
  const [blogsList, setBlogsList] = useState([]);

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
      </div>
    </>
  );
}
