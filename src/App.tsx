import "./App.css";
import { Link } from "react-router-dom";
import Navbar from "./components/navbar"
import Footer from "./components/footer"

function App() {
  return (
    <div>
      <Navbar />
      <h1>Home Page</h1>
      <p>teste</p>
      <Footer />
    </div>
  );
}

export default App;
