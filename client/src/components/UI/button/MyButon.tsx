import { ReactNode, ButtonHTMLAttributes } from "react";
import classes from "./MyButton.module.css";

interface MyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const MyButton = ({ children, ...props }: MyButtonProps) => {
  return (
    <button {...props} className={classes.btn}>
      {children}
    </button>
  );
};

export default MyButton;
