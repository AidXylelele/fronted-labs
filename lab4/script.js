let counter = 0;
let photoPath =
  "https://media.istockphoto.com/id/503874284/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B1%D0%B5%D1%80%D0%BB%D0%B8%D0%BD-%D1%81-%D1%80%D0%B5%D0%BA%D1%83-%D1%88%D0%BF%D1%80%D0%B5%D0%B5-%D0%BD%D0%B0-%D0%B7%D0%B0%D0%BA%D0%B0%D1%82%D0%B5-%D0%B3%D0%B5%D1%80%D0%BC%D0%B0%D0%BD%D0%B8%D1%8F.jpg?s=612x612&w=0&k=20&c=Oer1iCAHUWu8j-jZ93lbeqezhmNaNersbcxrgK4Mj-Q=";

function addImg() {
  counter++;

  const newImage = document.createElement("img");
  newImage.setAttribute("id", "cityPhoto_" + counter);
  newImage.setAttribute("src", `${photoPath}`);
  newImage.setAttribute("width", "300");
  newImage.setAttribute("margin-top", "15px");
  newImage.style.display = "block";

  const parent = document.querySelector(".city-photo");
  parent.appendChild(newImage);
}

function deleteImg() {
  const existingImage =
    counter === 0
      ? document.getElementById("cityPhoto")
      : document.getElementById(`cityPhoto_${counter}`);
  if (existingImage.id !== "cityPhoto") {
    const parent = document.querySelector(".city-photo");
    if (parent.contains(existingImage)) {
      parent.removeChild(existingImage);
      counter = Math.max(0, counter - 1);
    } else {
      console.error("Image not found in parent node.");
    }
  } else {
    existingImage.parentNode.removeChild(existingImage);
  }
}

function resizeImg(action) {
  const existingImage =
    counter === 0
      ? document.getElementById("cityPhoto")
      : document.getElementById(`cityPhoto_${counter}`);

  if (existingImage) {
    const currentWidth = existingImage.width;

    if (action === "increase") {
      existingImage.setAttribute("width", currentWidth + 100);
    } else if (action === "decrease" && currentWidth >= 150) {
      existingImage.setAttribute("width", currentWidth - 100);
    }
  }
}

function setColorById(elementId) {
  const element = document.getElementById(elementId);
  updateColorId(element);
}

function setColorByQuery() {
  const element = document.querySelector(".hobbies li:nth-child(2)");
  updateColorQuery(element);
}

function updateColorId(element) {
  const currentColor = element.style.backgroundColor;

  if (currentColor === "rgb(237, 227, 215)") {
    element.style.backgroundColor = "lightblue";
    element.style.color = "purple";
  } else {
    element.style.backgroundColor = "rgb(237, 227, 215)";
    element.style.color = "black";
  }
}

function updateColorQuery(element) {
  const currentColor = element.style.backgroundColor;

  if (currentColor === "rgb(237, 227, 215)") {
    element.style.backgroundColor = "yellow";
    element.style.color = "darkblue";
  } else {
    element.style.backgroundColor = "rgb(237, 227, 215)";
    element.style.color = "black";
  }
}
