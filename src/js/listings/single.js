import { singleListingPost } from "../templates/index.js";


export function singleListingSetup (listing) {
        console.log(listing)
        const Title = listing.title;
        const Desc = listing.description;
        const Ends = listing.endsAt;
        const Image = listing.media[0];
        const Id = listing.id;
        const bidArray = listing.bids;
        const sortedBids = bidArray.sort((a, b) => a.amount - b.amount);
        const lastBid = sortedBids[sortedBids.length - 1]
        let bidAmount = 0;
        if (lastBid != undefined) {
            bidAmount = lastBid.amount;
        }
        // console.log(Id)
        const loadingContainer = document.querySelector('.loadingContainer')
        loadingContainer.style.display = "none"
        singleListingPost(Title, Desc, Ends, Image, Id, bidAmount, sortedBids);

}

