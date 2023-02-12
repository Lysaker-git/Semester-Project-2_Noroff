

export function creatingForms (elements) {
    console.log("form hello");
    const signUpContainer = document.querySelector('.signUp');
    const signInContainer = document.querySelector('signIn');

    elements.forEach(element => {
        let signingIn = element["sign-in"];
        if (signingIn) {
            let label = document.createElement("label");
            let input = document.createElement("input");
            label.setAttribute("for", element["title"]);
            input.setAttribute("type", element["title"]);
            input.setAttribute("name", element["title"]);
            console.log(label)
            console.log(input)


        }
    })
    // Creating sign up form

    // signUpContainer.innerHTML = `
    //     <label for "name">Name:</label>
    //     <input type="text" name="name" id="name">
    //     <label for="avatar">Avatar:</label>
    //     <input type="text" name="avatar" id="avatar">
    //     <label for="email">E-mail:</label>
    //     <input type="email" name="email" id="email">
    //     <label for="confirmEmail">Confirm E-mail:</label>
    //     <input type="email" name="confirmEmail" id="confirmEmail"> 
    //     <label for="passwordSignUp">Password:</label>
    //     <input type="password" name="passwordSignUp" id="passwordSignUp">
    //     <label for="passwordSignUpConfirm">Password:</label>
    //     <input type="password" name="passwordSignUpConfirm" id="passwordSignUpConfirm">
    //     <button type="submit">Sign Up</button>
    // `
}