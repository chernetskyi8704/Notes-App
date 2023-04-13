import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCredential } from "../../store/features/auth/authSlice";
import { useLoginMutation } from "../../store/features/auth/authApiSlice";
import Loader from "../../components/UI/loader/Loader";
import LoginForm from "../../components/LoginForm/LoginForm";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login, { isLoading }] = useLoginMutation();
  const isAuth = useSelector(state => state.auth.isAuth);

  const handleLogin = async (email, password) => {
    try {
      const userData = await login({ email, password });

      const isUserActivated = userData.data.user.isActivated;
      if (!isUserActivated) {
        alert(
          "Thank you for registering on our website! In order to log in to your account, you need to activate it first through your email."
        );
      } else {
        dispatch(
          setCredential({
            user: userData.data.user,
            accessToken: userData.data.accessToken,
          })
        );
        navigate("/notes");
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  if (!isAuth) {
    return <LoginForm handleLogin={handleLogin} />;
  }
};

export default LoginPage;
