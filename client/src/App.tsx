import { useEffect } from "react";
import { useAppSelector } from "./hooks/redux";
import { useRefreshMutation } from "./store/features/auth/authApiSlice";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import { allAuthSettings } from "./store/features/auth/authSlice";
import "./styles/App.css";
import "./styles/reset.css";

const App = () => {
  const [refresh] = useRefreshMutation();
  const { token, isAuth } = useAppSelector(allAuthSettings);

  useEffect(() => {
    if (token) {
      refresh();
    }
  }, []);

  return (
    <div className="App">
      {isAuth && <Header />}
      <Main />
    </div>
  );
};

export default App;
