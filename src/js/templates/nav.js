const navObject = [
    {
        "title": "Home",
        "state": "current",
        "link": "./index.html"
    },
    {
        "title": "Listings",
        "state": "current",
        "link": "./listings.html"
    },
    {
        "title": "Sign-in",
        "state": "notLogged",
        "link": "./login.html"
    },
    {
        "title": "Sign-up",
        "state": "notLogged",
        "link": "./signup.html"
    },
    {
        "title": "Profile",
        "state": "logged",
        "link": "./profile.html"
    },
    {
        "title": "Log Out",
        "state": "logged",
        "link": "./index.html"
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
            if (link.title === 'Sign-up') {
                a.classList.add('cta-btn');
            }
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
            if (link.title === 'Log Out') {
                a.classList.add('cta-btn');
                a.addEventListener('click', (e) => {
                    localStorage.clear();
                })
            }
            doc.querySelector('.navbar-nav').append(a);
        }
    })
    container.append(doc)

    
}

mobileNavTemplate(navObject);