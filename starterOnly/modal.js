function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector(".close");
const body = document.querySelector('body');
const form = document.querySelector('form');

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  body.style.overflow = "hidden";
  const topnav = document.querySelector('.topnav');
}

// close modal form
const closeModal = () => {
  modalbg.style.display = "none";
  body.style.overflow = "visible";
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
    const error = (messageErreur) => {
      const error = document.createElement('p');
      error.innerHTML = `${messageErreur}`;
      error.style.color = 'red';
      error.style.fontSize = '15px';
      input.style.border = '2px solid red';
      error.classList.add('error');
      return error
    }
    
    switch (type) {

      case 'text': 
        if (input.value == null || input.value == '') {
          input.insertAdjacentElement('afterend', error('Veuillez saisir un nom'));
        }
      break;

      case 'email':
          if (input.value == null || input.value == '') {
            input.insertAdjacentElement('afterend', error('Veuillez saisir un email valide'));
          }
      break;

      case 'date':
          if (input.value == null || input.value == '') {
            input.insertAdjacentElement('afterend', error('Veuillez saisir une date'));
          }
      break;

      case 'radio':
          
          const radioLast = document.querySelector('.radioContainer');
          const test = document.createElement('p');
          test.innerHTML = 'Veuillez selectionner une ville';
          test.classList.add('error');
          radioLast.appendChild(test);
          for(const element of inputs) {
            if(element.checked) {
              test.style.display = 'none';
            }
          }
          // for(const element of inputs) {
          //   if(!(element.type == 'radio' && element.checked)) {
          //     const radioLast = document.querySelector('.radioContainer');
          //     const error = document.createElement('p');
          //     error.style.color = 'red';
          //     error.style.fontSize = '15px';
          //     error.innerHTML = 'Veuillez saisir une ville';
          //     error.classList.add('errorRadio');
          //     error.classList.add('error');
              
          //     if(!document.querySelector('.errorRadio')) {
          //       radioLast.appendChild(error);
          //       console.log('radio_ifelse');
          //     }
          //   } 
          // }
      break;

      case 'checkbox':
          const lastCheckbox = document.querySelector('.checkboxContainer');
          if(!(document.querySelector('.checkboxRequired') && document.querySelector('.checkboxRequired').checked)) {
            const error = document.createElement('p');
            error.innerHTML = 'Veuillez selectionner le champ obligatoire';
            error.style.color = 'red';
            error.style.fontSize = '15px';
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


closeBtn.addEventListener('click', handleForm);


