import * as url from "../constants/index.js"
import * as listeneres from "../listeners/index.js"
import { creatingForms } from "../templates/index.js";

const whatPage = location.pathname;

export function returnLoc(page) {
    return whatPage.toLowerCase().includes(page);
};

export function routing() {
    switch (true) {
        case returnLoc('login'):
            creatingForms(whatPage);
            listeneres.loginListener(url.FULL_LOGIN_URL);
            break;
        case returnLoc('signup'):
            creatingForms(whatPage);
            listeneres.signupListener(url.FULL_REG_URL);
            break;
        case returnLoc('profile'):
            listeneres.profileListener(url.FULL_PROFILE_URL)
            break;
        case returnLoc('listings'):
            listeneres.listingsListener(url.FULL_LISTINGS_URL);
            listeneres.bidListener(url.FULL_LISTINGS_URL);
            break;
        case returnLoc('single'):
            listeneres.singleListingListener(url.FULL_LISTINGS_URL);
            break;
        default:
            listeneres.listingsListener(url.FULL_LISTINGS_URL);
            console.log('default')
            break;
    }
}