import React, { useState, useEffect } from "react";
import "../css/Item.css";

const Item = (props) => {
  //console.log(props)

  const [itemRating, setItemRating] = useState({
    title: "",
    image: "",
    rating: 1,
    stars: [],
  });

  useEffect(() => {
    setItemRating({
      ...props,
      stars: Array(parseInt(props.rating)).fill(0),
    });

    //console.log({...itemRating, stars: Array(parseInt(props.rating)).fill(0) })
  }, []);

  const onChangeRating = (e) => {
    const rating = parseInt(e.target.value);

    setItemRating({
      ...itemRating,
      stars: Array(parseInt(e.target.value)).fill(0),
      rating: rating,
    });

    props.onUpdateRating({ ...itemRating });
  };

  const onRemove = () => {
    props.onRemove(props.id);
  }

  return (
    <div className="item">
      <div className="image">
        <img src={"img/" + itemRating.image} width="100%" />
      </div>
      <div className="title">{itemRating.title}</div>
      <div className="rating">
        <p>
          {itemRating.stars.map((el) => (
            <img src="img/star.png" width="32" />
          ))}
        </p>
        Calificación:
        <select value={itemRating.rating} onChange={onChangeRating}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <div className="actions">
        <button onClick={onRemove}>Eliminar</button>
      </div>
    </div>
  );
};

export default Item;
