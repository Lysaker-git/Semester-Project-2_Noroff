

export function avatarListener () {
    const avatarButton = document.querySelector('.updateAvatar');
    const avatarCont = document.querySelector('.changeAvatarContainer');
    const avatarForm = document.querySelector('.changeAvatarContainerForm');

    avatarButton.addEventListener('click', (e) => {
        console.log('clicked')
        avatarCont.classList.toggle('changeAvatarContainerVisible');
    })

    avatarForm.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log(avatarForm);
        const avatarURL = avatarForm[0].value;
        const url = '';
        const body = {
            "avatar": avatarURL,
        }
        
    })
}