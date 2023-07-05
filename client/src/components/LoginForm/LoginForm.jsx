import { NavLink } from "react-router-dom";
import classes from "./LoginRegestrationForm.module.css";
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButon";
import { useForm } from "react-hook-form";

const LoginForm = ({ handleLogin, loginStatus }) => {
  const ACTIVATION_REQUIRED_ERROR_MESSAGE = (
    <p className={`${classes.loginRegestrationHints} ${classes.error}`}>
      Thank you for registering on our website! In order to log in to your
      account, you need to activate it first through your email.
    </p>
  );
  const FAILED_LOGIN_ERROR_MESSAGE = (
    <p className={`${classes.loginRegestrationHints} ${classes.error}`}>
      Login failed. Please check your email and password and try again.
    </p>
  );
  const NO_ACCOUNT_MESSAGE = (
    <p className={classes.loginRegestrationHints}>
      Don't have an account?
      <NavLink to="/registration"> Sign up</NavLink>
    </p>
  );

  const { register, handleSubmit, reset } = useForm();

  const login = data => {
    handleLogin({ email: data.email, password: data.password });
    reset();
  };

  return (
    <section className={classes.loginRegestration_form}>
      <h1>Welcome back to Notes!</h1>
      <form className={classes.form_group} onSubmit={handleSubmit(login)}>
        <MyInput
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          {...register("email", { required: true })}
        />
        <MyInput
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          {...register("password", { required: true })}
        />
        <MyButton type="submit">Login</MyButton>
        {loginStatus === "activation-required" &&
          ACTIVATION_REQUIRED_ERROR_MESSAGE}
        {loginStatus === "error" && FAILED_LOGIN_ERROR_MESSAGE}
        {NO_ACCOUNT_MESSAGE}
      </form>
    </section>
  );
};

export default LoginForm;
