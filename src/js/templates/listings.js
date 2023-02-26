
export function listingPost (title, desc, ends, image) {

    const token = localStorage.length;
    let templateClass = '.cardTemplate';
    if (token === 1) {
        templateClass = '.cardTemplateLoggedIn'
    }
    let template = document.querySelector(`${templateClass}`);

    const doc = template.content.cloneNode(true);
    // console.log("titles")
    doc.querySelector('h2').innerText = title;
    doc.querySelector('.description').innerText = desc;
    if (image) {
        doc.querySelector('img').src = image;
    } else {
        doc.querySelector('img').src = "../../../assets/images/john-schnobrich-2FPjlAyMQTA-unsplash(1)(1).jpg"
    }

    const timeElement = doc.querySelector('.timeLeft');
    getTimeLeft(ends, timeElement)


    const container = document.querySelector('.cards');
    container.append(doc);
}

function getTimeLeft (time, element) {
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