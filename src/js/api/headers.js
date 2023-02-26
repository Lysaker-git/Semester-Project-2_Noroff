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

export function headerWithBodyAndAuth(method, token) {
    const getData = {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    };
    return getData;
}