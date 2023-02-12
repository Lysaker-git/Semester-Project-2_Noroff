function addElementsForSignIn(fullForm, elements) {
    elements.forEach(element => {
        let title = element["title"];
        if (element["sign-in"]) {
            let label = document.createElement("label");
            let input = document.createElement("input");

            label.setAttribute("for", title);
            label.innerText = `${title}:`;
            
            input.setAttribute("type", title);
            input.setAttribute("name", title);
            input.id = title;
            
            fullForm.append(label, input);
        }
    })
}

export function creatingForms (elements) {
    const signUpContainer = document.querySelector('.signUp');
    const signInContainer = document.querySelector('.signIn');
    const fullForm = document.createElement('div');
    const button = document.createElement("button");
    
    addElementsForSignIn(fullForm, elements);
    
    let formLength = fullForm.children.length;
    button.innerText = formLength >= 4 ? "Sign In" : "Sign Up";

    signInContainer.append(fullForm, button);
}