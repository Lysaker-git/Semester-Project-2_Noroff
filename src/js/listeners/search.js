import { creatingFilteredListings, listingsListener } from "./index.js"
import * as url from "./../constants/index.js"


export function searchListingsListener () {
    const searchForm = document.querySelector('#search');
    
    searchForm.addEventListener('input', (e) => {
        setTimeout(() => {
            const searchValue = searchForm.value.toLowerCase();
            creatingFilteredListings(url.FULL_LISTINGS_URL, searchValue);
        }, 1000)
    })
}