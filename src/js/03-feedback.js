import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input');
const messageInput = form.querySelector('textarea');

let objectLocal = {};
const clbckInput = () => {
  objectLocal = {
    Email: emailInput.value,
    Message: messageInput.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(objectLocal));
};
form.addEventListener('input', throttle(clbckInput, 500));

const savedData = localStorage.getItem('feedback-form-state');

if (savedData !== null) {
  const parsedData = JSON.parse(savedData);
  emailInput.value = parsedData.Email;
  messageInput.value = parsedData.Message;
}

const clbckSubmit = event => {
  event.preventDefault();
  objectLocal = {
    Email: emailInput.value,
    Message: messageInput.value,
  };
  console.log(objectLocal);
  form.reset();
  localStorage.removeItem('feedback-form-state');
};
form.addEventListener('submit', clbckSubmit);
