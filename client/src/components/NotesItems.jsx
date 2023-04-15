import React from "react";
import NoteItem from "./NoteItem/NoteItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "../styles/animations/NotesItemsAnimations.css";
import { useSelector } from "react-redux";
import { useGetUsersNotesQuery } from "../store/features/notes/notesApiSlice";
import Loader from "./UI/loader/Loader";

const NotesItems = () => {
  const userId = useSelector(state => state.auth.userId);

  let content;

  const {
    data: notes,
    isLoading,
    isSuccess,
    isError,
  } = useGetUsersNotesQuery(userId);

  if (isLoading) {
    return <Loader />;
  } else if (isSuccess && notes.length === 0) {
    content = <p>No notes were created yet!</p>;
  } else if (isSuccess && notes.length > 0) {
    content = notes.map(note => (
      <CSSTransition timeout={500} key={note._id} classNames="note">
        <NoteItem note={note} />
      </CSSTransition>
    ));
  } else if (isError) {
    content = <p>Error loading notes!</p>;
  }

  return notes.length ? (
    <TransitionGroup component={null}>{content}</TransitionGroup>
  ) : (
    content
  );
};

export default NotesItems;
