import * as url from "../constants/index.js"
import * as listeneres from "../listeners/index.js"
import { creatingForms } from "../templates/index.js";

const formElements = [
    {
        "title": "Name",
        "label": true,
        "sign-in": false,
    },
    {
        "title": "Avatar",
        "label": true,
        "sign-in": false,
    },
    {
        "title": "e-mail",
        "label": true,
        "sign-in": true,
    },
    {
        "title": "Confirm E-mail",
        "label": true,
        "sign-in": false,
    },
    {
        "title": "password",
        "label": true,
        "sign-in": true,
    },
    {
        "title": "Confirm Password",
        "label": true,
        "sign-in": false,
    }
]

const whatPage = location.pathname;

function returnLoc(page) {
    return whatPage.toLowerCase().includes(page);
};

export function routing() {
    switch (true) {
        case returnLoc('login'):
            creatingForms(formElements);
            listeneres.registerListener(url.FULL_REG_URL);
            listeneres.loginListener(url.FULL_REG_URL);
            break;
        case returnLoc('profile'):
            break;
        case returnLoc('listings'):
            break;
        case returnLoc('single'):
            break;
        default:
            console.log('default')
            break;
    }
}