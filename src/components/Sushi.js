import {React, useState} from "react";

function Sushi({sushi , setPlates , plates, cost , money}) {

  const[isEaten , setIsEaten] = useState(false)
  const {name , img_url , price } = sushi

  function handleEaten() {

    if (isEaten === false) {
        setIsEaten(isEaten => !isEaten) 
      if (cost < money) return setPlates([...plates , sushi])
      }
  }

  const eatenSushi = isEaten ? "Sushi is Eaten" : null

  return (
    <div className="sushi">
      <div className="plate" onClick={handleEaten}>
        {eatenSushi}
        {isEaten ? null : (
          <img
            src={img_url}
            alt={name + " Sushi"}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
