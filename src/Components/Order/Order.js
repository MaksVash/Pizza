import React from "react";



const Order=(props)=>{
    return(
<div>
<aside className="bascket">
  {props.cartItams.length===0 && <div>Cart is empti</div>}
  {props.cartItams.map((item)=>(<div key={item.id} className='row'>
    <div>{item.name}</div>
    <button onClick={()=>props.onAdd(item)} className ='add'>+</button>
    <button onClick={()=>props.onRemove(item)} className ='remove'>-</button>
    <div>
{item.qty}*${item.price.toFixed(2)}
    </div>
  </div>
 
  ))}
  {props.cartItams.length !==0 &&(
    <>
    <hr></hr>
    <div>
      <div>Items Price</div>
      <div>${props.itemPrice.toFixed(2)}</div>
    </div>
    </>
  )}
         </aside>
</div>

    )
}
export default Order;
