function getRandomUsers(numberOfUsers) {
  return new Promise((resolve, reject) => {
    fetch(`https://randomuser.me/api/?results=${numberOfUsers}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        resolve(data.results);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

function getUsers() {
  getRandomUsers(5)
    .then((users) => {
      displayUsers(users);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function displayUsers(users) {
  const buttonContainer = document.querySelector(".success_container");
  buttonContainer.innerHTML = "";
  const successMessage = document.createElement("p");
  successMessage.classList.add("success_message");
  successMessage.textContent = "Успіх!";
  buttonContainer.appendChild(successMessage);
  const usersContainer = document.querySelector(".users_container");
  usersContainer.innerHTML = "";

  users.forEach((user) => {
    const userElement = document.createElement("div");
    userElement.classList.add("user");
    userElement.innerHTML = `
      <img src="${user.picture.large}" alt="${user.name.first} ${user.name.last}" class="picture">
      <p><span class="user_info">City</span>: ${user.location.city}</p>
      <p><span class="user_info">Country</span>: ${user.location.country}</p>
      <p><span class="user_info">Postcode</span>: ${user.location.postcode}</p>
      <p><span class="user_info">Email</span>: ${user.email}</p>               
    `;
    usersContainer.appendChild(userElement);
  });
}
