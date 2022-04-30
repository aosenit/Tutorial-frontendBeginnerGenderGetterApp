const input = document.querySelector(".input");
const form = document.querySelector(".form");

const body = document.querySelector(".cardContainer");
const title = document.querySelector(".title span");

form.addEventListener("submit", (e) => {
  submitName(e);
});

function submitName(e) {
  e.preventDefault();
  fetch(`https://api.genderize.io?name=${input.value}`)
    .then((response) => response.json())
    .then(
      (results) =>
        (body.innerHTML = ` <div class="card">
        <h4 class="title">Name: <span>${results.name}</span></h4>
        <h2>Gender: <span>${results.gender}</span></h2>
        <h5>Probability: <span>${results.probability}</span></h5>
      </div> `)
    );
  input.value = "";
}
