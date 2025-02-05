import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function App() {
  axios.get("http://localhost:3001/posts").then(function (res) {
    console.log(res.data);
  });

  const [blogsList, setBlogsList] = useState([]);

  const AddProducts = () => {
    setBlogsList(res.data);
  };

  // useEffect(setBlogsList, []);

  return (
    <>
      <div className="container">
        <h1>Lista blogs</h1>
        <div className="button">
          <button className="btn" onClick={AddProducts}>
            Aggiungi
          </button>
        </div>
        <div className="row">
          {blogsList.map((elm) => {
            return (
              <div className="col">
                <div className="card">
                  <h3 className="title">{elm.titolo}</h3>
                  <div className="detaills">
                    <div className="text col-details">
                      <p>{elm.tags}</p>
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
