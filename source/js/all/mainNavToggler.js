// mainNavToggler (mainNavToggler.js)
// ----------------------------------------------------------------------

'use strict';

let mainNavToggler = document.getElementById('mainNavToggler');

mainNavToggler.addEventListener("click", handler1);

function handler1() {
  showHideNav();
  switchNavIcon();
}

function showHideNav() {
  let mainNavElement = document.getElementById("mainNav");

  if (mainNavElement.className === "main-nav") {
    mainNavElement.className += " responsive";
  } else {
    mainNavElement.className = "main-nav";
  }
}

function switchNavIcon() {
  if (mainNavToggler.className === "toggler main-nav__link") {
    mainNavToggler.className += " is-open";
  } else {
    mainNavToggler.className = "toggler main-nav__link";
  }
}
