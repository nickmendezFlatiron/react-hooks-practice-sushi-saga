import React from "react";

function MoreButton({setMoreSushi}) {

  function handleNextSushi() {
    setMoreSushi(current => (current + 4))
    
  }

  return <button onClick={handleNextSushi}>More sushi!</button>;
}

export default MoreButton;
