import classes from "./Settings.module.css";
import DeleteButton from "../UI/deleteButton/DeleteButton";
import {
  setIsModalWindowWithSettingsOpen,
  setIsModalWindowWithDeleteAccountFormOpen,
} from "../../store/features/accountSettings/accountSettingsSlice";
import { useDispatch } from "react-redux";

const Settings = () => {
  const dispatch = useDispatch();
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
};

export default Settings;
