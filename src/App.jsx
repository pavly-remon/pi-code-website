import { useState } from "react";
import "./App.css";
import MainView from "./Views/MainView.jsx";
import MovingCircle from "@/Components/MovingCircle.jsx";

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <div onMouseMove={handleMouseMove} className="App">
      <MovingCircle position={position} />
      <MainView />
    </div>
  );
}

export default App;
