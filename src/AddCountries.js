import React from 'react'
import { useState } from 'react'
import england from './images/england.jpeg'
import france from './images/france.png'
import norway from './images/norway.png'
import spain from './images/spain.svg'
import turkey from './images/turkey.png'


const setCountries={
    england,
    france,
    norway,
    spain,
    turkey
}
 function AddCountries({type}) {
   const [country,setCountry]=useState(1)
   const increaseImages =()=>
   {
    setCountry(country+1)
   }

   const [deCreaseCountry,setdeCreaseCountry]=useState(1)
   const deCreaseImages=()=>{
    setdeCreaseCountry(deCreaseCountry-1)
   }
     
  return (
    <div>
     {/* we added countries'images that has a width and height */ }
    <img src={setCountries[type]} alt="" style={{width:'300px',height:'300px',marginRight:'5px'}} />
    <img onClick={increaseImages} src={setCountries[type]} alt="" style={{width:country+country*10}} />
    <img onClick={deCreaseImages} src={ setCountries[type]} alt="" style={{width:500 + 10*deCreaseCountry ,marginLeft:'5px'}} />
    </div>
  )
}
export default AddCountries
