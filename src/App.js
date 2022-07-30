import './App.css';
import React, { useState } from 'react';
import Heder from './Components/Heder/Heder';
import SideBar from './Components/Heder/SideBar';
import { Route, Routes } from 'react-router-dom';
import Pizza from './Components/Heder/Pizza';
import Disert from './Components/Heder/Disert';
import Body from './Components/Body';
import Foter from './Components/Foter';
import Order from './Components/Order/Order';


let arr={
  produkts:[ {
      "id":1,
      "name":"Paperoni",
      "price":300,
      imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjrG4VKi6tHp6OJJA3SN-4g0k1NM1H9gLz_w&usqp=CAU"
  },
  {
      "id":2,
      "name":"Chesee",
      "price":300,
      imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjrG4VKi6tHp6OJJA3SN-4g0k1NM1H9gLz_w&usqp=CAU"
  },  {
      "id":3,
      "name":"Barbequ",
      "price":300,
      imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjrG4VKi6tHp6OJJA3SN-4g0k1NM1H9gLz_w&usqp=CAU"
  },
  {
    "id":4,
    "name":"Egstrowagansa",
    "price":200,
    imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjrG4VKi6tHp6OJJA3SN-4g0k1NM1H9gLz_w&usqp=CAU"
},  {
  "id":5,
  "name":"Barbequ",
  "price":300,
  imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjrG4VKi6tHp6OJJA3SN-4g0k1NM1H9gLz_w&usqp=CAU"
},  {
  "id":6,
  "name":"Barbequ",
  "price":300,
  imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjrG4VKi6tHp6OJJA3SN-4g0k1NM1H9gLz_w&usqp=CAU"
},  {
  "id":7,
  "name":"Barbequ",
  "price":300,
  imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjrG4VKi6tHp6OJJA3SN-4g0k1NM1H9gLz_w&usqp=CAU"
},  {
  "id":8,
  "name":"Barbequ",
  "price":300,
  imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjrG4VKi6tHp6OJJA3SN-4g0k1NM1H9gLz_w&usqp=CAU"
},  {
  "id":9,
  "name":"Barbequ",
  "price":300,
  imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjrG4VKi6tHp6OJJA3SN-4g0k1NM1H9gLz_w&usqp=CAU"
},
]

}

function App () {
  const[cartItams,setCartItems]=useState([]);
  const itemPrice =cartItams.reduce((a,b)=>a+b.price*b.qty,0)
    const[isToggleOn,setIsToggleOn]=useState(false);
    let {produkts}=arr

    const onAdd =(product)=>{
      const exist =cartItams.find(x=>x.id=== product.id);
      if(exist){
          setCartItems(cartItams.map(x=>x.id===product.id?{...exist,qty:exist.qty+1}:x))
      }else{
          setCartItems([...cartItams,{...product,qty:1}])
      }
  }
  
  const onRemove=(product)=>{
      const exist=cartItams.find((x)=>x.id===product.id);
      if(exist.qty===1){
          setCartItems(cartItams.filter((x)=>x.id !==product.id));    
      }else{
          setCartItems(
              cartItams.map((x)=>x.id===product.id?{...exist,qty:exist.qty-1}:x)
          )
      }
  }
  
  
 function handleClick() {
    setIsToggleOn(e => (
      !isToggleOn? true:false
    ));
  }
  
  

  return (
    <div className="App">
<Heder isToggleOn={isToggleOn} handleClick={handleClick} itemPrice={itemPrice} />
<SideBar isToggleOn={isToggleOn} handleClick={handleClick} />
<div className='panel'>
<Routes> 
<Route path='/body/*'   element={<Body produkts={produkts}  cartItams={cartItams} onAdd={onAdd}/>}/>
<Route path='/pizza/*'  element={<Pizza produkts={produkts}  cartItams={cartItams} onAdd={onAdd}/>}/>
<Route path='/disert/*' element={<Disert/>}/>
<Route path='/order/*'  element={<Order produkts={produkts} itemPrice={itemPrice} cartItams={cartItams} onAdd={onAdd} onRemove={onRemove}/>}/>
</Routes> 
</div>
<Foter/>

    </div>
  );
}

export default App;
