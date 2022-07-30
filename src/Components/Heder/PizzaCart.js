
import React  from "react";
import Produkt from "./Produkt";


function PizzaCart(props) {
   
       return (
    <div className="pizzaCart">
   {props.produkts.map(produkt=>(
    <Produkt key={produkt.id} produkt={produkt} onAdd={props.onAdd}/>)
   )}
         </div>)
     
   
     ;
   }
   
   export default PizzaCart;