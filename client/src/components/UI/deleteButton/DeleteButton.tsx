import { ReactNode, ButtonHTMLAttributes } from "react";
import classes from "./DeleteButton.module.css";

interface DeleteButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const DeleteButton = ({ children, ...props }: DeleteButtonProps) => {
  return (
    <button {...props} className={classes.btn}>
      {children}
    </button>
  );
};

export default DeleteButton;
