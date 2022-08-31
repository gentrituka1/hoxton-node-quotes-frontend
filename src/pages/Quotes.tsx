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
            <h2>- {quote.author}</h2>
          </li>
        ))}
    </ul>
  )
}
