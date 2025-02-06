import React from "react";

export default function FormData({
  productFormData,
  setProductFormData,
  handleSubmit,
}) {
  return (
    <form onSubmit={handleSubmit}>
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
        required
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
        required
      />
      <input
        type="text"
        value={productFormData.tags}
        placeholder="inserisci dei tag"
        onChange={(e) =>
          setProductFormData({ ...productFormData, tags: e.target.value })
        }
        required
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
        required
      />
      <button type="submit">Invia</button>
    </form>
  );
}

{
  /* <form onSubmit={handleSumbit}>
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
        required
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
        required
      />
      <input
        type="text"
        value={productFormData.tags}
        placeholder="inserisci dei tag"
        onChange={(e) =>
          setProductFormData({ ...productFormData, tags: e.target.value })
        }
        required
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
        required
      />
      <button type="submit">Invia</button>
    </form> */
}
