const txt = document.getElementById("txtBox");
const currNum = document.getElementById("curr-num");
const errorClass = document.getElementById("error").classList;
const successClass = document.getElementById("success").classList;

function validate() {
  if (txt.value.length < 100) {
    errorClass.remove("hide");
  } else {
    resetForm();
  }
}

function updateNum() {
  currNum.innerHTML = txt.value.length;
  if (currNum.innerHTML > 100) {
    currNum.style.color = "green";
  }
}

function enterPressed(event) {
  if(event.keyCode == 13) {
    event.preventDefault();
    validate();
  }
}

function resetForm() {
  txt.value = '';
  currNum.innerHTML = 0;
  currNum.style.color = "red";
  errorClass.add("hide");
  successClass.remove("hide");
}