import { headerWithBodyAndAuth } from "../api/index.js";
import { createProfile } from "../templates/index.js";
import { listingSetup } from "../listings/index.js";

export async function profileListener (url) {
    if (localStorage.length > 1) {
        const name = localStorage.getItem('name');
        const userURL = url + name + `?_listings=true`;
        const token = localStorage.getItem('accessToken');
        console.log(userURL)
        const response = await fetch(userURL, headerWithBodyAndAuth('GET', token))
        const json = await response.json();


        createProfile(json);
        profileListings(url, name, token);
        // profileBids(url, name, token);
    } else {
        console.log("small")
    }
}

export async function profileListings (url, name, token) {
    const postsUrl = url + name + `/listings`;
    const response = await fetch(postsUrl, headerWithBodyAndAuth('GET', token))
    const json = await response.json();
    if (json.length === 0) {
        document.querySelector('.loadingContent').innerText = 'No Listings...'
    } else {
        listingSetup(json);
    }
}

async function profileBids (url, name, token) {
    const postsUrl = url + name `/bids?_listings=true`
    const response = await fetch(postsUrl, headerWithBodyAndAuth('GET', token))
    const json = await response.json();

    console.log(json);
}