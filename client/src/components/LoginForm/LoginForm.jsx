import { useState } from "react";
import { NavLink } from "react-router-dom";
import classes from "./LoginForm.module.css";
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButon";

const LoginForm = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = e => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  const handleSetEmail = e => setEmail(e.target.value);
  const handleSetPassword = e => setPassword(e.target.value);

  return (
    <section className={classes.login_form}>
      <h1>Welcome back to Notes!</h1>
      <form className={classes.form_group}>
        <MyInput
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleSetEmail}
          required
        />
        <MyInput
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handleSetPassword}
          required
        />
        <MyButton type="submit" onClick={login}>
          Login
        </MyButton>
        <p className={classes.forgot_password}>
          Don't have an account?
          <NavLink to="/registration"> Sign up</NavLink>
        </p>
      </form>
    </section>
  );
};

export default LoginForm;
