import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Quotes from "./pages/Quotes";

export type Quote = {
  id: number;
  quote: string;
  author: string;
};

function App() {
  const [quotes, setQuotes] = useState<Quote[]>([]);

  useEffect(() => {
    fetch(`http://localhost:4000/quotes`)
      .then((res) => res.json())
      .then((quotesFromServer) => setQuotes(quotesFromServer));
  }, []);

  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Quotes quotes={quotes} />} />
            <Route path="/quotes" element={<Quotes quotes={quotes} />} />
        </Routes>
    </div>
  );
}

export default App;
