import React from 'react'
import {Link} from 'react-router-dom'

export default function Home(props){
  return(
    <div className = 'pizzaHomePageStuff'>
      <h1>Lambda Eats</h1>
      <Link to='/pizza'>
        <button id='order-pizza'>Order here</button>
      </Link>
    </div>
  )
}
