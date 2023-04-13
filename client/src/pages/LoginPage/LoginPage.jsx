import { useEffect } from "react";
import classes from "./LoginPage.module.css";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import MyButton from "../../components/UI/button/MyButon";
import MyInput from "../../components/UI/input/MyInput";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../store/features/users/userSlice";

const LoginPage = () => {
  const isAuth = useSelector(state => state.auth.isAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from.pathname || "/";

  const handleLogin = async e => {
    e.preventDefault();
    dispatch(login());
  };

  useEffect(() => {
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
      <MyButton type="submit" onClick={handleLogin}>
        Login
      </MyButton>
      <p className={classes.forgot_password}>
        Don't have an account?
        <NavLink to="/registration"> Sign up</NavLink>
      </p>
    </form>
  );
};

export default LoginPage;
