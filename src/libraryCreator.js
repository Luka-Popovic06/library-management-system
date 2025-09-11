export class LibraryManager {
  constructor() {
    this.members = [];
    this.books = [];
    this.member;
    this.book;
  }
  removeMemberById(id) {
    this.members = this.members.filter(m => m.getMemberId() !== id);
  }
  removeBookById(id) {
    this.books = this.books.filter(b => b.getBookId() !== id);
  }
  //members
  pushMember(member) {
    this.members.push(member);
  }
  getMembers() {
    return this.members;
  }
  findMember(id) {
    this.selectedMember = this.members.find(m => m.getMemberId() === id);
    this.member = this.selectedMember;
  }
  getSelectedMember() {
    return this.member;
  }
  //books
  pushBook(book) {
    this.books.push(book);
  }
  getBooks() {
    return this.books;
  }
  findBook(id) {
    this.selectedBook = this.books.find(b => b.getBookId() === id);
    this.book = this.selectedBook;
  }
  getSelectedBook() {
    return this.book;
  }
}
export class Member {
  constructor(membershipNO, name, phone, email, fine) {
    this.id = crypto.randomUUID();
    this.membershipNO = membershipNO;
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.fine = fine;
  }
  getMemberId() {
    return this.id;
  }
  getMembershipNo() {
    return this.membershipNO;
  }
  getName() {
    return this.name;
  }
  getPhone() {
    return this.phone;
  }
  getEmail() {
    return this.email;
  }
  getFin() {
    return this.fine;
  }
}
export class Book {
  constructor(bookId, title, author, status) {
    this.id = crypto.randomUUID();
    this.bookId = bookId;
    this.title = title;
    this.author = author;
    this.status = status;
  }
  getBookId() {
    return this.id;
  }
  getID() {
    return this.bookId;
  }
  getTitle() {
    return this.title;
  }
  getAuthor() {
    return this.author;
  }
  getStatus() {
    return this.status;
  }
}
