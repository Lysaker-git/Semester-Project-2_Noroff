import { headerWithBodyAuth } from "./index.js";

export async function createListing(url, method, body, token) {
    console.log(body)
    const response = await fetch(url, headerWithBodyAuth(method, body, token))
    const json = await response.json();

    console.log(json);
}