import React from 'react';
import {NavLink } from 'react-router-dom';
import './../../App.css';






/* class SideBar extends React.Component  {
constructor(props){
    super(props);
    this.state={isToggle:true}
    this.handleClic=this.handleClic.bind(this)
}

handleClic(){
    this.setState(state=>({
isToggle:!state.isToggle
    }))
}

 render(){ */
function SideBar(props){
 return(
   
    <div className={`${"sidenav"}  ${props.isToggleOn?"active" :""}`}>
    
     <NavLink to='/pizza'>Pizza</NavLink>
     <NavLink to=''>Drinks</NavLink>
     <NavLink to=''>Side</NavLink>
     <NavLink to='/disert'>Dissert</NavLink>

    </div>
  
    
)

}



  export default SideBar;
