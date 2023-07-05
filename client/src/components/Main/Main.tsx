import { useState, useEffect } from "react";
import { useAppSelector } from "../../hooks/redux";
import { allAccountSettings } from "../../store/features/accountSettings/accountSettingsSlice";
import { allAuthSettings } from "../../store/features/auth/authSlice";

import classes from "./Main.module.css";
import ModalWindow from "../UI/modalWindow/ModalWindow";
import Settings from "../Settings/Settings";
import DeleteAccountForm from "../DeleteAccountForm/DeleteAccountForm";
import AppRouter from "../routes/AppRouter";

const Main = () => {
  const accountSettings = useAppSelector(allAccountSettings);
  const { userId } = useAppSelector(allAuthSettings);
  const [modal, isModal] = useState<boolean>(false);

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
