const navObject = [
    {
        "title": "Home",
        "state": "current",
        "link": "/"
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
        "link": "/authPages/login.html"
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
    if (localStorage.length === 0) {
        baseLinks(links);  
    } else {
        loggedInLinks(links);
    }
}

// <a class="nav-link"  href="#"></a>

function baseLinks (links) {
    const mobileNavComtainer = document.querySelector(".mobileNav");
    const desktopNavComtainer = document.querySelector(".desktopNav");
    let ul = document.createElement('ul');

    links.forEach(link => {
        let state = link.state;
        
        if (state === "current" || state === "notLogged") {
            console.log(state)
            let li = document.createElement('li');
            let a = document.createElement('a');
            a.innerText = link.title;
            li.append(a);
            ul.append(li);
            console.log(ul.innerHTML)
        }
    })
    mobileNavComtainer.append(ul);
}

function loggedInLinks(links) {
    const mobileNavComtainer = document.querySelector(".mobileNav");
    const desktopNavComtainer = document.querySelector(".desktopNav");
    let ul = document.createElement('ul');

    links.forEach(link => {
        let state = link.state;
        
        if (state === "current" || state === "logged") {
            console.log(state)
            let li = document.createElement('li');
            let a = document.createElement('a');
            a.innerText = link.title;
            li.append(a);
            ul.append(li);
            console.log(ul.innerHTML)
        }
    })
    mobileNavComtainer.append(ul);
}

mobileNavTemplate(navObject);