import logo from "./logo.svg";
import "./App.css";
import "./sass/main.scss";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
