import React from "react";
import classes from "./Login.module.css";
import { AuthContext } from "../../context/AuthContext";
import { NavLink } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import MyButton from "../../components/UI/button/MyButon";
import MyInput from "../../components/UI/input/MyInput";

const Login = () => {
  const { isAuth, setIsAuth } = React.useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from.pathname || "/";

  const login = e => {
    e.preventDefault();
    setIsAuth(!isAuth);
  };

  React.useEffect(() => {
    if (isAuth) {
      navigate(from);
    }
  }, [isAuth]);

  return (
    <form className={classes.login_form}>
      <h1>Welcome back to Notes!</h1>
      <div className={classes.form_group}>
        <MyInput type="text" placeholder="Phone number or email" />
      </div>
      <div className={classes.form_group}>
        <MyInput type="password" placeholder="Password" />
      </div>
      <MyButton type="submit" onClick={login}>
        Login
      </MyButton>
      <div className={classes.forgot_password}>
        <NavLink to="/login">Forgot your password?</NavLink>
      </div>
    </form>
  );
};

export default Login;
