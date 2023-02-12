export function headerWithBodyNoAuth(method, body) {
    const getData = {
        method: method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    };
    return getData;
}