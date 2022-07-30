import React from "react";



function Produkt(props){
    return(
        <div className="product">
<img className="small" src={props.produkt.imgUrl}/>
<h3>{props.produkt.name}</h3>
<div>${props.produkt.price}</div>
<button onClick={()=>props.onAdd(props.produkt)}>Add cart</button>
        </div>
    )
}

export default Produkt;