const loginButton = document.getElementById('loginButton');
        const loginPopup = document.getElementById('loginPopup');
        const closeButton = document.getElementById('closeButton');
        const loginSubmit = document.getElementById('loginSubmit');

        loginButton.addEventListener('click', () => {
            loginPopup.classList.remove('hidden');
        });

        closeButton.addEventListener('click', () => {
            loginPopup.classList.add('hidden');
        });

        loginSubmit.addEventListener('click', () => {
            // You can add your login logic here
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            console.log('Email:', email);
            console.log('Password:', password);
            // For demo purposes, just close the popup after submission
            loginPopup.classList.add('hidden');
        });