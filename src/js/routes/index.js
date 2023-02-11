

const whatPage = location.pathname;

function returnLoc(page) {
    return whatPage.toLowerCase().includes(page);
};

export function routing() {
    switch (true) {
        case returnLoc('login'):
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