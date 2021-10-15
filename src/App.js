import './App.css';
import React, { useState, useEffect } from 'react';

const App = () => {

  const [resultData, setresultData] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    try{
      const response = await fetch("https://dog.ceo/api/breed/hound/images/random/10", {
        method: "GET",
      });
      if (response.ok) {
        const data = await response.json();
        setresultData(data.message)
      }
    }catch(error){
      console.log(`error`, error)
    } 
  }, [])

  return (
    <div className="grid grid-cols-2 gap-x-5 gap-y-5 w-4/5">
     {
      resultData.map(function (index) {
        return (
          <div>
            <img src={index} alt="" className="object-fill w-full h-full"/>
          </div> 
        )
      })
     }
    </div>
  );
}
 
export default App;
