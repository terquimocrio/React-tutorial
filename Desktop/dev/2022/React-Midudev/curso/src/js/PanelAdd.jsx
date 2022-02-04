import React, { useState } from "react";
import "../css/Index.css"

const Paneladd = (props) => {
  const [book, setBook] = useState({
    title: "",
    image: "",
    rating: 1,
  });

  const onChangeTittle = (e) => {
    let newBook = book;

    newBook.title = e.target.value;

    setBook(newBook);
  };

  const onChangeImage = (e) => {
    let newBook = book;

    newBook.image = e.target.value;

    setBook(newBook);
  };

  const onChangeRating = (e) => {
    let newBook = book;

    newBook.rating = parseInt(e.target.value);

    setBook(newBook);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const { title, image, rating } = book;

    props.onAdd({ title: title, image: image, rating: rating });
    props.onCancel();
  };

  return (
    <div className="new-item-panel-container">
      <div className="new-item-panel">
        <form onSubmit={onSubmit}>
          <p>
            <label>Título del libro</label>
            <br />
            <input
              type="text"
              name="title"
              className="input"
              onChange={onChangeTittle}
            />
          </p>

          <p>
            <label>Nombre de imagen</label>
            <br />
            <input
              type="text"
              name="image"
              className="input"
              onChange={onChangeImage}
            />
          </p>

          <p>
            <label>Calificación</label>
            <br />
            <select onChange={onChangeRating}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </p>
          <input
            type="submit"
            className="button btn-blue"
            value="Registrar libro"
          />
          <button className="button btn-normal" onClick={props.onCancel}>
            Cancelar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Paneladd;
