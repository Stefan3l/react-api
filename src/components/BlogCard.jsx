import React from "react";

export default function BlogCard(elm) {
  return (
    <div className="card">
      <button className="btn" onClick={elm.onClick}>
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
  );
}

//  chiama la funzione
// onClick={() => elm.onClick()}
