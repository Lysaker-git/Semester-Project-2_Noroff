export function clearStorage() {
    localStorage.clear();
}

export function storingToken(key, token) {
    localStorage.setItem(key, token);
}