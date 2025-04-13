let checkBoxes = document.querySelectorAll(".circle");
let inputBoxes = document.querySelectorAll("input");
let error = document.querySelector(".error");
let progress = document.querySelector(".progress");
let count = 3;
let taskCompleted;

let allGoals = JSON.parse(localStorage.getItem("allGoals")) || {};

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
      inputClass.classList.toggle("inputs");
      error.style.display = "none";
      img.classList.toggle("check-completed");
      let inputId = element.nextElementSibling.id;
      allGoals[inputId].completed = !allGoals[inputId].completed;
      localStorage.setItem("allGoals", JSON.stringify(allGoals));
      if (allGoals[inputId].completed) {
        taskCompleted = Object.values(allGoals).filter(
          (count) => count.completed
        ).length;
        progress.textContent = `${taskCompleted}/3 completed`;
        taskCompleted = (taskCompleted / count) * 100;
        progress.style.width = `${taskCompleted}%`;
      }
    } else {
      error.style.display = "block";
    }
  });
});
inputBoxes.forEach((input) => {
  if (allGoals[input.id]) {
    input.value = allGoals[input.id].name;
  }
  input.addEventListener("input", (e) => {
    allGoals[input.id] = {
      name: input.value,
      completed: false,
    };
    localStorage.setItem("allGoals", JSON.stringify(allGoals));
  });
});
