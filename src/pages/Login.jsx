import React from "react";
import classes from "../styles/Login.module.css";
import { AuthContext } from "../context/AuthContext";
import { NavLink } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";

const Login = () => {
  const { isAuth, setIsAuth } = React.useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from.pathname || "/";

  const login = e => {
    e.preventDefault();
    setIsAuth(!isAuth);
    localStorage.setItem("auth", "true");
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
        <input
          type="text"
          className={classes.form_control}
          placeholder="Phone number or email"
        />
      </div>
      <div className={classes.form_group}>
        <input
          type="password"
          className={classes.form_control}
          placeholder="Password"
        />
      </div>
      <button type="submit" onClick={login} className={classes.btn}>
        Login
      </button>
      <div className={classes.forgot_password}>
        <NavLink to="/login">Forgot your password?</NavLink>
      </div>
    </form>
  );
};

export default Login;
