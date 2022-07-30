import './../../App.css';
import React from 'react';
import PizzaCart from './PizzaCart';


function Pizza(props) {
    return (
 <div className='windowPizza'>
<PizzaCart onAdd={props.onAdd} produkts={props.produkts}/>
      </div>)
  ;
}

export default Pizza;