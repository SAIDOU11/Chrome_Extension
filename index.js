let myLeads = [];
const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");

let leadsFromLocalStorage = localStorage.getItem("myLeads");
JSON.parse(leadsFromLocalStorage);
console.log(leadsFromLocalStorage);

inputBtn.addEventListener("click", () => {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  renderLeads();
  console.log(localStorage.getItem("myLeads"));
});

function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    listItems = `
    <li>
        <a href='${myLeads[i]}' target='_blank'>
         ${myLeads[i]}
        </a>
    </li>`;
  }
  ulEl.innerHTML += listItems;
}
