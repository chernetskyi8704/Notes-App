import { NavLink } from "react-router-dom";
import classes from "../LoginForm/LoginRegestrationForm.module.css";
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButon";
import { useForm } from "react-hook-form";

const RegistrationForm = ({ handleRegistration }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const onSubmit = data => {
    handleRegistration(
      data.firstName,
      data.lastName,
      data.email,
      data.password
    );
  };

  const renderErrorMessage = (fieldName, requiredMessage, patternMessage) => {
    return (
      <>
        {errors[fieldName]?.type === "required" && (<span>{requiredMessage}</span>)}
        {errors[fieldName]?.type === "pattern" && <span>{patternMessage}</span>}
      </>
    );
  };

  return (
    <section className={classes.loginRegestration_form}>
      <h1>Create an account on Notes!</h1>
      <form className={classes.form_group} onSubmit={handleSubmit(onSubmit)}>
        <p>Fill in the following details to sign up:</p>
        <MyInput
          type="text"
          id="firstName"
          name="firstName"
          placeholder="First Name"
          {...register("firstName", {
            required: true,
            pattern:  /^[A-Z][a-z]+$/,
          })}
        />
        {renderErrorMessage(
          "firstName",
          "This field is required",
          "First name must start with a capital letter and contain only letters"
        )}
        <MyInput
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Last Name"
          {...register("lastName", {
            required: true,
            pattern:  /^[A-Z][a-z]+$/,
          })}
        />
        {renderErrorMessage(
          "lastName",
          "This field is required",
          "Last name must start with a capital letter and contain only letters"
        )}
        <MyInput
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        {renderErrorMessage(
          "email",
          "This field is required",
          "Please enter a valid email address"
        )}
        <MyInput
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          {...register("password", { required: true, minLength: 6 })}
        />
        {renderErrorMessage(
          "password",
          "This field is required",
          "Password must be at least 6 characters"
        )}
        <MyButton type="submit">Sign up</MyButton>
        <p className={classes.loginRegestrationHints}>
          Already have an account? <NavLink to="/login">Log in</NavLink>
        </p>
      </form>
    </section>
  );
};

export default RegistrationForm;
