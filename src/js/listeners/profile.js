import { headerWithBodyAndAuth } from "../api/index.js";
import { createProfile } from "../templates/index.js";
import { listingSetup } from "../listings/index.js";

export async function profileListener (url) {
    if (localStorage.length > 1) {
        const name = localStorage.getItem('name');
        const userURL = url + name + `?_listings=true`;
        const token = localStorage.getItem('accessToken');
        const response = await fetch(userURL, headerWithBodyAndAuth('GET', token))
        const json = await response.json();
        const bidsURL = `${url}${name}/bids?_listings=true`;
        
        
        
        createProfile(json);
        profileListings(url, name, token);
        const bidsContainer = document.querySelector('.bids');
        profileBids(bidsURL, token, bidsContainer);


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

async function profileBids (url, token, container) {
    const response = await fetch(url, headerWithBodyAndAuth('GET', token))
    const json = await response.json();
    
    
    json.forEach(bid => {
        const amount = bid.amount;
        const listing = bid.listing;
        const name = bid.bidderName; 
    
        const title = listing.title;

        console.log(amount, listing, name, title)
        const containerElem = document.createElement('div');
        const amountElem = document.createElement('p');
        const listingElem = document.createElement('a');
        const nameElem = document.createElement('p');

        amountElem.innerText = amount;
        listingElem.innerText = title;
        listing.href = '#';
        nameElem.innerText = name;

        containerElem.append(amountElem, nameElem, listingElem)
        container.append(containerElem);
    })

    // console.log(json);
}