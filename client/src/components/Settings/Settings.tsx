import {memo} from "react";
import { setIsModalWindowWithSettingsOpen, setIsModalWindowWithDeleteAccountFormOpen } from "../../store/features/accountSettings/accountSettingsSlice";
import { useAppDispatch } from "../../hooks/redux";

import classes from "./Settings.module.css";
import DeleteButton from "../UI/deleteButton/DeleteButton";

const Settings = memo(() => {
  const dispatch = useAppDispatch();
  const openDeleteAccountVerefication = () => {
    dispatch(setIsModalWindowWithDeleteAccountFormOpen(true));
    dispatch(setIsModalWindowWithSettingsOpen(false));
  };

  const closeModalWindow = () => {
    dispatch(setIsModalWindowWithSettingsOpen(false));
  };

  return (
    <div className={classes.modalContent}>
      <h2>Delete account </h2>
      <p>
        Once you delete your account, there is no going back. Please be certain.
      </p>
      <DeleteButton
        className={classes.deleteButton}
        onClick={openDeleteAccountVerefication}
      >
        Delete your account
      </DeleteButton>
      <button className={classes.closeButton} onClick={closeModalWindow}>
        <i className="fas fa-times"></i>
      </button>
    </div>
  );
});

export default Settings;
