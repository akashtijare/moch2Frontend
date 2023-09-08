import { LOGIN_SUCCESS } from "./actiontype";
const initial_state = {
    isLoggedIn: false,
}

export const userReducer = (state = initial_state, action) => {

    const { type, payload } = action;

    
        switch(action.type){
            case LOGIN_SUCCESS:
                // console.log("logged in");
                return {
                    ...state,
                    isLoggedIn: true,
                }
    
    
            default: 
                return state;
        }
    

}
