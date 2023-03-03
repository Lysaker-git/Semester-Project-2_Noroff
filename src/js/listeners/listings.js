import { listingSetup } from "../listings/index.js";
import { singleListingSetup } from "../listings/single.js";


export async function listingsListener (url, currentPage, auth) {
    console.log(url);
    const response = await fetch(url + "?limit=100&_bids=true&_active=true&sort=endsAt&sortOrder=asc");
    const json = await response.json();
    console.log(json)
    listingSetup(json);
}

export async function singleListingListener (url) {
    const param = new URLSearchParams(document.location.search)
    const id = param.get('id');
    

    const response = await fetch(url + `/` + id + `?_bids=true`);
    const json = await response.json();

    singleListingSetup(json);
}