import React from "react";
import './Cart.css'

const TableHeader = () => { 
    return (
        <thead>
            <div>
                <th>Pizza</th>npm 
                <th>Size</th>
                <th>Remove</th>
            </div>
        </thead>
    );
}



const TableBody =(props)=> {
    const rows =props.characterData.map((row,index)=>{
        return(
            <div  className="product-list" key={index}>
                <img src={row.img}/>
                <div>{row.name}</div>
                <div>{row.size}</div>
    <div><button onClick={()=>props.removeCharacter(index)}>Dalete</button>
    <button>Order</button>
    </div>
   
            </div>
        )
    })
     
     return<div className="produkt-block">{rows}</div>
            
    }
    


class Table extends React.Component {

    render(){
        const{characterData,removeCharacter}=this.props
    return(
       <div  >
        <TableHeader/>
        <div>
        <TableBody  characterData={characterData} removeCharacter={removeCharacter}/>
        </div>
       </div>
    )
}}

export default Table;