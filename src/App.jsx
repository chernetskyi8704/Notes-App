import React from "react";
import AppRouter from "./components/AppRouter";
import Navigation from "./components/UI/navigation/Navigation";
import { AuthContext } from "./context/AuthContext";
import "./styles/App.css";

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
        <main className="mainContent">
          <AppRouter />
        </main>
      </div>
    </AuthContext.Provider>
  );
};

export default App;
