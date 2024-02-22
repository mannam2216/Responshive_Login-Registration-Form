// =========LOGIN SHOW AND HIDDEN========
const signUp = document.getElementById('sign-up'),
     signIn = document.getElementById('sign-in'),
     LoginUp = document.getElementById('login-up'),
     LoginIn = document.getElementById('login-in');

signUp.addEventListener('click', () => {
     //Remove classes first if the exists
     LoginIn.classList.remove('block')
     LoginUp.classList.remove('none')

     //Add classes
     LoginIn.classList.add('none')
     LoginUp.classList.add('block')
});

signIn.addEventListener('click', () => {
     //Remove classes first if the exists
     LoginIn.classList.remove('none')
     LoginUp.classList.remove('block')

     //Add classes
     LoginIn.classList.add('block')
     LoginUp.classList.add('none')
});

