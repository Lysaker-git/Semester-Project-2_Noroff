import { listingSetup } from "../listings/index.js";


export async function listingsListener (url, currentPage, auth) {
    console.log(url);

    const response = await fetch(url + "?limit=50&_bids=true");
    const json = await response.json();
    // console.log(json)
    
    listingSetup(json);
}