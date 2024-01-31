// make a banner autoslide code below
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  var i;
  var imgList = document.getElementsByClassName("img-slideshow");
  if (n > imgList.length) {
    slideIndex = 1;
  } else if (n < 1) {
    slideIndex = imgList.length;
  }

  for (i = 0; i < imgList.length; i++) {
    imgList[i].style.display = "none";
  }

  imgList[slideIndex - 1].style.display = "block";
}

setInterval(() => {
  plusDivs(1);
}, 3000);

// make a form validation
const inputName = document.getElementById("input-name");
const inputEmail = document.getElementById("input-email");
const inputPhone = document.getElementById("input-phone");

const button = document.getElementById("btn");

button.addEventListener("click", function () {
  let nama = inputName.value;
  let email = inputEmail.value;
  let phone = inputPhone.value;

  if (!nama) {
    const nameError = document.getElementById("error-name");
    nameError.classList.add("error-message");

    nameError.innerText = "Nama Harus Diisi !";
  }
  if (!email) {
    const nameError = document.getElementById("error-email");
    nameError.classList.add("error-message");

    nameError.innerText = "Email Harus Diisi !";
  }
  if (!phone) {
    const nameError = document.getElementById("error-phone");
    nameError.classList.add("error-message");

    nameError.innerText = "No Phone Harus Diisi !!!";
  }

  console.log({ nama, email, phone });
});
