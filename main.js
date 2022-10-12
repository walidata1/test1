const username = document.getElementById('username');
const password = document.getElementById('password');

const logInBtn = document.getElementById('LogInBtn');
const logInLink = document.getElementById('logInLink');

const loginPage = document.querySelector('.loginP');
const welPage = document.querySelector('.welPage');

// Användare
const user = [
  {
    username: 'fredrik',
    password: '12345',
  },
];


if (!localStorage.getItem('user')) {
  localStorage.setItem('user', JSON.stringify(user));
}
// kontrolera om inloggningen är lyckad
const correctLogIn = () => {
  const loggedIn = JSON.parse(localStorage.getItem('loggedIn'));
  const loggedInNow  = JSON.parse(localStorage.getItem('userLoggedInNow')
  );

  if (loggedIn && loggedInNow) {
    signInSucessful();
  }
};
correctLogIn();

// Om inloggning misslyckades visar ERROR meddelande
function showError(message) {
  const errorMsgLogin = document.getElementById('errorMsgLogin');
  errorMsgLogin.innerHTML = message;
}

// Kontrolera om användaren finns i listan eller inte
const userInLista = () => {
  const getUserInLista = JSON.parse(localStorage.getItem('user'));
  const userFound = getUserInLista.find(user => user.username === username.value && user.password === password.value);

  if (userFound) {
    localStorage.setItem('loggedIn', JSON.stringify(true));
    const isUserLoggedIn = JSON.parse(localStorage.getItem('loggedIn'));
    localStorage.setItem('userLoggedInNow', JSON.stringify(username.value));
    const currentLoggedInUser = JSON.parse(
      localStorage.getItem('userLoggedInNow')
    );

    if (isUserLoggedIn && currentLoggedInUser) {
      signInSucessful();
    }
  } else {
    signInFail();
  }
};

function signInSucessful() {
  showWelPage();
}

const signInFail = () => {
  if (username.value === '' || password.value === '') {
    showError('Fyll i dina inloggningsuppgifter');
  } else {
    showError('Du har angett fel uppgifter. Testa igen..');
  }
  clearFields();
};

function LoggaUt() {
  loginPage.style.display = 'flex';
  welPage.style.display = 'none';
  document.getElementById('userLoggedIn').innerHTML = '';
  clearFields();
  localStorage.setItem('loggedIn', JSON.stringify(false));
  localStorage.removeItem('userLoggedInNow');
}


// Om användaren finns i listan anropa userInLista function
logInBtn.addEventListener('click', event => {
  event.preventDefault();
  userInLista();
});


// Sidan visar dynamiskt rätt innehåll 
function showWelPage() {
  loginPage.style.display = 'none';
  welPage.style.display = 'flex';
  createLogOutBtn();
  greeting();
}

// Säg välkommen till användaren
function greeting() {
  document.getElementById('userLoggedIn').innerHTML = "Välkommen!";
}

// Skapa logga ut knapp
function createLogOutBtn() {
  const welPageContainer = document.createElement('div');
  
  const signOutBtn = document.createElement('button');
  signOutBtn.innerText = 'Logga ut';
  signOutBtn.onclick = () => {
    welPageContainer.remove();
    LoggaUt();
  };
  signOutBtn.classList.add('signOutBtn');
  welPageContainer.append(signOutBtn);
  welPage.appendChild(welPageContainer);
}

// Tömma formuläret vid fel inloggning
const clearFields = () => {
  const inputs = document.querySelectorAll('#username, #password');
  inputs.forEach(input => {input.value = '';
  });
};
