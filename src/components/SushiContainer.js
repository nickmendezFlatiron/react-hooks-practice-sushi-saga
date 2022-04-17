import {React , useState , useEffect} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({setPlates , plates , cost , money}) {

  const [sushiList , setSushiList] = useState([])
  const [moreSushi , setMoreSushi] = useState(4)
  

  useEffect(() =>{
    fetch('http://localhost:3001/sushis')
    .then(res => res.json())
    .then (sushis => setSushiList(sushis))
  },[])
 
  const fourSushi = sushiList.filter(sushi => {
    if(moreSushi <= 4) {
      return sushi.id <= moreSushi} else return (sushi.id > moreSushi - 4 && sushi.id <= moreSushi)

    }
  )
  const renderSushi = fourSushi.map(sushi => <Sushi sushi={sushi} setPlates={setPlates} plates={plates} moreSushi={moreSushi} cost={cost} money={money}/>
  )
  return (
    <div className="belt">
      {renderSushi}
      <MoreButton setMoreSushi={setMoreSushi}/>
    </div>
  );
}

export default SushiContainer;
