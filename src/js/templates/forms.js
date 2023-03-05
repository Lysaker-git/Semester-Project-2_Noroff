
const formElements = [
    {
        "title": "Name",
        "type": "text",
        "sign-in": false,
    },
    {
        "title": "Avatar",
        "type": "text",
        "sign-in": false,
    },
    {
        "title": "E-mail",
        "type": "email",
        "sign-in": true,
    },
    {
        "title": "Confirm E-mail",
        "type": "email",
        "sign-in": false,
    },
    {
        "title": "Password",
        "type": "password",
        "sign-in": true,
    },
    {
        "title": "Confirm Password",
        "type": "password",
        "sign-in": false,
    }
]

function createElement(doc, element) {
    const input = document.createElement('input');
    const label = document.createElement('label');
    const div = document.createElement('div');

    input.type = element.type;
    input.classList.add('form-control');
    input.id = element.title;
    input.placeholder = element.title;
    input.name = element.title;

    label.for = element.title;
    label.innerText = element.title;

    div.classList.add('form-floating', 'mb-3')
    div.append(input,label)

    const appendContainer = doc.querySelector('.form-content');
    appendContainer.append(div);
}

export function creatingForms (page) {
    const template = document.querySelector('.formTemplate');
    const doc = template.content.cloneNode(true);

    if (page.includes('login')) {
        formElements.forEach(element => {
            const elementState = element["sign-in"];
            if (elementState) {
                createElement(doc, element)
            }
        })  
    } else {
        formElements.forEach(element => {
            createElement(doc, element)
        }) 
    }
    
    
    const button = doc.querySelector('button');
    location.pathname.includes('signup') ? button.innerText = "Sign Up" : button.innerText = "Sign In";
    
    const htmlContainer = document.querySelector('.forms-main');
    htmlContainer.append(doc)

    
}