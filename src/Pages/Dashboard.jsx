import React, { useEffect } from 'react'
import { Tracker } from '../Componennts/Tracker'
import { History } from '../Componennts/History'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../redux/userDataRedux/action';
import { Analytix } from '../Componennts/Analytix';



export const Dashboard = () => {

  
  const dispatch = useDispatch();
  const data =useSelector((store)=>store.userDataReducer.products);
  console.log(data)

 
  // const apiurl = `http://localhost:8080/products?_page=${currentpage}&_limit=${limit}&q=${search}`

  useEffect(()=>{dispatch(getProducts())},[])

  return (
    <div>
      <Tracker/>
      {
        data.map((prod) =><History key={prod.id} product={prod}/>)
      }
      {/* <Analytix/>
       */}
    </div>
  )
}
