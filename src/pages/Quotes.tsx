import React from 'react'
import { Quote } from '../App'

type Props = {
    quotes: Quote[]
}

export default function Quotes({quotes}: Props) {
  return (
    <ul>
        {quotes.map((quote) => (
          <li key={quote.id}>
            <h4>"{quote.quote}"</h4>
            <div className="author">
              <h2>- {quote.author.firstName} {quote.author.lastName} ({quote.author.age})</h2>
              <img src={quote.author.image} width={100} alt={`${quote.author.firstName} ${quote.author.lastName}`} />
            </div>
          </li>
        ))}
    </ul>
  )
}
