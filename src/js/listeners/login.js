import { loginUser } from "../users/index.js"

export function loginListener(url) {
    const form = document.querySelector('form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const body = {
            "email": formData.get('E-mail'),
            "password": formData.get('Password')
        }
        const method = 'POST';

        loginUser(url, body, method);
    })
}

