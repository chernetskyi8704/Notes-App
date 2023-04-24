import { forwardRef } from "react";
import classes from "./MyInput.module.css";

const MyInput = forwardRef((props, ref) => (
  <input className={classes.myInput} ref={ref} {...props} />
));

export default MyInput;
