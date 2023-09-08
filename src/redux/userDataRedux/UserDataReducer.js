import { DELETE_ERROR, DELETE_LOADING, DELETE_PRODUCTS, EDIT_ERROR, EDIT_LOADING, EDIT_PRODUCTS, GET_ERROR, GET_LOADING, GET_PRODUCTS, POST_ERROR, POST_LOADING, POST_PRODUCTS } from "./actiontype";

const initial_state = {
    products: [],
    isLoading: false,
    isError: false

}
export const userDataReducer = (state = initial_state, action) => {

    const { type, payload } = action;

    switch (type) {
        case GET_LOADING : return { ...state, isLoading:true}
        case GET_PRODUCTS: return {...state , products:payload , isLoading:false}
        case GET_ERROR:return { ...state, isError:true}
        case POST_LOADING :  return { ...state, isLoading:true}
        case POST_PRODUCTS: return {...state , isLoading:false}
        case POST_ERROR:return { ...state, isError:true}
        case EDIT_LOADING :  return { ...state, isLoading:true}
        case EDIT_PRODUCTS: return {...state , isLoading:false}
        case EDIT_ERROR:return { ...state, isError:true}
        case DELETE_LOADING :  return { ...state, isLoading:true}
        case DELETE_PRODUCTS: return {...state , isLoading:false}
        case DELETE_ERROR:return { ...state, isError:true}
        default: return state;
    }


}