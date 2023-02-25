import React from "react";
import classes from "../styles/NotesItem.module.css";

const NotesItem = props => {
  return (
    <div
      className={classes.note__item}
      style={{
        backgroundColor: `${props.bodyColour}`,
      }}
    >
      <h3>{props.title}</h3>
      <p
        style={{
          color: "red",
          fontSize: "20px",
          fontWeight: "bold",
          whiteSpace: "pre-wrap",
        }}
      >
        {props.body}
      </p>
      <small>{props.currentData}</small>
      <button type="button">Delete</button>
      <button type="button">Edit</button>
    </div>
  );
};

export default NotesItem;
