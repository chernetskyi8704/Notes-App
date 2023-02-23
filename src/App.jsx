import AppRouter from "./components/AppRouter";
import Navigation from "./components/UI/Navigation";
import "./styles/App.css";

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <AppRouter />
    </div>
  );
};

export default App;
