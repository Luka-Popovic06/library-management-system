'use strict';
import './style.css';
import { domElements } from './dom.js';
import { LibraryManager, Book, Member } from './libraryCreator.js';
import { loadDefaultBooks, loadDefaultMembers } from './initialData.js';
import {
  updateBooksList,
  updateMembersList,
  createBook,
  createMember,
  startBookEdit,
} from './libraryService.js';
import {
  bookIdValue,
  bookAuthorValue,
  bookTitleValue,
  radioInputValue,
  membershipNoValue,
  memberNameValue,
  memberPhoneValue,
  memberEmailValue,
  memberFineDueValue,
} from './input.js';
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
domElements.booksList.addEventListener('click', function (e) {
  if (e.target.closest('.delete-book')) {
    const li = e.target.closest('.list-item');
    manager.removeBookById(li.id);
    updateBooksList(manager.getBooks());
    domElements.booksNumber.textContent = manager.getBooks().length;
  }
});
domElements.membersList.addEventListener('click', function (e) {
  if (e.target.closest('.delete-member')) {
    const li = e.target.closest('.list-item');
    console.log(li);
    manager.removeMemberById(li.id);
    updateMembersList(manager.getMembers());
    domElements.membersNumber.textContent = manager.getMembers().length;
  }
});
domElements.main.addEventListener('click', function (e) {
  if (e.target.closest('.add-new-book_btn')) {
    domElements.overlay.classList.remove('hidden');
    domElements.addBookBox.classList.remove('hidden');
    domElements.addBookForm.classList.remove('hidden');
    domElements.addBookForm.reset();
  } else if (e.target.closest('.add-new-member_btn')) {
    domElements.addMemberBox.classList.remove('hidden');
    domElements.addMemberForm.classList.remove('hidden');
    domElements.overlay.classList.remove('hidden');
    domElements.addMemberForm.reset();
  }
});
domElements.formBookCancel.addEventListener('click', function () {
  domElements.addBookForm.reset();
  domElements.overlay.classList.add('hidden');
  domElements.addBookBox.classList.add('hidden');
  domElements.addBookForm.classList.add('hidden');
});

domElements.formMemberCancel.addEventListener('click', function () {
  domElements.addMemberForm.reset();
  domElements.addMemberBox.classList.add('hidden');
  domElements.addMemberForm.classList.add('hidden');
  domElements.overlay.classList.add('hidden');
});
domElements.addBookForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const newBook = new Book(
    bookIdValue,
    bookTitleValue,
    bookAuthorValue,
    radioInputValue
  );
  manager.pushBook(newBook);
  createBook(
    newBook.getBookId(),
    newBook.getID(),
    newBook.getTitle(),
    newBook.getAuthor(),
    newBook.getStatus()
  );
  domElements.overlay.classList.add('hidden');
  domElements.addBookBox.classList.add('hidden');
  domElements.addBookForm.classList.add('hidden');
});
