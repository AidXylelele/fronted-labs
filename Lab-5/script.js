let isFullNameValid = false;
let isFacultyValid = false;
let isBirthdateValid = false;
let isAddressValid = false;
let isEmailValid = false;

document.getElementById("fullName").addEventListener("input", function () {
  const enteredText = this.value;
  const fullNameInput = this;
  const regex =
    /^[A-Za-zА-Яа-яІіЇїЄє]+ [A-Za-zА-ЯІіЇїЄє]\.[A-Za-zА-ЯІіЇїЄє]\.$/;
  if (regex.test(enteredText)) {
    fullNameInput.classList.remove("error");
    isFullNameValid = true;
  } else {
    fullNameInput.classList.add("error");
    isFullNameValid = false;
  }
});
document.getElementById("faculty").addEventListener("input", function () {
  const enteredText = this.value;
  const facultyInput = this;
  const regex = /^[A-Za-zА-Яа-яІіЇїЄє]{2,4}$/;
  if (regex.test(enteredText)) {
    facultyInput.classList.remove("error");
    isFacultyValid = true;
  } else {
    facultyInput.classList.add("error");
    isFacultyValid = false;
  }
});
document.getElementById("birthdate").addEventListener("input", function () {
  const enteredText = this.value;
  const birthdateInput = this;
  const regex = /^\d{2}\.\d{2}\.\d{4}$/;

  if (regex.test(enteredText)) {
    birthdateInput.classList.remove("error");
    isBirthdateValid = true;

    const parts = enteredText.split(".");

    const year = parseInt(parts[2], 10);
    const month = parseInt(parts[1], 10) - 1;
    const day = parseInt(parts[0], 10);

    const enteredDate = new Date(year, month, day);

    const minDate = new Date(1907, 0, 1);

    const currentDate = new Date();

    if (enteredDate > currentDate || enteredDate < minDate) {
      birthdateInput.classList.add("error");
      isBirthdateValid = false;
    }
  } else {
    birthdateInput.classList.add("error");
    isBirthdateValid = false;
  }
});

document.getElementById("address").addEventListener("input", function () {
  const enteredText = this.value;
  const addressInput = this;
  const regex = /^м\. \d{6}$/;
  if (regex.test(enteredText)) {
    addressInput.classList.remove("error");
    isAddressValid = true;
  } else {
    addressInput.classList.add("error");
    isAddressValid = false;
  }
});

document.getElementById("email").addEventListener("input", function () {
  const enteredText = this.value;
  const emailInput = this;
  const regex = /^[a-z0-9\._]+@[a-z]+\.com$/;
  if (regex.test(enteredText)) {
    emailInput.classList.remove("error");
    isEmailValid = true;
  } else {
    emailInput.classList.add("error");
    isEmailValid = false;
  }
});

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  if (
    isFullNameValid &&
    isFacultyValid &&
    isBirthdateValid &&
    isAddressValid &&
    isEmailValid
  ) {
    displayTextInNewWindow();
  } else {
    alert("Будь ласка, заповніть форму правильно");
  }
});

const displayTextInNewWindow = () => {
  const fullName = document.getElementById("fullName").value;
  const faculty = document.getElementById("faculty").value;
  const birthdate = document.getElementById("birthdate").value;
  const address = document.getElementById("address").value;
  const email = document.getElementById("email").value;

  const displayText = ` 
    <style>
      .info_container {
        display: flex;
        justify-content: center;
       
      }
      .info_container div {
        background-color: #f0f0f0;
        border: 1px solid #ccc;
        padding: 10px;
      }
    </style>
    <div class="info_container"> 
    <div>
    <p><strong>ПІБ:</strong> ${fullName}</p>
    <p><strong>Факультет:</strong> ${faculty}</p>
    <p><strong>Дата народження:</strong> ${birthdate}</p>
    <p><strong>Адреса:</strong> ${address}</p>
    <p><strong>Електронна пошта:</strong> ${email}</p>
    </div>
    </div>
  `;

  const newWindow = window.open("", "_blank");

  newWindow.document.write(displayText);
};

document.addEventListener("DOMContentLoaded", function () {
  const tableBody = document.getElementById("numberTableBody");
  const colorPicker = document.getElementById("colorPicker");

  let counter = 1;
  for (let i = 1; i <= 6; i++) {
    const row = document.createElement("tr");
    for (let i = 1; i <= 6; i++) {
      const cell = document.createElement("td");
      if (counter === 5) {
        cell.addEventListener("mouseover", function () {
          cell.style.backgroundColor = getRandomColor();
        });

        cell.addEventListener("click", function () {
          const selectedColor = colorPicker.value;
          cell.style.backgroundColor = selectedColor;
        });

        cell.addEventListener("dblclick", function () {
          const allCells = tableBody.getElementsByTagName("td");
          const selectedColor = getRandomColor();
          for (const otherCell of allCells) {
            if (otherCell !== cell) {
              otherCell.style.backgroundColor = selectedColor;
            }
          }
        });
      }
      cell.textContent = counter;
      console.log(row);
      row.appendChild(cell);
      tableBody.appendChild(row);
      counter++;
    }
  }
});

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
