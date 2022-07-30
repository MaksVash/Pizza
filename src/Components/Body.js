import './../App.css';
import React from 'react';
import Carousel, { CarouselItem } from './Couarasel/Carousel';
import Pizza from './Heder/Pizza';





function Body(props) {
  return (
    <div className="body">
<Carousel>
  <CarouselItem ><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVIW5Q8WaOHcKg0O3aA-EH57H4B3bUDZbpcA&usqp=CAU'/></CarouselItem>
  <CarouselItem><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVIW5Q8WaOHcKg0O3aA-EH57H4B3bUDZbpcA&usqp=CAU'/></CarouselItem>
  <CarouselItem><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVIW5Q8WaOHcKg0O3aA-EH57H4B3bUDZbpcA&usqp=CAU'/></CarouselItem>
</Carousel>
<h1>PIZZA</h1>
<Pizza produkts={props.produkts}  cartItams={props.cartItams} onAdd={props.onAdd}/>
  <h1>DRINKS</h1>
    </div>
  );
}

export default Body;