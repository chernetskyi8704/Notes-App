import React from "react";
import MainContent from "./components/MainContent";
import Navigation from "./components/UI/navigation/Navigation";
import "./styles/App.css";
import "./styles/reset.css";

const App = () => {
  return (
      <div className="App">
        <Navigation />
        <MainContent />
      </div>
  );
};

export default App;
