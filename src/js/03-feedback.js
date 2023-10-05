import throttle from "lodash.throttle"; 


const form = document.querySelector(".feedback-form");
const emailInput = form.querySelector('input');
const messageInput = form.querySelector('textarea');



function foo() {
const email = form.elements.email.value;
const message = form.elements.message.value;

const obj = {
    [form.elements.email.name]: email,
    [form.elements.message.name]: message,
};
    console.log(obj);
    localStorage.setItem('feedback-form-state', JSON.stringify(obj));
}


form.addEventListener('input', throttle(foo, 500));


const getI = localStorage.getItem('feedback-form-state');
// const parsedI = JSON.parse(getI);
// console.log(parsedI);

if (getI !== null) {
    const parsedI = JSON.parse(getI);
    console.log(parsedI);
    emailInput.value = parsedI.email;
    messageInput.value = parsedI.message;
}


function submitFunction(event) {
    localStorage.removeItem("feedback-form-state");
 };

form.addEventListener('submit', submitFunction);


