import { useEffect } from "react";
import classes from "./Login.module.css";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import MyButton from "../../components/UI/button/MyButon";
import MyInput from "../../components/UI/input/MyInput";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../store/reducers/UserSlice";

const Login = () => {
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
      <div className={classes.forgot_password}>
        <NavLink to="/login">Forgot your password?</NavLink>
      </div>
    </form>
  );
};

export default Login;
