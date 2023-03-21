/* ============ TAB LINKS =========== */
let tabLinks = document.getElementsByClassName("tab-links"),
  tabcontents = document.getElementsByClassName("tab-content");

function opentab(tabname) {
  for (tablink of tabLinks) {
    tablink.classList.remove("active-link");
  }

  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}
