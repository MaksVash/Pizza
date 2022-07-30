import React, { useEffect, useState } from "react";




function cl(t){
    t.split('')
    let a= Number(t[0])
    let op =t[1]
    let b= Number(t[2])
    if(op === '+'){
        return a+b
    }else if(op === '-'){
       return  a-b
    }else if (op === '/'){
        return  a/b
     }else{
         return a*b
     }
   
   
   }
   
   
let vasya ={name:'Vasya',shurName:'Pupkin', age:16};
let kola ={name:'Kolya',shurName:'Sharik', age:2};
let sveta ={name:'Sveta',shurName:'Fifa', age:35};

let users=[vasya,kola,sveta]
let usersMaped=
    users.map(user=>({fullName:`${user.name} ${user.shurName}`,age:user.age}))

function sortAge(arr){
  return  arr.sort((a,b)=>b.age-a.age)
}


let num =[12, 3, 1,7] 

function sum(arr){

return arr.reduce((sum,current)=>sum+current,0)/arr.length
}

function Calculator(){
const[text,setText]=useState('0')



    return(
        <div className="calculator">
            <input onChange={el=>setText(el.target.value)}></input>
            <p>
                {cl(text)}
            </p>
            <p>{}</p>
            <button onClick={()=>console.log(sum(num))}>ADD</button>
        </div>
    )
    }


export default Calculator;