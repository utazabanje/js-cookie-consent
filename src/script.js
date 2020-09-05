const cookieConsent = (config) => {
  sessionStorage.setItem('categories', JSON.stringify(['essential']))
  let cookieAvailable = getCookie(config.cookieName)
  let openSettings = document.getElementById('openCookieSettings');
  let box = document.getElementById('js-cookie-consent-box');
  let cookieToggleBox = document.querySelector('.js-cookie-consent-toogle-box');
  let switchBtn = document.querySelectorAll('.switch');
  let saveCookiesSettings = document.getElementById('saveCookieSettings');
  let acceptAllCookies = document.getElementById('acceptAllCookies');
  let learnMoreBtn = document.querySelector('.learn-more');
  let companyName = document.querySelectorAll('.company-name');

  if (cookieAvailable !== null) {
    box.style.display = 'none';
    return
  } else {
    cookieToggleBox.style.display = 'none';
    learnMoreBtn.setAttribute('href', config.learnMore);
    companyName.forEach((elem) => elem.innerHTML = config.companyName);

    openSettings.addEventListener('click', () => {
      let isOpen = box.classList.contains('slide-up');
      box.setAttribute('class', isOpen ? 'slide-down' : 'slide-up');

      if (cookieToggleBox.style.display === 'none') {
        cookieToggleBox.style.display = 'block';
      } else {
        setTimeout(() => {
          cookieToggleBox.style.display = 'none';
        }, 750)
      }
    });
  
    switchBtn.forEach((item) => {
      item.addEventListener('click', (e) => {
        e.stopImmediatePropagation();
        e.preventDefault();

        if (e.target.className.includes('marketing')) {
          toggleChecked(e.target);
          toggleValueInArray('marketing');
        } else if (e.target.className.includes('analytics')) {
          toggleChecked(e.target);
          toggleValueInArray('analytics');
        }
      })
    });

    saveCookiesSettings.addEventListener('click', () => {
      let savedCookies = sessionStorage.getItem('categories');

      setCookie('cookiesGDPR', savedCookies, config.expiration)
      box.style.display = 'none';
    });

    acceptAllCookies.addEventListener('click', () => {
      setCookie('cookiesGDPR', JSON.stringify(['essential', 'marketing', 'analytics']), config.expiration)
      box.style.display = 'none';
    });

    acceptOnScroll(config, box)
  }
};

const toggleValueInArray = (value) => {
  let categories = sessionStorage.getItem('categories');
  let categoriesGDPR = JSON.parse(categories);
  let idx = categoriesGDPR.indexOf(value);

  if (idx !== -1) {
    categoriesGDPR.splice(idx, 1);
  } else {
    categoriesGDPR.push(value);
  }

  sessionStorage.setItem('categories', JSON.stringify(categoriesGDPR));
};

const toggleChecked = (el) => {
  let checked = el.parentNode.childNodes[1].hasAttribute('checked');
  return (!checked) ? el.parentNode.childNodes[1].setAttribute('checked', '') : el.parentNode.childNodes[1].removeAttribute('checked');
};

const acceptCookies = (config, box) => {
  setCookie('cookiesGDPR', JSON.stringify(['essential', 'marketing', 'analytics']), config.expiration);
  box.style.display = 'none';
}

const amountScrolled = () => {
  return window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight;
};

const acceptOnScroll = (config, box) => {
  window.addEventListener('scroll', function _listener() {
    if(amountScrolled()) {
      acceptCookies(config, box);
      window.removeEventListener('click', _listener);
    }
  });
};

const getCookie = (name) => {
	if (document.cookie.length) {
		let nameEQ = name + '='
		let ca = document.cookie.split(';')

		for (let i = 0; i < ca.length; i++) {
			let c = ca[i]

			while (c.charAt(0) === ' ') {
				c = c.substring(1, c.length);
			}

			if (c.indexOf(nameEQ) === 0) {
				return c.substring(nameEQ.length, c.length);
			}
		}
	}

	return null;
};

const setCookie = (name, value, exdays, path) => {
	let d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	let expires = 'expires='+ d.toUTCString();

	document.cookie = name + '=' + value + ';' + expires + ';path='+(path ? path : '/');
};