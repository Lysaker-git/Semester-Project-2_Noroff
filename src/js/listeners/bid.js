import { sendBid } from "../api/index.js";

export function bidListener(url) {
    window.addEventListener('click', (e) => {
        
        // there is DEFINITLY a better way.. but if it works.. it works..
        // console.log(url)
        const target = e.target;
        if (target.innerText === 'Bid') {
            
            e.preventDefault();
            const form = target.parentNode.parentNode;
            console.log(form.parentNode)
            const value = form.childNodes[1].childNodes[1].value;
            const id = form.parentNode.parentNode.id;
            const fullUrl = `${url}/${id}/bids`
            const method = 'POST';

            const token = localStorage.getItem('accessToken');
            console.log(value, method, token, fullUrl)
            sendBid(value, method, token, fullUrl);
        }
    })
}