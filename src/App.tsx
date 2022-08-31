import { useEffect, useState } from "react";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Quotes from "./pages/Quotes";

export type Quote = {
  id: number;
  quote: string;
  author: {
    firstName: string;
    lastName: string;
    age: number;
    image: string;
}
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
            <Route index element={<Navigate to="/quotes"/>} />
            <Route path="/quotes" element={<Quotes quotes={quotes} />} />
        </Routes>
    </div>
  );
}

export default App;
