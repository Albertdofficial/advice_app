import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [advice, setAdvice] = useState("");

  const getAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((res) => {
        setAdvice(res.data.slip.advice);
        console.log(advice);
      })
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div className="App">
      <h1>Advice App</h1>
      <h2>{advice}</h2>
      <button onClick={getAdvice}>New Advice</button>
    </div>
  );
}

export default App;
