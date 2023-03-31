import React from "react";
import MainContent from "./components/MainContent";
import Navigation from "./components/UI/navigation/Navigation";
import { AuthContext } from "./context/AuthContext";
import "./styles/App.css";
import "./styles/reset.css";

const App = () => {
  const [openedNote, setOpenedNote] = React.useState(null);

  return (
    <AuthContext.Provider value={{ openedNote, setOpenedNote }}>
      <div className="App">
        <Navigation />
        <MainContent />
      </div>
    </AuthContext.Provider>
  );
};

export default App;
