import React, { useState } from "react";
import Search from "./Search";
import "../css/Menu.css";
import "../css/App.css";
import PanelAdd from "./PanelAdd";

const Menu = (props) => {
  const [newItemPanel, setNewItemPanel] = useState(false);

  const add = () => {
    setNewItemPanel(true);
    //console.log("click");
  };

  const onCancel = (e) => {
    //e.preventDefault();
    setNewItemPanel(false);
  };

  return (
    <div className="container">
      <div className="subcontainer">
        <div className="logo">{props.title}</div>
        <div className="search">
          <Search onSearch={props.onSearch}/>
        </div>
        <div className="actions">
          <button className="button btn-blue" onClick={add}>
            + Añadir libro
          </button>
        </div>
      </div>
      {newItemPanel ? <PanelAdd onCancel={onCancel} onAdd={props.onAdd}/> : ""}
    </div>
  );
};

export default Menu;
