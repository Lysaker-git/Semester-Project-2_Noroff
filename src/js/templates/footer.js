export function footerTemplate() {

    const footer = document.querySelector('footer')
    const div = document.createElement('div');
    const p = document.createElement('p');
    p.innerText = 'Copywright Robin Lysaker - 2022';
    div.append(p);
    footer.append(div);
}