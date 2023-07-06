import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState, useRef, ReactElement } from "react";
import { IRegistrationInputData } from "../../types/IRegistrationInputData";

import classes from "../LoginForm/LoginRegestrationForm.module.css";
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButon";
import ReCAPTCHA from "react-google-recaptcha";

interface RegistrationFormProps {
  handleRegistration: (inputData: IRegistrationInputData) => void;
}

const RegistrationForm = ({ handleRegistration }: RegistrationFormProps) => {
  const [reCaptchaToken, setRecaptchaToken] = useState("");
  const [showRecaptchaWarning, setShowRecaptchaWarning] = useState(false);
  const reCaptcha = useRef<ReCAPTCHA>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegistrationInputData>({ mode: "onBlur" });

  const onSubmit = (data: Omit<IRegistrationInputData, "reCaptchaToken">): void => {
    if (!reCaptchaToken) {
      setShowRecaptchaWarning(true);
      return;
    }

    const inputData = {
      ...data,
      reCaptchaToken
    };

    handleRegistration(inputData);
    reCaptcha.current?.reset();
    setRecaptchaToken("");
    setShowRecaptchaWarning(false);
  };

  const saveRecaptchaToken = (token: string | null): void => {
    if (token) setRecaptchaToken(token);
    setShowRecaptchaWarning(false);
  };

  const renderErrorMessage = (
    fieldName: keyof IRegistrationInputData,
    requiredMessage: string,
    patternMessage: string
  ): ReactElement => {
    return (
      <>
        {errors[fieldName]?.type === "required" && (
          <span>{requiredMessage}</span>
        )}
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
          placeholder="First Name"
          {...register("firstName", {
            required: true,
            pattern: /^[A-Z][a-z]+$/,
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
          placeholder="Last Name"
          {...register("lastName", {
            required: true,
            pattern: /^[A-Z][a-z]+$/,
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
          placeholder="Password"
          {...register("password", {
            required: true,
            pattern: /^.{6,}$/i,
          })}
        />
        {renderErrorMessage(
          "password",
          "This field is required",
          "Password must be at least 6 characters"
        )}
        <ReCAPTCHA
          ref={reCaptcha}
          sitekey={import.meta.env.VITE_APP_SITE_KEY}
          onChange={saveRecaptchaToken}
          onExpired={() => setRecaptchaToken("")}
        />
        {showRecaptchaWarning && (
          <p>Please complete the reCAPTCHA verification.</p>
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
