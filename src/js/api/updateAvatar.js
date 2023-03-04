import { headerWithBodyAuth } from "./index.js";

export async function updateMyAvatar(url, body, method, token) {
    const response = await fetch(url, headerWithBodyAuth(method, body, token))
    const json = await response.json();

    if (json.avatar) {
        window.location.reload();
    }
}