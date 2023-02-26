import React from "react";
import classes from "../styles/NotesForm.module.css";
import { nanoid } from "nanoid";
import MyButton from "./UI/button/MyButon";

const NoteForm = props => {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const currentData = new Date().toLocaleDateString();

  React.useEffect(() => {
    if (props.isEdit) {
      setTitle(props.currentNote.title);
      setDescription(props.currentNote.description);
    }
  }, [props.isEdit]);

  const addNote = () => {
    props.setNotes([
      {
        id: nanoid(),
        title,
        description,
        date: currentData,
        color: `${props.color}`,
      },
      ...props.notes,
    ]);
    setTitle("");
    setDescription("");
    props.setIsColor(false);
    props.setIsAddNew(false);
  };

  const updateNote = () => {
    if (props.isEdit)
      props.setNotes(prevNotes => {
        const newNotesArr = [];
        for (let i = 0; i < prevNotes.length; i++) {
          if (prevNotes[i].id === props.currentNote.id) {
            newNotesArr.unshift({
              ...prevNotes[i],
              title,
              description,
              date: currentData,
            });
          } else {
            newNotesArr.push(prevNotes[i]);
          }
        }
        return newNotesArr;
      });
    props.setIsEdit(false);
    props.setIsAddNew(false);
    props.setIsColor(false);
    setTitle("");
    setDescription("");
  };

  return (
    <form className={classes.notes__form}>
      <div
        className={classes.notes__form_group}
        style={{ backgroundColor: `${props.color}` }}
      >
        <input
          type="text"
          id="title"
          placeholder="Заголовок"
          value={title}
          maxLength="20"
          onChange={e => setTitle(e.target.value)}
        />
        <textarea
          style={{ height: "100%", width: "100%" }}
          name="description"
          placeholder="Описание"
          rows={2}
          value={description}
          onChange={e => setDescription(e.target.value)}
        ></textarea>
        {props.isEdit ? (
          <MyButton type="button" onClick={updateNote}>
            Save changes
          </MyButton>
        ) : (
          <MyButton type="button" onClick={addNote}>
            Add note
          </MyButton>
        )}
      </div>
    </form>
  );
};

export default NoteForm;
