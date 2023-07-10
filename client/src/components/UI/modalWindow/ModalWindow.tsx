import { ReactNode } from "react";
import classes from "./ModalWindow.module.css";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { allNotesSettings, setEdit, setAddNew, setShowColorButtons } from "../../../store/features/notes/notesSlice";
import { allAccountSettings, setIsModalWindowWithSettingsOpen, setIsModalWindowWithDeleteAccountFormOpen } from "../../../store/features/accountSettings/accountSettingsSlice";

interface ModalWindowProps {
  children: ReactNode;
  visible: boolean;
  setVisible?: (state: boolean) => void;
}

const ModalWindow = ({ children, visible, setVisible }: ModalWindowProps) => {
  const rootClasses = [classes.modal];
  const dispatch = useAppDispatch();
  const notesSettings = useAppSelector(allNotesSettings);
  const accountSettings = useAppSelector(allAccountSettings);

  if (visible) {
    rootClasses.push(classes.active);
  }

  const handleCloseModal = () => {
    if (setVisible) {
      setVisible(false);
    }
    if (notesSettings.isEdit) {
      dispatch(setEdit(false));
    }
    if (notesSettings.isAddNew) {
      dispatch(setAddNew(false));
    }
    if (notesSettings.showColorButtons) {
      dispatch(setShowColorButtons(false));
    }
    if(accountSettings.isModalWindowWithDeleteAccountFormOpen){
      dispatch(setIsModalWindowWithSettingsOpen(true));
      dispatch(setIsModalWindowWithDeleteAccountFormOpen(false));
    }
  };

  return (
    <div className={rootClasses.join(" ")} onClick={handleCloseModal}>
      {children}
    </div>
  );
};

export default ModalWindow;
