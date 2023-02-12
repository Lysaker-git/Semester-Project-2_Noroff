import { headerWithBodyNoAuth } from "../api/index.js";

export async function loginUser(url, body) {
    console.log(url, " ", body)
    const response = await fetch(url, headerWithBodyNoAuth("POST",body))
    const json = await response.json();
    console.log(json);
}