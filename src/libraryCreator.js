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
