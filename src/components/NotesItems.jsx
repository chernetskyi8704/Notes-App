import React from "react";
import NotesItem from "./NotesItem";

const NotesItems = () => {
  const [notes, setNotes] = React.useState([
    {
      id: 1,
      title: "Note 1",
      description: "Description 1",
      date: "2021-01-01",
      color: "red",
      data: "2021-01-01",
    },
    {
      id: 2,
      title: "Note 2",
      description: "Description 2",
      date: "2021-01-01",
      color: "green",
      data: "2021-01-01",
    },
    {
      id: 3,
      title: "Note 3",
      description: "Description 3",
      date: "2021-01-01",
      color: "blue",
      data: "2021-01-01",
    },
    {
      id: 4,
      title: "Note 4",
      description: "Description 4",
      date: "2021-01-01",
      color: "yellow",
      data: "2021-01-01",
    },
    {
      id: 5,
      title: "Note 5",
      description: "Description 5",
      date: "2021-01-01",
      color: "purple",
      data: "2021-01-01",
    },
  ]);

  return notes.map(note => (
    <NotesItem
      key={note.id}
      title={note.title}
      body={note.description}
      bodyColour={note.color}
      currentData={note.data}
    />
  ));
};

export default NotesItems;
