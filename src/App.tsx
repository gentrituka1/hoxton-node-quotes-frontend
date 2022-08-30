import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'

type Quote = {
  quote: string
  author: string
}

function App() {
  const [quotes, setQuotes] = useState<Quote[]>([])

  useEffect(() => {
    fetch(`http://localhost:4000/quotes`)
      .then(res => res.json())
      .then(quotesFromServer => setQuotes(quotesFromServer))

  }, [])

  return (
    <div className="App">
        <ul className='quote-list'>
        <h1>Quotes</h1>
          {quotes.map(quote => 
          <li>
            <div className='quote-text'>
              <h4>"{quote.quote}"</h4>
              <h2>- {quote.author}</h2>
            </div>
          </li>
          )}
        </ul>
    </div>
  )
}

export default App
