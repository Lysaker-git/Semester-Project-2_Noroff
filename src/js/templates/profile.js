import { listingCreationListener } from "../listeners/index.js";


export function createProfile (profile) {
    console.log(profile);
    const template = document.querySelector('.profileTemplate');
    const doc = template.content.cloneNode(true);

    const avatar = profile.avatar;
    const credits = profile.credits;
    const name = profile.name;
    const listingsNumber = profile.listings.length;
    const wins = profile.wins.length;

    doc.querySelector('.avatarImage').src = avatar;
    doc.querySelector('.credits').innerText = `Credits: ${credits}`;
    doc.querySelector('h2').innerText = name;
    doc.querySelector('.listings').innerText = `Number of listings: ${listingsNumber}`
    doc.querySelector('.wins').innerText = `Number of wins: ${wins}`;

    const appendContainer = document.querySelector('.profile'); 
    appendContainer.append(doc);

    const createListingBtn = document.querySelector('.createListing');
    createListingBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const listingContainer = document.querySelector('.createBidContainer');
        listingContainer.classList.toggle('createVisible');
    })

    listingCreationListener();
}

export function createBidHistory (bids, container) {

    bids.forEach(bid => {
        const amount = bid.amount;
        const listing = bid.listing;
        const name = bid.bidderName; 
    
        const title = listing.title;

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

}