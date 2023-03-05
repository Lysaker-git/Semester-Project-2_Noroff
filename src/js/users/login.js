import { headerWithBodyNoAuth } from "../api/index.js";
import { storingToken } from "../storage/index.js";

export async function loginUser(url, body, method) {

    console.log('Testing', url, body, method)
    const response = await fetch(url, headerWithBodyNoAuth(method, body))
    const json = await response.json();

    console.log(json)
    if (json.accessToken) {
        storingToken('accessToken', json.accessToken);
        storingToken('name', json.name);
        window.location.assign('./profile.html');
    }
}