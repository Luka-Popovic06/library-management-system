'use strict';
import './style.css';
import { domElements } from './dom.js';
import { LibraryManager } from './libraryCreator.js';
import { loadDefaultBooks, loadDefaultMembers } from './initialData.js';
import { updateBooksList, updateMembersList } from './libraryService.js';
//import { membershipNumbe, name, phone, email, fin } from './input.js';
const manager = new LibraryManager();
loadDefaultBooks(manager);
loadDefaultMembers(manager);
domElements.membersNumber.textContent = manager.getMembers().length;
domElements.booksNumber.textContent = manager.getBooks().length;

domElements.navigation.addEventListener('click', function (e) {
  if (e.target.closest('.dashboard-btn')) {
    domElements.dashboard.classList.remove('hidden');
    domElements.books.classList.add('hidden');
    domElements.members.classList.add('hidden');
  } else if (e.target.closest('.books-btn')) {
    domElements.dashboard.classList.add('hidden');
    domElements.books.classList.remove('hidden');
    domElements.members.classList.add('hidden');
  } else if (e.target.closest('.members-btn')) {
    domElements.dashboard.classList.add('hidden');
    domElements.books.classList.add('hidden');
    domElements.members.classList.remove('hidden');
  }
});
domElements.dashboard.addEventListener('click', function (e) {
  if (e.target.closest('.dashboard-see-all-books')) {
    domElements.dashboard.classList.add('hidden');
    domElements.books.classList.remove('hidden');
    domElements.members.classList.add('hidden');
  } else if (e.target.closest('.dashboard-see-all-members')) {
    domElements.dashboard.classList.add('hidden');
    domElements.books.classList.add('hidden');
    domElements.members.classList.remove('hidden');
  }
});
