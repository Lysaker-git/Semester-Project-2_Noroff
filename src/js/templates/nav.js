const navObject = [
    {
        "title": "Home",
        "state": "current",
        "link": "/index.html"
    },
    {
        "title": "Listings",
        "state": "current",
        "link": "/listingPages/listings.html"
    },
    {
        "title": "Sign-in",
        "state": "notLogged",
        "link": "/authPages/login.html"
    },
    {
        "title": "Sign-up",
        "state": "notLogged",
        "link": "/authPages/signup.html"
    },
    {
        "title": "Profile",
        "state": "logged",
        "link": "/userPages/profile.html"
    },
    {
        "title": "Log Out",
        "state": "logged",
        "link": "/index.html"
    }
]

export function mobileNavTemplate(links) { 
    const navContainer = document.querySelector('#navbarNavAltMarkup')
    const navTemplate = document.querySelector('.navTemplate');
    const doc = navTemplate.content.cloneNode(true);

    console.log(localStorage.length) 
    if (localStorage.length === 0) {
        baseLinks(links, navContainer, doc);  
    } else {
        loggedInLinks(links, navContainer, doc);
    }
}

// <a class="nav-link"  href="#"></a>

function baseLinks (links, container, doc) {
    links.forEach((link) => {
        const state = link.state;
        if (state != "logged") {
            const a = document.createElement('a');
            a.href = link.link;
            a.innerText = link.title;
            a.classList.add('nav-link');
            doc.querySelector('.navbar-nav').append(a);
        }
    })
    container.append(doc)
}

function loggedInLinks(links, container, doc) {
    links.forEach((link) => {
        const state = link.state;
        if (state != "notLogged") {
            const a = document.createElement('a');
            a.href = link.link;
            a.innerText = link.title;
            a.classList.add('nav-link');
            doc.querySelector('.navbar-nav').append(a);
        }
    })
    container.append(doc)
}

mobileNavTemplate(navObject);