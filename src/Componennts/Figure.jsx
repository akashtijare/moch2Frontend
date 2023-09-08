import React from 'react'
import {Pie} from "react-chartjs-2"

const Figure = ({chartDara}) => {
  return (
    <div>
    <Pie data={chartDara}/>
</div>
  )
}

export default Figure