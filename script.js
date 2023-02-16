// your code here
const form = document.querySelector("form");
const h3 = document.querySelector("h3");
const name = document.querySelector("#name");
const year= document.querySelector("#year");
const btn = document.querySelector("#button");

form.addEventListener('submit',myfunction);

function myfunction(e) {
	e.preventDefault();
   let h3Value = "https://localhost:8080/";
  let nameValue = nameELement.value;
  let yearValue = yearElement.value;

  if (nameValue && yearValue) 
  {
    h3Value += "?name=" + nameValue + "&year=" + year;
  } else if (nameValue && !yearValue) {
    h3Value += "?name=" + nameValue;
  } else if (!nameValue && yearValue) {
    h3Value += "?year=" + yearValue;
  }
  h3.textContent = h3Value;
}


