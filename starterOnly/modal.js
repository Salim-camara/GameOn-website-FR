// DOM Elements
const modalbg = document.querySelector(".bground");
const containerModalbg = document.querySelector('.test');
const modalBtn = document.querySelector(".modal-btn");
const modalBtn1 = document.querySelector(".modal-btn1");
const topNav = document.querySelector('#myTopnav');
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector(".close");
const body = document.querySelector('body');
const form = document.querySelector('form');
const btnSubmit = document.querySelector('.btn-submit');

// close modal form
const closeModal = () => {
  console.log('in_close_modal');
  if(window.innerWidth < 540) {
    const body = document.querySelector('body');
    body.style.overflow = 'auto';
  }
  containerModalbg.style.display = "none";
  body.style.overflow = "visible";
}

function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
  closeModal();
}


// launch modal event
modalBtn.addEventListener("click", () => {launchModal(); console.log('bonjour')});
modalBtn1.addEventListener("click", () => {launchModal(); console.log('bonjour')});

// launch modal form
const launchModal = async () => {
  await topNav.classList.remove('responsive');
  if(window.innerWidth < 540) {
    const body = document.querySelector('body');
    body.style.overflow = 'hidden';
    window.scroll(0, 0);
  }
  containerModalbg.style.display = 'flex';
}

// formulaire radio
const handleRadio = () => {
  let allTest = true;
  const radios = document.querySelectorAll('.inputRadio');
  const radioLast = document.querySelector('.radioContainer');
  const errorRadio = document.querySelector('.error_radio');
  if (errorRadio) {
    errorRadio.remove();
  }
  for (const element of radios) {
    if(element.checked) {
      allTest = false
    }
  } 
  if (allTest == true) {
    const error = document.createElement('p');
    error.style.color = '#EA4858FF';
    error.style.fontSize = '12px';
    error.classList.add('error_radio');
    error.innerHTML = 'Veuillez selectionner une ville';
    radioLast.appendChild(error);
  }
}

// formulaire
const handleForm = async () => {
  const inputs = document.querySelectorAll('.formulaire');
  const errors = document.querySelectorAll('.error');

  for(const element of errors) {
    element.remove();
  }
  for(const element of inputs) {
    element.style.border = 'none';
  }

  for (const input of inputs) {
    
    const type = input.type;
    const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    const error = (messageErreur) => {
      const error = document.createElement('p');
      error.innerHTML = `${messageErreur}`;
      error.style.color = '#EA4858FF';
      error.style.fontSize = '12px';
      error.style.fontWeight = '100';
      input.style.border = '2px solid #EA4858FF';
      error.classList.add('error');
      return error
    }
    
    switch (type) {

      case 'text': 
        if (input.value == null || input.value == '' || input.value.length < 2) {
          input.insertAdjacentElement('afterend', error('Veuillez saisir un nom'));
        }
      break;

      case 'email':
          if (input.value == null || input.value == '' || (regexEmail.test(input.value) == false)) {
            input.insertAdjacentElement('afterend', error('Veuillez saisir un email valide'));
          }
      break;

      case 'date':
          if (input.value == null || input.value == '') {
            input.insertAdjacentElement('afterend', error('Veuillez saisir une date'));
          }
      break;

      case 'number':
          if (input.value == null || input.value == '') {
            input.insertAdjacentElement('afterend', error('Veuillez saisir un nombre'));
          }

      case 'checkbox':
          const lastCheckbox = document.querySelector('.checkboxContainer');
          if(!(document.querySelector('.checkboxRequired') && document.querySelector('.checkboxRequired').checked)) {
            const error = document.createElement('p');
            error.innerHTML = 'Veuillez selectionner le champ obligatoire';
            error.style.color = '#EA4858FF';
            error.style.fontSize = '12px';
            error.style.fontWeight = '100';
            error.classList.add('errorCheckbox');
            error.classList.add('error');

            if(!document.querySelector('.errorCheckbox')) {
              lastCheckbox.appendChild(error);
            }
          }
      break;
    }
  }
}

btnSubmit.addEventListener('click', async (e) => {
  e.preventDefault();
  await handleRadio();
  await handleForm();
  console.log(document.querySelectorAll('.error'));
  const allErrors = document.querySelectorAll('.error');
  const errorRadio = document.querySelector('.error_radio');
  if ((allErrors.length > 0) || (errorRadio)) {
    console.log('fail');
  } else {
    const oldForm = document.querySelector('.oldform');
    oldForm.remove();

    const content = document.querySelector('.modal-body');
    const text = document.createElement('h1');
    text.innerHTML = 'Merci pour votre inscription';
    text.classList.add('styleText');
    const button = document.createElement('input');
    button.type = 'submit';
    button.value = 'Fermer';
    button.classList.add('buttonClose');
    button.classList.add('button');
    content.appendChild(text);
    content.appendChild(button);
    content.classList.add('styleContent');

  }
})


closeBtn.addEventListener('click', () => {
  closeModal();
});


