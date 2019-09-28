// main-nav-toggler
// ----------------------------------------------------------------------

'use strict';

let mainNavToggler = document.getElementById('mainNavToggler');

// opening the main nav menu by mouse clicking
mainNavToggler.addEventListener('click', mainNavHandler);

// opening the main nav menu by keyboard clicking
mainNavToggler.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    mainNavHandler()
  }
});

function mainNavHandler() {
  showHideNav();
  switchNavIcon();
}

function showHideNav() {
  let mainNavElement = document.getElementById('mainNav');

  if (mainNavElement.className === 'main-nav') {
    mainNavElement.className += ' responsive';
  } else {
    mainNavElement.className = 'main-nav';
  }
}

function switchNavIcon() {
  if (mainNavToggler.className === 'toggler main-nav__toggler main-nav__link') {
    mainNavToggler.className += ' is-open';
  } else {
    mainNavToggler.className = 'toggler main-nav__toggler main-nav__link';
  }
}
