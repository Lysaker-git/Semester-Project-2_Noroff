import { headerWithBodyNoAuth } from "../api/index.js"
import { loginUser } from "./index.js";
import { FULL_LOGIN_URL } from "../constants/index.js";

export async function registerUser(url, body, method) {
    try {
        console.log(body.password)
        console.log(body)
        const response = await fetch(url, headerWithBodyNoAuth(method, body))
        const json = await response.json();
    
        console.log(json)
        if (json.id) {
            const password = body.password; 
            const name = body.email;
        
            const bodyForLogin = {
                "email": name,
                "password": password,
            }
            const method = 'POST';
            console.log(FULL_LOGIN_URL);
            console.log(bodyForLogin)
            
    
            loginUser(FULL_LOGIN_URL, bodyForLogin, method);
        }
    } catch (e) {
        console.log(e)
    }

}