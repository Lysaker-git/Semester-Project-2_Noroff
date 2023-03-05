import { headerWithBodyAuth } from "./index.js";
import { createErrors } from "../users/index.js";

export async function sendBid (value, method, token, fullUrl) {
    const body = {
        "amount": parseInt(value)
    }
    console.log(body);
    const response = await fetch(fullUrl, headerWithBodyAuth(method, body, token))
    const json = await response.json(); 
    console.log(json);
    if (!json.id) {
        const errors = json.errors;
        createErrors(errors);

        json.errors.forEach( (error) => {
            console.log(error.message)
        })
    } else {
        window.location.reload();
    }
}