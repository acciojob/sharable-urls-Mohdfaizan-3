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
  let nameValue = name.value;
  let yearValue = year.value;

  if (nameValue && yearValue) 
  {
    h3Value += "?name=" + nameValue + "&year=" + yearValue;
  } else if (nameValue && !yearValue) {
    h3Value += "?name=" + nameValue;
  } else if (!nameValue && yearValue) {
    h3Value += "?year=" + yearValue;
  }
  h3.textContent = h3Value;
}


