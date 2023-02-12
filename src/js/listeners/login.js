import { loginUser } from "../users/index.js"

export function loginListener(url) {
    const form = document.querySelector('.signIn');
    console.log(form);
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const inputData = new FormData(form);
        // console.log(inputData)
        
        let body = {}

        for (const [key, value] of inputData) {
            console.log(key, value)
            if (key === "e-mail") {
                body["email"] = value;
            }
            if (key === "password") {
                body["password"] = value;
            }
        }
        // console.log(body)
        
        loginUser(url, body);
    })

    

}

