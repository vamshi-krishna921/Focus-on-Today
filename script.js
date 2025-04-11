let checkBoxes = document.querySelectorAll(".circle");
let inputBoxes = document.querySelectorAll("input");
let error = document.querySelector(".error");
checkBoxes.forEach((element) => {
  element.addEventListener("click", () => {
    let img = element.querySelector(".check-icon");

    //* For checking individual field is filled or not
    // if (element.nextElementSibling.value != "") {
    //   let inputs = element.nextElementSibling;
    //   inputs.classList.toggle("inputs");
    //   img.classList.toggle("check-completed");
    // }

    //* Check all fields are filled
    let inputs = [...inputBoxes].every((input) => {
      return input.value;
    });
    if (inputs) {
      let inputClass = element.nextElementSibling;
      inputClass.classList.toggle("inputClass");
      img.classList.toggle("check-completed");
    } else {
      error.style.display = "block";
    }
  });
});
