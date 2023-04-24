import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCredential } from "../../store/features/auth/authSlice";
import { useLoginMutation } from "../../store/features/auth/authApiSlice";
import Loader from "../../components/UI/loader/Loader";
import LoginForm from "../../components/LoginForm/LoginForm";
import { useState } from "react";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login, { isLoading, error }] = useLoginMutation();
  const [loginStatus, setLoginStatus] = useState(null);
  const isAuth = useSelector(state => state.auth.isAuth);

  const handleLogin = async (email, password) => {
    try {
      const userData = await login({ email, password });

      const isUserActivated = userData.data.user.isActivated;
      if (!isUserActivated) {
        setLoginStatus("activation-required");
      } else {
        dispatch(
          setCredential({
            user: userData.data.user,
            accessToken: userData.data.accessToken,
          })
        );
        navigate("/notes");
      }
    } catch (e) {
      setLoginStatus("error");
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  if (!isAuth) {
    return <LoginForm handleLogin={handleLogin} loginStatus={loginStatus} />;
  }
};

export default LoginPage;
