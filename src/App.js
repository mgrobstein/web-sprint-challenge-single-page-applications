import React, { useEffect, useState } from "react";
import axios from "axios";
import * as yup from 'yup';
import schema from './formSchema'
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Form from './Form';
import Home from './Home';
import './App.css';

const initialFormValues = {
  name: '',
  size: '',
  pepperoni: false,
  extraCheese: false,
  sausage: false,
  mushroom: false,
  special:''
}
const initialFormErrors = {
  name: '',
  size: '',
  special:''
}
const initialPizzas = []

const App = () => {

  const [pizzas, setPizzas] = useState(initialPizzas)
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }


  const inputChange = (name, value) => {
    // 🔥 STEP 10- RUN VALIDATION WITH YUP
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value // NOT AN ARRAY
    })
  }

  const formSubmit = () => {
    const newPizza = {
      name: formValues.name.trim(),
      size: formValues.size.trim(),
      pepperoni: formValues.pepperoni,
      extraCheese: formValues.extraCheese,
      sausage: formValues.sausage,
      mushroom: formValues.mushroom,
      special: formValues.special
    }
    // 🔥 STEP 8- POST NEW FRIEND USING HELPER


    axios.post('https://reqres.in/api/orders', newPizza)
    .then(resp => {
      setPizzas(newPizza)
      setFormValues(initialFormValues)
    })

  }
  

  return (
    <div className="wrapper">
      <h1>Lambda Eats</h1>
      <header><h1>Pizza Time</h1></header>
<Route exact path="/pizza">
    <Form formErrors = {formErrors} 
    id = "pizza-form" 
    formValues = {formValues} 
    setFormValues = {setFormValues} 
    inputChange = {inputChange} 
    formSubmit = {formSubmit} 
    pizzas = {pizzas} />
</Route>
<Route path ="/">
  <Home />
</Route>
</div>
  )};
  export default App;

