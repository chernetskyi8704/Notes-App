import { forwardRef, InputHTMLAttributes, Ref } from "react";
import classes from "./MyInput.module.css";

interface MyInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const MyInput = forwardRef(
  (props: MyInputProps, ref: Ref<HTMLInputElement>) => (
    <input className={classes.myInput} ref={ref} {...props} />
  )
);

export default MyInput;
