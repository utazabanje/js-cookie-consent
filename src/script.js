function cookieConsent(cookieName) {
  let cookieAvailable = getCookie(cookieName)
  let openSettings = document.getElementById('open-settings');
  let box = document.getElementById('js-cookie-consent-box');
  let switchBtn = document.querySelectorAll('.switch');
  let categoriesGDPR = ['essential, marketing, analytics'];

  console.log(cookieAvailable)

  if (cookieAvailable !== null) {
    box.style.display = 'none';
    return
  } else {
    openSettings.addEventListener('click', function() {
      var isOpen = box.classList.contains('slide-up');
      box.setAttribute('class', isOpen ? 'slide-down' : 'slide-up');
    });
  
    switchBtn.forEach(function(item) {
      item.addEventListener('click', function() {
        if (this.className.includes('essential')) {
          console.log(this)
        } else if (this.className.includes('marketing')) {
  
        } else {
  
        }
      })
    })
  }
}

function getCookie(name) {
	if (document.cookie.length) {
		let nameEQ = name + '='
		let ca = document.cookie.split(';')

		for (let i = 0; i < ca.length; i++) {
			let c = ca[i]

			while (c.charAt(0) === ' ') {
				c = c.substring(1, c.length)
			}

			if (c.indexOf(nameEQ) === 0) {
				return c.substring(nameEQ.length, c.length)
			}
		}
	}

	return null
}

cookieConsent('cookiesGDPR')