import { useState } from "react";
import { NavLink } from "react-router-dom";
import classes from "../LoginForm/LoginRegestrationForm.module.css";
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButon";

const RegistrationForm = ({ handleRegistration }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registration = e => {
    e.preventDefault();
    handleRegistration(firstName, lastName, email, password);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };

  return (
    <section className={classes.login_form}>
        <h1>Create an account on Notes!</h1>
      <form className={classes.form_group}>
        <p>Fill in the following details to sign up:</p>
        <MyInput
          type="text"
          id="firstName"
          name="firstName"
          placeholder="First Name"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
          required
        />
        <MyInput
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Last Name"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
          required
        />
        <MyInput
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <MyInput
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <MyButton type="submit" onClick={registration}>
          Sign up
        </MyButton>
        <p className={classes.forgot_password}>
          Already have an account? <NavLink to="/login"> Log in</NavLink>
        </p>
      </form>
    </section>
  );
};

export default RegistrationForm;
