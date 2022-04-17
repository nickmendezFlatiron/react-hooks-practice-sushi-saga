import {React, useState} from "react";

function Sushi({sushi , setPlates , plates, cost , money}) {
  

  const[isEaten , setIsEaten] = useState(false)
  const {name , img_url , price } = sushi

  function handleEaten() {
    console.log("cost " , cost)

    if (isEaten === false && sushi.price < (money - cost)) {
        setIsEaten(isEaten => !isEaten) 
     return setPlates([...plates , sushi])

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
