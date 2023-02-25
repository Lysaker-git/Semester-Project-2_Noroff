import * as url from "../constants/index.js"
import * as listeneres from "../listeners/index.js"
import { creatingForms } from "../templates/index.js";

const whatPage = location.pathname;

function returnLoc(page) {
    return whatPage.toLowerCase().includes(page);
};

export function routing() {
    switch (true) {
        case returnLoc('login'):
            creatingForms(whatPage);
            break;
        case returnLoc('signup'):
            creatingForms(whatPage);
            listeneres.signupListener(url.FULL_REG_URL);
            break;
        case returnLoc('profile'):
            break;
        case returnLoc('listings'):
            listeneres.listingsListener(url.FULL_LISTINGS_URL);
            break;
        case returnLoc('single'):
            break;
        default:
            listeneres.listingsListener(url.FULL_LISTINGS_URL);
            console.log('default')
            break;
    }
}