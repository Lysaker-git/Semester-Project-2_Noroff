import { headerWithBodyNoAuth } from "../api/index.js";
import { storingToken } from "../storage/index.js";

export async function loginUser(url, body, method) {

    try {
        const response = await fetch(url, headerWithBodyNoAuth(method, body))
        const json = await response.json();
        console.log(json)
        if (json.accessToken) {
            storingToken('accessToken', json.accessToken);
            storingToken('name', json.name);
            window.location.assign('./profile.html');
        } else {
            const errors = json.errors;
            createErrors(errors);
        }

    } catch (e) {
        console.log(e)
    }

}

export function createErrors (errors) {
    console.log(errors)
    const messageBox = document.querySelector('.messageBox');
    messageBox.innerHTML = '';
    errors.forEach ((error) => {
        const p = document.createElement('p');
        p.innerText = error.message;
        messageBox.append(p)
    })
    messageBox.classList.add('errorVisible')
    setTimeout(() => {
        messageBox.classList.remove('errorVisible')
    }, 5000)
}