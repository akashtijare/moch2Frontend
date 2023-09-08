import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import Figure from './Figure';



export const Analytix = () => {

    const data =useSelector((store)=>store.userDataReducer.products);
    const  [usersData,setUserData] =useState(
        {
            lebels:data.map((ele) => ele.type==="expense"),
            datasets : [{
                label:"Expense Chart",
                data:data.map((ele) => ele.type==="category")
                
            }]
        }
    )
    
  return (
    <div>
        <Figure chartDara={usersData}/>
    </div>
  )
}
