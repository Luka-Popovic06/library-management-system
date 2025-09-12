import { domElements } from './dom.js';
import { books, members } from './info.js';
import { createBook, createMember } from './libraryService.js';
import { Book, Member } from './libraryCreator.js';
export function loadDefaultBooks(manager) {
  if (manager.getBooks().length > 0) return;
  const booksArray = books;
  booksArray.forEach(function (book) {
    const newBook = new Book(book.bookId, book.title, book.author, book.status);
    manager.pushBook(newBook);
    createBook(
      newBook.getBookId(),
      newBook.getID(),
      newBook.getTitle(),
      newBook.getAuthor(),
      newBook.getStatus()
    );
  });
}
export function loadDefaultMembers(manager) {
  if (manager.getMembers().length > 0) return;
  const membersArray = members;
  membersArray.forEach(function (member) {
    const newMember = new Member(
      member.membershipNo,
      member.name,
      member.phone,
      member.email,
      member.fine
    );
    manager.pushMember(newMember);
    createMember(
      newMember.getMemberId(),
      newMember.getMembershipNo(),
      newMember.getName(),
      newMember.getPhone(),
      newMember.getEmail(),
      newMember.getFin()
    );
  });
}
