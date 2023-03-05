import { registerUser } from "../users/index.js";
import { createErrors } from "../users/index.js";


function checkingEquals(first, second) {
    return first === second ? true : false;
}

export function signupListener(url) {
    const form = document.querySelector('form')
    form.addEventListener('submit', (e) => {
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
            checkEmail(email, confirmEmail);
            if (pass != confirmPass) {
                checkPass(pass, confirmPass);
            }
        }

    })
}

function checkPass (value, checkValue) {
    const errorArray = [];
    if (value != checkValue) {
        errorArray.push({'message': 'Password does not match'})
    }
    createErrors(errorArray);
}

function checkEmail (value, checkValue) {
    const errorArray = []
    if (value != checkValue) {
        errorArray.push({'message': 'E-mail is not equal'})
    }
    if (!value.includes('noroff')) {
        errorArray.push({'message': 'E-mail needs to include noroff or stud.noroff'})
    }
    createErrors(errorArray);
}
