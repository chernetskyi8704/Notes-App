import { useState, useEffect } from "react";
import AppRouter from "../routes/AppRouter";
import classes from "./Main.module.css";
import ModalWindow from "../UI/modalWindow/ModalWindow";
import Settings from "../Settings/Settings";
import { useSelector } from "react-redux";
import DeleteAccountForm from "../DeleteAccountForm/DeleteAccountForm";
import { allAccountSettings } from "../../store/features/accountSettings/accountSettingsSlice";

const Main = () => {
  const accountSettings = useSelector(allAccountSettings);
  const userId = useSelector(state => state.auth.userId);
  const [modal, isModal] = useState(false);

  useEffect(() => {
    accountSettings.isModalWindowWithDeleteAccountFormOpen
      ? isModal(true)
      : isModal(false);
  }, [accountSettings.isModalWindowWithDeleteAccountFormOpen]);

  return (
    <main className={classes.mainContent}>
      <AppRouter />
      <ModalWindow
        visible={accountSettings.isModalWindowWithSettingsOpen}
        setVisible={isModal}
      >
        <Settings />
      </ModalWindow>
      <ModalWindow visible={modal} setVisible={isModal}>
        <DeleteAccountForm userId={userId} />
      </ModalWindow>
    </main>
  );
};

export default Main;
