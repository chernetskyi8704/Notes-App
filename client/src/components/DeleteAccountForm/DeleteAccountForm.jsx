import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useDeleteAccountMutation } from "../../store/features/accountSettings/accountSetingsApiSlice";
import { useForm } from "react-hook-form";
import classes from "./DeleteAccountForm.module.css";
import DeleteButton from "../UI/deleteButton/deleteButton";
import MyInput from "../UI/input/MyInput";
import { logOut } from "../../store/features/auth/authSlice";
import {
  allAccountSettings,
  setIsModalWindowWithSettingsOpen,
  setIsModalWindowWithDeleteAccountFormOpen,
} from "../../store/features/accountSettings/accountSettingsSlice";

const DeleteAccountForm = ({ userId }) => {
  const dispatch = useDispatch();
  const TEXT_TO_CONFIRM_ACCOUNT_DELETION = "delete my account";
  const {
    register,
    handleSubmit,
    formState: { isValid: isFormValid },
    reset,
  } = useForm();

  const [deleteAccount] = useDeleteAccountMutation();
  const [deleteAccountError, setDeleteAcountError] = useState("");
  const { isModalWindowWithDeleteAccountFormOpen } = useSelector(allAccountSettings);

  useEffect(() => {
    if (!isModalWindowWithDeleteAccountFormOpen) {
      reset();
    }
  }, [isModalWindowWithDeleteAccountFormOpen]);

  const handleDeleteAccount = async ({ password }, e) => {
    e.preventDefault();
    try {
      await deleteAccount({ password, userId }).unwrap();
      dispatch(logOut());
      dispatch(setIsModalWindowWithSettingsOpen(false));
      dispatch(setIsModalWindowWithDeleteAccountFormOpen(false));
      reset();
    } catch (error) {
      setDeleteAcountError(error.data?.message);
      reset();
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handleDeleteAccount)}
      onClick={e => e.stopPropagation()}
    >
      <div className={classes.modalContent}>
        <h3>Are you sure you want to do this? </h3>
        <div className={classes.container}>
          <label htmlFor="verificationInput">
            To verify type
            <span className={classes.italicText}>
              {" "}
              {TEXT_TO_CONFIRM_ACCOUNT_DELETION}{" "}
            </span>
            below:
          </label>
          <MyInput
            type="text"
            id="confirmationText"
            name="confirmationText"
            {...register("confirmationText", {
              required: true,
              validate: value =>
                value === TEXT_TO_CONFIRM_ACCOUNT_DELETION ||
                "Invalid confirmation text",
            })}
          />
        </div>
        <div className={classes.container}>
          <label htmlFor="passwordInput">Confirm your password:</label>
          <MyInput
            type="password"
            id="passwordInput"
            name="password"
            {...register("password", {
              required: true,
            })}
          />
          <p className={classes.errorMessage}> {deleteAccountError}</p>
        </div>
        <DeleteButton type="submit" disabled={!isFormValid}>
          Delete your account
        </DeleteButton>
      </div>
    </form>
  );
};

export default DeleteAccountForm;
