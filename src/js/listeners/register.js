import { registerUser } from "../users/index.js";


function checkingEquals(first, second) {
    return first === second ? true : false;
}

export function signupListener(url) {
    const form = document.querySelector('form')
    form.addEventListener('submit', (e) => {
        console.log(form)
        e.preventDefault();
        const data = new FormData(form);

        const pass = data.get('Password');
        const confirmPass = data.get('Confirm Password');
        const email = data.get('E-mail');
        const confirmEmail = data.get('Confirm E-mail');

        if (pass === confirmPass && email === confirmEmail) {
            // console.log('All passed')
            const body = {
              "name": data.get('Name'),
              "email": email,
              "avatar": data.get('Avatar'),
              "password": pass
            }
            const method = 'POST';

            registerUser(url, body, method)
            
        } else {
            console.log('Nope')
        }

    })
}

