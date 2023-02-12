export function navTemplate() {
    console.log('nav checking in')
}

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
    const mobileNavComtainer = document.querySelector(".mobileNav");
    const desktopNavComtainer = document.querySelector(".desktopNav");
    let ul = document.createElement('ul');
    
    if (localStorage.length === 0) {    
        let userLoggedIn = false;
    } else {
        let userLoggedIn = true;
    }

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

mobileNavTemplate(navObject);