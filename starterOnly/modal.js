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
}

// close modal form
const closeModal = () => {
  modalbg.style.display = "none";
  body.style.overflow = "visible";
}




// formulaire
const handleForm = () => {
  
  const inputs = document.querySelectorAll('.formulaire');

  for (const input of inputs) {
    
    const type = input.type;
    
    switch (type) {

      case 'text': 
        if (input.value == null || input.value == '') {
          const error = document.createElement('p');
          error.innerHTML = 'Veuillez saisir un nom';
          error.id = 'error';
          input.insertAdjacentElement('afterend', error);
        } else {
          console.log('fail');
        }
      break;

      case 'email':
          if (input.value == null || input.value == '') {
            const error = document.createElement('p');
            error.innerHTML = 'Veuillez saisir une adresse mail valide';
            error.id = 'error';
            input.insertAdjacentElement('afterend', error);
          } else {
            console.log('fail_email');
          }

      case 'date':
          if (input.value == null || input.value == '') {
            const error = document.createElement('p');
            error.innerHTML = 'Veuillez saisir une date';
            error.id = 'error';
            input.insertAdjacentElement('afterend', error);
          } else {
            console.log('fail_date');
          }

      case 'radio':
          let test = false;

          console.log('test_radio' + inputs);
          for (const element of inputs) {
            if(element.type == 'radio' && element.checked) {
              test = true;
            }
          }

          if (test != true) {
            const error = document.createElement('p');
            error.innerHTML = 'Veuillez saisir une date';
            error.classList.add('error_radio');
            error.id = 'error';
          } else {
            console.log('fail_radio');
          }


    }
  }
}


closeBtn.addEventListener('click', handleForm);


