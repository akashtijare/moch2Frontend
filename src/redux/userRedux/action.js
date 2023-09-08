import axios from "axios"
import { LOGIN_SUCCESS, POST_USERS } from "./actiontype"


const baseurl ="  http://localhost:8080/users"


export const handleLogin = () => {
	return {
		type: LOGIN_SUCCESS,
	}
}