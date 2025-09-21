import { domElements } from './dom.js';
import { members, books } from './info.js';
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
export function renderBookEditForm() {
  const html = `<form class="edit-book-form hidden">
        <h1 class="add-book-h1">Edit Book</h1>
        <input
          class="add-input edit-book-id"
          type="text"
          id="book-id-edit"
          name="book id"
          required
          placeholder="Book ID"
        />
        <input
          type="text"
          class="add-input edit-book-title"
          id="title-edit"
          name="title"
          required
          placeholder="Title"
        />
        <input
          type="text"
          name="author"
          id="author-edit"
          class="add-input edit-book-author"
          required
          placeholder="Author"
        />
        <div class="add-book-form_box">
          <label for="avaible-issued" class="add-book-form-input"
            >Status:</label
          >
          <div class="input-box">
            <input
              type="radio"
              class="radio-input-edit"
              name="avaible-issued"
              value="Available"
              id="avaible-edit"
              required
            />
            <label for="avaible-issued">Avaible</label>
          </div>
          <div class="input-box">
            <input
              type="radio"
              class="radio-input-edit"
              name="avaible-issued"
              value="Issued"
              id="issued-edit"
              required
            />
            <label for="avaible-issued">Issued</label>
          </div>
        </div>
        <button type="submit" class="form-add-btn edit-book-btn">
          UPDATE BOOK
        </button>
        <button type="button" class="form-cancel-btn cancel-edit-book-btn">
          CANCEL
        </button>
      </form>
        `;
  domElements.addBookBox.insertAdjacentHTML('afterbegin', html);
}
export function bindBookEditFormEvents(
  book,
  selectedForm,
  id,
  author,
  title,
  status,
  books
) {
  const inputId = selectedForm.querySelector('.edit-book-id');
  const inputAuthor = selectedForm.querySelector('.edit-book-author');
  const inputTitle = selectedForm.querySelector('.edit-book-title');
  const inputAvaible = selectedForm.querySelector('#avaible-edit');
  const inputIssued = selectedForm.querySelector('#issued-edit');

  inputId.value = `${id}`;
  inputAuthor.value = `${author}`;
  inputTitle.value = `${title}`;

  if (status === 'Available') {
    inputAvaible.value = status;
    inputAvaible.checked = true;
    inputIssued.checked = false;
  } else if (status === 'Issued') {
    inputIssued.value = status;
    inputIssued.checked = true;
    inputAvaible.checked = false;
  }
  setupCancelBookBtn(selectedForm, { id, author, title, status });
  applyBookEditChanges(selectedForm, books, book);
}
export function applyBookEditChanges(form, books, book) {
  let status = book.getStatus();

  const inputId = form.querySelector('.edit-book-id');
  const inputAuthor = form.querySelector('.edit-book-author');
  const inputTitle = form.querySelector('.edit-book-title');
  const inputAvaible = form.querySelector('#avaible-edit');
  const inputIssued = form.querySelector('#issued-edit');

  inputAvaible.addEventListener('change', e => {
    status = e.target.value;
  });

  inputIssued.addEventListener('change', e => {
    status = e.target.value;
  });
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    book.setBookID(inputId.value);
    book.setBookAuthor(inputAuthor.value);
    book.setBookTitle(inputTitle.value);
    book.setBookStatus(status);

    const li = document.getElementById(book.getBookId());
    const statusEl = li.querySelector('.book-status-p');
    statusEl.textContent = book.getStatus();
    updateBooksList(books);
    form.classList.add('hidden');
    domElements.overlay.classList.add('hidden');
    domElements.addBookBox.classList.add('hidden');
  });
}
export function createBook(id, bookId, title, author, status) {
  const html = `
  <li id=${id} class="list-item">
              <p class="p book-id-p">${bookId}</p>
              <p class="p book-title-p">${title}</p>
              <p class="p book-author-p">${author}</p>
              <p class="p book-status-p">${status}</p>
              <p class="actions">
                <button class="edit-btn edit-book">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="icon-edit"
                  >
                    <path
                      d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z"
                    />
                  </svg>
                </button>
                <button class="delete-btn delete-book">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="icon-delete"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </p>
            </li>
  `;
  domElements.booksList.insertAdjacentHTML('beforeend', html);
}
export function createMember(id, membershipNo, name, phone, email, fine) {
  const html = `
  <li id=${id} class="list-item">
              <p class="p membership-no-p">${membershipNo}</p>
              <p class="p name-p">${name}</p>
              <p class="p phone-p">${phone}</p>
              <p class="p email-p">${email}</p>
              <p class="p"><span class="fine-p">${fine}</span>$</p>
              <p class="actions">
                <button class="edit-btn edit-member">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="icon-edit"
                  >
                    <path
                      d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z"
                    />
                  </svg>
                </button>
                <button class="delete-btn delete-member">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="icon-delete"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </p>
            </li>
  `;
  domElements.membersList.insertAdjacentHTML('beforeend', html);
}
export function updateBooksList(books) {
  domElements.booksList.innerHTML = '';
  books.forEach(function (book) {
    createBook(
      book.getBookId(),
      book.getID(),
      book.getTitle(),
      book.getAuthor(),
      book.getStatus()
    );
  });
}
export function updateMembersList(members) {
  domElements.membersList.innerHTML = '';
  members.forEach(function (member) {
    createMember(
      member.getMemberId(),
      member.getMembershipNo(),
      member.getName(),
      member.getPhone(),
      member.getEmail(),
      member.getFin()
    );
  });
}
export function renderMemberEditForm() {
  const html = `
  <form class="edit-member-form hidden">
        <h1 class="add-member-h1">Edit Member</h1>
        <input
          class="add-input edit-membership-no-input"
          type="text"
          name="Membership"
          id="membership-no"
          required
          placeholder="Membership No."
        />
        <input
          class="add-input edit-members-name-input"
          type="text"
          name="name"
          id="name"
          required
          placeholder="Name"
        />
        <input
          class="add-input edit-members-phone-input"
          type="tel"
          name="phone"
          id="phone"
          required
          placeholder="Phone"
        />
        <input
          class="add-input edit-members-email-input"
          type="email"
          name="email"
          id="email"
          required
          placeholder="Email"
        />
        <input
          class="add-input edit-members-fine_due-input"
          type="number"
          name="fine-due"
          id="fine-due"
          required
          placeholder="Fine Due($)"
        />
        <button type="submit" class="form-add-btn edit-member-btn">
          UPDATE MEMBER
        </button>
        <button type="button" class="form-cancel-btn edit-cancel-member-btn">
          CANCEL
        </button>
      </form>
  `;
  domElements.addMemberBox.insertAdjacentHTML('afterbegin', html);
}
export function bindMemberEditFormEvents(
  member,
  form,
  membershipNO,
  name,
  phone,
  email,
  fineDue,
  members
) {
  const inputMembershipNO = form.querySelector('.edit-membership-no-input');
  const inputName = form.querySelector('.edit-members-name-input');
  const inputPhone = form.querySelector('.edit-members-phone-input');
  const inputEmail = form.querySelector('.edit-members-email-input');
  const inputFineDue = form.querySelector('.edit-members-fine_due-input');

  inputMembershipNO.value = `${membershipNO}`;
  inputName.value = `${name}`;
  inputPhone.value = `${phone}`;
  inputEmail.value = `${email}`;
  inputFineDue.value = `${fineDue}`;

  applyMemberEditChanges(form, members, member);

  setupCancelBtn(form, { membershipNO, name, phone, email, fineDue });
}
export function applyMemberEditChanges(form, members, member) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const inputMembershipNO = form.querySelector('.edit-membership-no-input');
    const inputName = form.querySelector('.edit-members-name-input');
    const inputPhone = form.querySelector('.edit-members-phone-input');
    const inputEmail = form.querySelector('.edit-members-email-input');
    const inputFineDue = form.querySelector('.edit-members-fine_due-input');

    member.setMembeshipNo(inputMembershipNO.value);
    member.setMemberName(inputName.value);
    member.setMemberPhone(inputPhone.value);
    member.setMemberEmail(inputEmail.value);
    member.setMemberFineDue(inputFineDue.value);

    updateMembersList(members);

    form.classList.add('hidden');
    domElements.overlay.classList.add('hidden');
    domElements.addMemberBox.classList.add('hidden');
  });
}
export function setupCancelBtn(form, originalValues) {
  const cancelBtn = form.querySelector('.edit-cancel-member-btn');
  cancelBtn.addEventListener('click', function () {
    form.querySelector('.edit-membership-no-input').value =
      originalValues.membershipNO;
    form.querySelector('.edit-members-name-input').value = originalValues.name;
    form.querySelector('.edit-members-phone-input').value =
      originalValues.phone;
    form.querySelector('.edit-members-email-input').value =
      originalValues.email;
    form.querySelector('.edit-members-fine_due-input').value =
      originalValues.fineDue;

    form.classList.add('hidden');
    domElements.overlay.classList.add('hidden');
    domElements.addMemberBox.classList.add('hidden');
  });
}
