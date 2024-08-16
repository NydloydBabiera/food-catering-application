import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import DishList from "./components/DishList";
import LandingPage from "./components/LandingPage";
import Catering from "./components/Catering";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Catering />
    </>
  );
}

export default App;
