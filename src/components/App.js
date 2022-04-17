import {React , useState} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

// const API = "http://localhost:3001/sushis";

function App() {

  const [plates , setPlates] = useState([])

  function reducer(previous , current) {
    console.log("reducer current" , current.price)
    console.log("reducer previous" , previous)
    return previous + current.price
  }

  const cost = plates.reduce(reducer , 0)
  const money = 100
  
  return (
    <div className="app">
      <SushiContainer  setPlates={setPlates} plates={plates} cost={cost} money={money}/>
      <Table plates={plates} cost={cost} money={money}/>
    </div>
  );
}

export default App;
