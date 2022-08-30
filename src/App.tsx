import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

type Quote = {
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
      <ul>
        <h1>Quotes</h1>
        {quotes.map((quote) => (
          <li key={quote.id}>
            <h4>"{quote.quote}"</h4>
            <h2>- {quote.author}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
