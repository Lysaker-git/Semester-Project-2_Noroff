import { FULL_LISTINGS_URL } from "../constants/index.js";
import { createListing } from "./../api/index.js";

export function listingCreationListener () {
    const method = 'POST';
    const form = document.querySelector('.listingForm');
    const url = FULL_LISTINGS_URL;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const body = {
            "title": form[0].value, // Required
            "description": form[1].value, // Optional
            "media": [form[2].value], // Optional
            "endsAt": new Date(form[3].value) // Required - Instance of new Date()
        }
        const method = 'POST';
        const token = localStorage.getItem('accessToken');
        createListing(url, method, body, token);
        
    })
}