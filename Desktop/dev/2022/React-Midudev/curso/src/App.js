import logo from "./logo.svg";
import Menu from "./js/Menu";
import List from "./js/List";
import React, { useState, useEffect } from "react";

function App() {
  const [books, setBooks] = useState([
    {
      id: 0,
      rating: 4,
      title: "Harry Potter y el cáliz de fuego",
      image: "libro01.jpg",
    },
    { id: 1, rating: 3, title: "The shining", image: "libro02.jpg" },
    { id: 2, rating: 5, title: "Código Da Vinci", image: "libro03.jpg" },
    { id: 3, rating: 5, title: "El principito", image: "libro04.jpg" },
    { id: 4, rating: 5, title: "Sobrenatural", image: "libro05.jpg" },
  ]);

  const [copyBooks, setCopyBooks] = useState([]);

  useEffect(() => {
    //console.log("change")
    initBooks();
  }, [books]);

  const initBooks = () => {
    setCopyBooks([...books]);
  };

  const onAdd = (item) => {
    let arr = [...books];
    const id = arr[arr.length - 1].id + 1;
    item["id"] = id;
    arr.push(item);


    setBooks([...arr]);
  };


  const onSearch = (query) => {
    if(query === ""){
      initBooks();
    }
    else{
      const arr = [...books];

      let res = [];

      arr.forEach(e => {
        if(e.title.toLowerCase().indexOf(query) > -1){
          res.push(e);
        }
      })

      setCopyBooks([...res]);
    }
  }

  const onRemove = (id) => {
    let arr = [...books];
    const res = arr.filter(item => item.id != id);

    setBooks([...res]);
    initBooks();
  }


  const onUpdateRating = item => {
    let arr = [...books];

    const index = arr.findIndex(x => x.id === item.id);

    arr[index].title = item.title;
    arr[index].image = item.image;
    arr[index].rating = item.rating;

    setBooks([...arr]);
    initBooks();
  }

  return (
    <div className="app">
      <Menu title="amozon" onAdd={onAdd} onSearch={onSearch}/>
      <List items={copyBooks} onUpdateRating={onUpdateRating} onRemove={onRemove}/>
    </div>
  );
}

export default App;
