import { listingPost } from "../templates/index.js";


export function listingSetup (listings) {
    listings.forEach((listing) => {
        // console.log(listing)
        const Title = listing.title;
        const Desc = listing.description;
        const Ends = listing.endsAt;
        const Image = listing.media[0];
        const Id = listing.id;
        const bidArray = listing.bids;
        const lastBid = bidArray[bidArray.length - 1]
        let bidAmount = 0;
        if (lastBid != undefined) {
            console.log(lastBid)
            bidAmount = lastBid.amount;
        }
        // console.log(Desc)
        // console.log(Ends)
        // console.log(Image)
        const loadingContainer = document.querySelector('.loadingContainer')
        loadingContainer.style.display = "none"
        listingPost(Title, Desc, Ends, Image, Id, bidAmount);
        
    })

}

