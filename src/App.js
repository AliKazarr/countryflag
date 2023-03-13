import React from 'react';
import { useState } from 'react';
import AddCountries from './AddCountries';

function getCountry()
{
  const country=['spain','turkey','norway','england','france']
 return country[Math.floor(Math.random()*country.length)]
}


function App() {
  const [countries,setCountries]=useState([])
  
  const getCountries=()=>
  {
    setCountries([...countries,getCountry()])
  }
   // it allowed us to write the countries names we added one under the other instead of side by side
    const rerenderCountry=countries.map((country,index)=>{
        return <AddCountries type={country} key={index}/>
     
    })
  return (
    <div  >
      <button onClick={getCountries}> Add country</button>
      <div> {rerenderCountry}</div>
    </div>
  );
}

export default App;
