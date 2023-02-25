
export function listingPost (title, desc, ends, image) {
    const template = document.querySelector('.cardTemplate');
    const doc = template.content.cloneNode(true);
    // console.log("titles")
    doc.querySelector('h2').innerText = title;
    doc.querySelector('.description').innerText = desc;
    if (image) {
        doc.querySelector('img').src = image;
    } else {
        doc.querySelector('img').src = "../../../assets/images/john-schnobrich-2FPjlAyMQTA-unsplash(1)(1).jpg"
    } 
    doc.querySelector('.timeLeft').innerText = ends;

    const container = document.querySelector('.cards');
    container.append(doc);
}