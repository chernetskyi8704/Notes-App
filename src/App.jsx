import React from "react";
import MainContent from "./components/MainContent";
import AppRouter from "./components/routes/AppRouter";
import Navigation from "./components/UI/navigation/Navigation";
import { AuthContext } from "./context/AuthContext";
import "./styles/App.css";
import "./styles/reset.css";

const App = () => {
  const [isAuth, setIsAuth] = React.useState(false);

  React.useEffect(() => {
    if (localStorage.getItem("auth")) {
      setIsAuth(true);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      <div className="App">
        <Navigation />
        <MainContent />
      </div>
    </AuthContext.Provider>
  );
};

export default App;
