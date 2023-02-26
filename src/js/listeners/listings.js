import { listingSetup } from "../listings/index.js";


export async function listingsListener (url, currentPage, auth) {
    console.log(url);

    const response = await fetch(url + "?limit=100&_bids=true&_active=true&sort=endsAt&sortOrder=asc");
    const json = await response.json();
    // console.log(json)
    
    listingSetup(json);
}