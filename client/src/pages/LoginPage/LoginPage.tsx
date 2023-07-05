import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { setCredential } from "../../store/features/auth/authSlice";
import { useLoginMutation } from "../../store/features/auth/authApiSlice";
import { useState } from "react";
import { allAuthSettings } from "../../store/features/auth/authSlice";
import { ILoginInputData } from "../../types/ILoginInputData";

import Loader from "../../components/UI/loader/Loader";
import LoginForm from "../../components/LoginForm/LoginForm";

const LoginPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [login, { isLoading }] = useLoginMutation();
  const [loginStatus, setLoginStatus] = useState<string | null>(null);
  const { isAuth } = useAppSelector(allAuthSettings);

  const handleLogin = async (
    inputLoginData: ILoginInputData
  ): Promise<void> => {
    try {
      const userData = await login(inputLoginData);
      if ("data" in userData) {
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
      } else {
        setLoginStatus("error");
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
