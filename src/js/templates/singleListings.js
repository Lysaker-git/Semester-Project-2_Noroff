
export function singleListingPost (title, desc, ends, image, id, bid, bidArray) {

    const token = localStorage.length;
    let templateClass = '.cardTemplate';
    if (token >= 1) {
        templateClass = '.cardTemplateLoggedIn'
    }
    let template = document.querySelector(`${templateClass}`);

    const doc = template.content.cloneNode(true);
    // console.log("titles")
    doc.querySelector('.bids').innerText = `${bid} Credits`;
    // doc.querySelector('.card-link').href = `single.html?id=${id}`
    doc.querySelector('h2').innerText = title;
    doc.querySelector('.card').id = id;
    doc.querySelector('.description').innerText = desc;
    if (image) {
        
        doc.querySelector('img').src = image;
    } else {
        doc.querySelector('img').src = "./assets/images/filler.png"
    }

    const timeElement = doc.querySelector('.timeLeft');
    singleGetTimeLeft(ends, timeElement)
    bidHistory(bidArray);


    const container = document.querySelector('.cards');
    container.append(doc);
}

function singleGetTimeLeft (time, element) {
    const endTime = new Date(time).getTime();
    const interval = setInterval(() => {
        const now = new Date().getTime();
        const timeBetween = endTime - now;

        const days = Math.floor(timeBetween / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeBetween % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));        
        const minutes = Math.floor((timeBetween % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeBetween % (1000 * 60)) / 1000);

        element.innerText = `${days}d, ${hours}h, ${minutes}m, ${seconds}s`

        if (timeBetween < 0) {
            clearInterval(interval);
            element.innerText = "SOLD!";
            // getting topElement
            const topParent = element.parentElement.parentElement.parentElement.parentElement;
            topParent.classList.add('hidden')
            console.log(element.parentElement.parentElement.parentElement.parentElement)
        }
    })
}

function bidHistory (bidArray) {
    const template = document.querySelector('.bidHistoryTemplate');
    const doc = template.content.cloneNode(true);

    const container = doc.querySelector('.card-inner');

    bidArray.forEach((bid) => {
        console.log(bid)
        const amount = bid.amount;
        const name = bid.bidderName;

        const div = document.createElement('div')
        const nameElement = document.createElement(('p'));
        const amountElement = document.createElement('p');

        nameElement.innerText = name;
        amountElement.innerText = `${amount} Credits`;

        div.append(nameElement, amountElement);
        container.append(div);
    })

    const parentContainer = document.querySelector('.bidHistory');
    parentContainer.append(doc);
}
