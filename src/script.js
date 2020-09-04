(function () {
  let openSettings = document.getElementById('open-settings');
  let box = document.getElementById('js-cookie-consent-box');

  openSettings.addEventListener('click', function() {
    var isOpen = box.classList.contains('slide-up');

    box.setAttribute('class', isOpen ? 'slide-down' : 'slide-up');
  })
})();