import { headerWithBodyNoAuth } from "../api/index.js"
import { loginUser } from "./index.js";

export async function registerUser(url, body, method) {

    const response = await fetch(url, headerWithBodyNoAuth(method, body))
    const json = await response.json();

    if (json.id) {
        // LOG IN USER
    }
}