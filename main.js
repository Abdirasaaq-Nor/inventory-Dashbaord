// let recent_onclick = document.querySelector("#recent_onclick");
// let dashboard_onclick = document.querySelector("#dashboard_onclick");

let recent_updates = document.querySelector("#recent_updates");
let Dashboard = document.querySelector("#Dashboard");

recent_onclick.addEventListener("click", () => {
  recent_updates.style.display = "block";
  Dashboard.style.display = "none";
});

dashboard_onclick.addEventListener("click", () => {
  recent_updates.style.display = "none";
  Dashboard.style.display = "block";
});
