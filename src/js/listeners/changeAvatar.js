import { FULL_PROFILE_URL } from "../constants/index.js";
import { updateMyAvatar } from "../api/index.js";

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
        const avatarURL = avatarForm[0].value;
        const name = localStorage.getItem('name');
        const url = `${FULL_PROFILE_URL}${name}/media`;
        const method = 'PUT'
        console.log(url);
        const body = {
            "avatar": avatarURL,
        }
        console.log(body)
        const token = localStorage.getItem('accessToken');
        
        updateMyAvatar(url, body, method, token);
    })
}