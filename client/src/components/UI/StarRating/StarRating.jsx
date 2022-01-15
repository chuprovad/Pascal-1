import { useEffect } from "react";
import { useState } from "react";
import classes from './StarRating.module.css'

export default function StarRating({ restaurantRating }) {
  const [rating, setRating] = useState();
  const [hover, setHover] = useState();

  useEffect(() => {
    setRating(restaurantRating)
  }, [restaurantRating])

  return (
    <div className={classes.stars}>
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            style={{ backgroundColor: 'transparent', border: 'none', outline: 'none', cursor: 'pointer' }}
            className={index <= (hover || rating) ? classes.on : classes.off}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className={classes.star}>&#9733;</span>
          </button>
        );
      })}
    </div>
  );
}
