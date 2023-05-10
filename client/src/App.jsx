import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRefreshMutation } from "./store/features/auth/authApiSlice";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import "./styles/App.css";
import "./styles/reset.css";

const App = () => {
  const [refresh] = useRefreshMutation();
  const accessToken = useSelector(state => state.auth.token);

  useEffect(() => {
    if (accessToken) {
      refresh();
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
