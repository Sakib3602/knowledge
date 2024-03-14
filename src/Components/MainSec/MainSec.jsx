// import PropTypes from 'prop-types'
import { useState } from "react";
import { useEffect } from "react";
import First from "../First/First";
import Second from "../Second/Second";

const MainSec = () => {
  const [data1, setData] = useState([]);
  useEffect(() => {
    fetch("getApi.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const [btn1, setbtn1] = useState([]);
  const [btn2, setbtn2] = useState(0);

  function handle(d) {
    

    let newBtn = [...btn1 , d]
    setbtn1(newBtn)

    
  }
  // read time not fixed
  function read(time) {
   

    let newRead = btn2 + time
    setbtn2(newRead)
    
  }



  return (
    <div className="flex w-[80%] m-auto ">
      <div className="w-[80%]">
        {data1.map((e,index) => (
          <First key={index} read={read} handle={handle} data1={e}></First>
        ))}
      </div>
      <Second btn1={btn1} btn2={btn2}></Second>
    </div>
  );
};

// MainSec.propTypes = {

// }

export default MainSec;
