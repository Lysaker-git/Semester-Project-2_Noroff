import { headerWithBodyNoAuth } from "../api/index.js"
import { loginUser } from "./index.js";
import { FULL_LOGIN_URL } from "../constants/index.js";
import { createErrors } from "./index.js";

export async function registerUser(url, body, method) {
    try {
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
    
            loginUser(FULL_LOGIN_URL, bodyForLogin, method);
        } else {
            const errors = json.errors;
            createErrors(errors);
        }
    } catch (e) {
        console.log(e)
    }

}