import { domElements } from './dom.js';
export let bookIdValue;
export let bookAuthorValue;
export let bookTitleValue;
export let radioInputValue;
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
