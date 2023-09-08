import { DELETE_ERROR, DELETE_LOADING, DELETE_PRODUCTS, EDIT_ERROR, EDIT_LOADING, EDIT_PRODUCTS, GET_ERROR, GET_LOADING, GET_PRODUCTS, POST_ERROR, POST_LOADING, POST_PRODUCTS } from "./actiontype"
import axios from "axios"
const url ="https://mock2-fjyx.onrender.com/usersData"



export const getProducts = () => async (dispatch) => {
    try {
        dispatch({ type: GET_LOADING })

        const res = await axios.get(url)
        console.log(res.data)
        dispatch({ type: GET_PRODUCTS, payload: res.data })
        
    } catch (error) {
        dispatch({ type: GET_ERROR })
    }
}

export const addProducts = (payload) => async(dispatch) => {
    try {
        dispatch({type:POST_LOADING})
        const addData =await axios.post(url,payload)
        console.log(addData)
        dispatch({type:POST_PRODUCTS})

    } catch (error) {
        dispatch({type:POST_ERROR})

    }
}

export const editProducts = (id,payload) => async(dispatch) => {
    try {
        dispatch({type:EDIT_LOADING})
        const addData = await axios.patch(`${url}/${id}`,payload)
        console.log(addData)
        dispatch({type:EDIT_PRODUCTS})

    } catch (error) {
        dispatch({type:EDIT_ERROR})

    }
}

export const deleteProducts = (id) => async(dispatch) => {
    try {
        dispatch({type:DELETE_LOADING})
        const addData = await axios.delete(`${url}/${id}`)
        console.log(addData)
        dispatch({type:DELETE_PRODUCTS})

    } catch (error) {
        dispatch({type:DELETE_ERROR})

    }
}