/* <div class="form-floating mb-3">
<input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
<label for="floatingInput">Email address</label>
</div>
<div class="form-floating">
<input type="password" class="form-control" id="floatingPassword" placeholder="Password">
<label for="floatingPassword">Password</label>
</div> */


function addElementsForSignIn(elements, container) {
    const button = document.createElement("button");
    const fullForm = document.createElement('div');

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

    let formLength = fullForm.children.length;
    button.innerText = formLength >= 4 ? "Sign In" : "Sign Up";
    button.setAttribute("type", "submit");

    container.append(fullForm, button);
}

export function creatingForms (elements) {
    const signUpContainer = document.querySelector('.signUp');
    const signInContainer = document.querySelector('.signIn');

    // IF QUERYPARAM = SIGN IN
    addElementsForSignIn(elements, signInContainer);
    // ELSE

}