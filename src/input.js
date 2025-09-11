import { domElements } from './dom.js';
export let membershipNumbe;
export let name;
export let phone;
export let email;
export let fin;
domElements.inputMembershipNo.addEventListener('input', function (e) {
  membershipNumbe = e.target.value;
});
domElements.inputName.addEventListener('input', function (e) {
  name = e.target.value;
});
domElements.inputPhone.addEventListener('input', function (e) {
  phone = e.target.value;
});
domElements.inputEmail.addEventListener('input', function (e) {
  email = e.target.value;
});
domElements.inputFin.addEventListener('input', function (e) {
  fin = e.target.value;
});
