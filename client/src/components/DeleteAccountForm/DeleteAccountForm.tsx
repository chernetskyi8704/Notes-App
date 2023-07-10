import { useState, useEffect, MouseEvent, memo } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { useDeleteAccountMutation } from "../../store/features/accountSettings/accountSetingsApiSlice";
import { useForm } from "react-hook-form";
import { logOut } from "../../store/features/auth/authSlice";
import {
  allAccountSettings,
  setIsModalWindowWithSettingsOpen,
  setIsModalWindowWithDeleteAccountFormOpen,
} from "../../store/features/accountSettings/accountSettingsSlice";
import { IUser } from "../../types/IUser";
import { isApiResponse } from "../../utils/apiErrorUtils";

import classes from "./DeleteAccountForm.module.css";
import DeleteButton from "../UI/deleteButton/DeleteButton";
import MyInput from "../UI/input/MyInput";

interface IDeleteAccountFormProps {
  userId: IUser["id"] | null;
}

interface IDeleteAccountInputData {
  confirmationText: string;
  password: string;
}

const DeleteAccountForm = memo(({ userId }: IDeleteAccountFormProps) => {
  const dispatch = useAppDispatch();
  const TEXT_TO_CONFIRM_ACCOUNT_DELETION = "delete my account";

  const {
    register,
    handleSubmit,
    formState: { isValid: isFormValid },
    reset,
  } = useForm<IDeleteAccountInputData>();

  const [deleteAccount] = useDeleteAccountMutation();
  const [deleteAccountError, setDeleteAcountError] = useState<string>("");
  const { isModalWindowWithDeleteAccountFormOpen } =
    useAppSelector(allAccountSettings);

  useEffect(() => {
    if (!isModalWindowWithDeleteAccountFormOpen) {
      reset();
    }
  }, [isModalWindowWithDeleteAccountFormOpen]);

  const handleDeleteAccount = async ({
    password,
  }: Partial<IDeleteAccountInputData>) => {
    try {
      await deleteAccount({ password, userId }).unwrap();
      dispatch(logOut());
      dispatch(setIsModalWindowWithSettingsOpen(false));
      dispatch(setIsModalWindowWithDeleteAccountFormOpen(false));
      reset();
    } catch (error) {
      if (isApiResponse(error)) {
        setDeleteAcountError(error.data.message);
        reset();
      } else {
        alert("Unknown error!");
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handleDeleteAccount)}
      onClick={(e: MouseEvent<HTMLFormElement>): void => e.stopPropagation()}
    >
      <div className={classes.modalContent}>
        <h3>Are you sure you want to do this? </h3>
        <div className={classes.container}>
          <label htmlFor="verificationInput">
            To verify type
            <span className={classes.italicText}>
              {TEXT_TO_CONFIRM_ACCOUNT_DELETION}
            </span>
            below:
          </label>
          <MyInput
            type="text"
            id="confirmationText"
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
});

export default DeleteAccountForm;
