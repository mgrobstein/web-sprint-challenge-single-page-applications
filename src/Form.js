import React, { useState, useEffect } from 'react'

const toppingsChecklist = ['pepperoni', 'extraCheese', 'sausage', 'mushroom']

export default function Form(props) {

    const {formValues, 
      change, 
      submit, 
      formErrors, 
      pizzas
    } = props

      const onChange = event => {
        const { name, value, checked, type } = event.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change (name, valueToUse);
      }
      const onSubmit = event => {
        event.preventDefault()
        submit();
      }

  return (


    <div className='pizza container'>
    <div className='errors'>
    <div>{formErrors['name-input']}</div>
    </div>
      <form id='pizza-form' onSubmit = {onSubmit}>
      {pizzas.name ?(
      <div className = 'activeOrder'>
        <h1>Your order:</h1>
        <div>Your Name/Pizza Name: {pizzas.name}</div>
        <div>Pizza Size: {pizzas.size}</div>
        <div>Toppings: {pizzas.toppingsChecklist}</div>
        <div>Special Instructions: {pizzas.special}</div>
      </div>
      ):null}
      <div className='pizzaName'>
        <label>
          Name:
          <input
          type = 'text'
          id = 'name-input'
          name = 'name-input'
          value = {pizzas.name}
          onChange = {onChange}
          />
        </label>
      </div>
      <div className='pizzaSize'>
        <label>
          Size:
          <select
          id = 'size-dropdown'
          name = 'size'
          value = {pizzas.size}
          onChange = {onChange}
          >
          <option value = ''> Size </option>
          <option value = 'small'> Small </option>
          <option value = 'medium'> Medium </option>
          <option value = 'large'> Large </option>
          </select>
        </label>
      </div>
      <div className='pizzaToppings'>
        <h2>Toppings: </h2>
        <label> Pepperoni 
          <input
          type = 'checkbox'
          name = 'pepperoni'
          value = {formValues.pepperoni}
          onChange = {onChange}
          />
        </label>
        <label> Extra Cheese 
          <input
          type = 'checkbox'
          name = 'extraCheese'
          value = {formValues.extraCheese}
          onChange = {onChange}
          />
        </label>
        <label> Sausage 
          <input
          type = 'checkbox'
          name = 'sausage'
          value = {formValues.sausage}
          onChange = {onChange}
          />
        </label>
        <label> Mushroom
          <input
          type = 'checkbox'
          name = 'mushroom'
          value = {formValues.mushroom}
          onChange = {onChange}
          />
        </label>
      </div>
      <div className='special'>
        <label>Special Instructions:
          <input
          onChange={onChange}
          name='special-text'
          type='text'
          id='special-text'
          value={pizzas.special}
          />
        </label>

      </div>
      <button id='order-button'>Submit</button>

      </form>
      {/* {/* {
        !!details.hobbies && !!details.hobbies.length &&
        <div>
          Hobbies:
          <ul>
            {details.hobbies.map((like, idx) => <li key={idx}>{like}</li>)}
          </ul>
        </div>
      } */}
 </div>
  )
}
