import { headerWithBodyAuth } from "./index.js";
import { createErrors } from "../users/index.js";

export async function createListing(url, method, body, token) {
    console.log(body)
    const response = await fetch(url, headerWithBodyAuth(method, body, token))
    const json = await response.json();

    console.log(json)
    if (json.id) {
        console.log(json);
        window.location.reload();
    } else {
        const errors = json.errors;
        createErrors(errors)
    }
}