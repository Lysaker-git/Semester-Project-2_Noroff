import { listingPost } from "../templates/index.js";


export function listingSetup (listings) {
    
    listings.forEach((listing) => {
        // console.log(listing)
        const Title = listing.title;
        const Desc = listing.description;
        const Ends = listing.endsAt;
        const Image = listing.media[0];
        const bidArray = listing.bids;
        // console.log(Title)
        // console.log(Desc)
        // console.log(Ends)
        // console.log(Image)
        const loadingContainer = document.querySelector('.loadingContainer')
        loadingContainer.style.display = "none"
        listingPost(Title, Desc, Ends, Image);
        
    })

}

