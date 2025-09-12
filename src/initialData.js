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
