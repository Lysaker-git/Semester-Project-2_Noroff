import * as url from "../constants/index.js"
import * as listeneres from "../listeners/index.js"

const whatPage = location.pathname;

function returnLoc(page) {
    return whatPage.toLowerCase().includes(page);
};

export function routing() {
    switch (true) {
        case returnLoc('login'):
            listeneres.registerListener(url.FULL_REG_URL);
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