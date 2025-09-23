import { domElements } from './dom.js';
export let bookIdValue;
export let bookAuthorValue;
export let bookTitleValue;
export let radioInputValue;
export let avaibleIssuedInp;
domElements.avaibleInput.addEventListener('input', function (e) {
  avaibleIssuedInp = e.target.value;
});
domElements.issuedInput.addEventListener('input', function (e) {
  avaibleIssuedInp = e.target.value;
});
domElements.inputAddBookId.addEventListener('input', function (e) {
  bookIdValue = e.target.value;
});
domElements.inputAddBookAuthor.addEventListener('input', function (e) {
  bookAuthorValue = e.target.value;
});
domElements.inputAddBookTitle.addEventListener('input', function (e) {
  bookTitleValue = e.target.value;
});
domElements.radioInput.addEventListener('input', function (e) {
  radioInputValue = e.target.value;
});
export let membershipNoValue;
export let memberNameValue;
export let memberPhoneValue;
export let memberEmailValue;
export let memberFineDueValue;
domElements.inputMembershipNo.addEventListener('input', function (e) {
  membershipNoValue = e.target.value;
});
domElements.inputMembersName.addEventListener('input', function (e) {
  memberNameValue = e.target.value;
});
domElements.inputMembersPhone.addEventListener('input', function (e) {
  memberPhoneValue = e.target.value;
});
domElements.inputMembersFineDue.addEventListener('input', function (e) {
  memberFineDueValue = e.target.value;
});
