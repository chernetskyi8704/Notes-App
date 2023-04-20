import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import "./styles/App.css";
import "./styles/reset.css";
import { checkAuth } from "./store/features/auth/authSlice";

const App = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector(state => state.auth.token);

  useEffect(() => {
    if (accessToken) {
      dispatch(checkAuth());
    }
  }, []);

  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
};

export default App;
