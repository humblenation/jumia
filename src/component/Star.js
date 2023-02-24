import React, { useState } from "react";
import {AiFillStar} from 'react-icons/ai'
// import '../components/styles/DetailedDesc.css'

const Star = () => {
  const [rating, setRating] = useState(null);
//   const [hoverFill, setHoverFill] = useState(null);


// const [count, setCount] = useState(0)
  return (
    <div className="star">
    
      {[...Array(5)].map((_, index) => {
    
        const ratingValue = index + 1;
        return (
          
       
            <AiFillStar
            className="star"
              onClick={() => {
                setRating(ratingValue)
                
              }}
              size={30}
              key={index}
            //   onMouseEnter={() => setHoverFill(ratingValue)}
            // onMouseLeave={() => setHoverFill(null)}
              style={{
                color:
                  ratingValue <= (rating) ? "#FFC416" : "#808080",
              }}
              onChange={() => setRating(ratingValue)}
              value={ratingValue}
            />
    
        );
      })}
      {/* <small>{rating} </small> */}
    </div>
  );
};

export default Star;