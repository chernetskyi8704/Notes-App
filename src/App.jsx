import AppRouter from "./components/AppRouter";
import Navigation from "./components/UI/Navigation";
import "./styles/App.css";

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <main className="mainContent">
        <AppRouter />
      </main>
    </div>
  );
};

export default App;
