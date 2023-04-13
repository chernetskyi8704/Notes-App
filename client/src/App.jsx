import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainContent from "./components/MainContent";
import Navigation from "./components/UI/navigation/Navigation";
import "./styles/App.css";
import "./styles/reset.css";
import { refreshAuth } from "./store/features/auth/authSlice";

const App = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector(state => state.auth.token);

  useEffect(() => {
    if (accessToken) {
      dispatch(refreshAuth());
    }
  }, []);

  return (
    <div className="App">
      <Navigation />
      <MainContent />
    </div>
  );
};

export default App;
