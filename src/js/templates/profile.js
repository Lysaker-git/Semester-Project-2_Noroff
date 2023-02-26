
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
}