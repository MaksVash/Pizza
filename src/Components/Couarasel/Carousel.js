import React, { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import './Courasel.css'

/* let pic =[
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVIW5Q8WaOHcKg0O3aA-EH57H4B3bUDZbpcA&usqp=CAU' ,
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPBm3ZechbqMMf5PC0FzW4-wUBZZBLNcYZ4g&usqp=CAU',
 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjrG4VKi6tHp6OJJA3SN-4g0k1NM1H9gLz_w&usqp=CAU',
 

] */


export const CarouselItem = ({ children, width }) => {

  return (
    <div className="couresel-item" style={{ width: width }}>
      {children}
    </div>
  )
}


const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false)
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;

    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  }


  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
    }, 3000);
    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  })
  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1)
  })

  return (
    <div
      {...handlers}
      className="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >

      <div className="inner" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: '100%' });
        })}
      </div>
      <div className="indicator">
        <button onClick={() => { updateIndex(activeIndex - 1); }}>Prev</button>
        {React.Children.map(children, (child, index) => {
          return (
            <button className={`${index === activeIndex ? 'active' : ''}`}
              onClick={() => { updateIndex(index) }}>
              {index + 1}
            </button>
          )
        })}
        <button onClick={() => { updateIndex(activeIndex + 1); }}>Next</button>
      </div>
    </div>
  )
}

export default Carousel