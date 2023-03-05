import { headerWithBodyAuth } from "./index.js";

export async function sendBid (value, method, token, fullUrl) {
    const body = {
        "amount": parseInt(value)
    }
    console.log(body);
    const response = await fetch(fullUrl, headerWithBodyAuth(method, body, token))
    const json = await response.json(); 
    console.log(json);
    if (!json.id) {
        json.errors.forEach( (error) => {
            console.log(error.message)
        })
    } else {
        window.location.reload();
    }
}