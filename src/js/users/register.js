import { headerWithBodyNoAuth } from "../api/index.js"

export async function registerUser(url, body, method) {
    console.log(url)
    console.log(body)
    console.log(method)

    const response = await fetch(url, headerWithBodyNoAuth(method, body))
    const json = await response.json();

    if (json.id) {
        // LOG IN USER
    }
}