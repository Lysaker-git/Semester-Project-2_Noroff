import { headerWithBodyAndAuth } from "../api/index.js";
import { createProfile } from "../templates/index.js";

export async function profileListener (url) {
    if (localStorage.length > 1) {
        const name = localStorage.getItem('name');
        const userURL = url + name + `?_listings=true`;
        const token = localStorage.getItem('accessToken');
        console.log(userURL)
        const response = await fetch(userURL, headerWithBodyAndAuth('GET', token))
        const json = await response.json();

        createProfile(json);
    } else {
        console.log("small")
    }
}