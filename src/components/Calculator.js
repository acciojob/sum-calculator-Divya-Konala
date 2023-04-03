import React, { useState } from 'react'

const Calculator = () => {
    const [sum,setSum]=useState(0);
   function handleChange(e){
    let num=Number(e.target.value);
    setTimeout(()=>{
        setSum(sum+num);
    },500)
   }
  return (
    <div>
        <h1>Sum Calculator</h1>
        <input type='number' onChange={(e)=>handleChange(e)}/>
        <p>Sum: {sum}</p>
    </div>
  )
}

export default Calculator