import './../../App.css';
import React from 'react';
import Toggle from '../Toggle.js';
import { NavLink } from 'react-router-dom';







function Heder(props) {
  return (
    
    <div className="heder">
      <div className='onHeder'> 
      <div><a>1111-2222-333</a></div>
      <div><a>Map Googl</a></div>
      <div>
      <select>
        <option value='Ukr'>Ukr</option>
        <option value='Ukr'>Eng</option>
        <option value='Ukr'>Ger</option>
      </select>
      </div>
     <div>
     <button>Enter</button>
     </div>
      
      </div>
      <div className='logoSection'> 
<div className='logo'>
<NavLink to='/body'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB96mHbL9-p_U9TRG1I3UuZWwTgtupQZUYAw&usqp=CAU' height='100'></img></NavLink>
</div>

<div className='logoNav'>
<NavLink to='/pizza'>Pizza</NavLink>
<NavLink to='/drinks'>Drinks</NavLink>
<NavLink to='/side'>Side</NavLink>
<NavLink to='/disert'>Disert</NavLink>
<NavLink to='/order'><div className="showOrder"> 
<button><img src="https://cdn.icon-icons.com/icons2/943/PNG/512/shoppaymentorderbuy-20_icon-icons.com_73877.png" width='40'/>
<div className="showNum"> {props.itemPrice}</div></button>
        </div></NavLink>
</div>



<Toggle  isToggleOn={props.isToggleOn} handleClick={ props.handleClick}/>

      </div>


  
    </div>
  );
}

export default Heder;