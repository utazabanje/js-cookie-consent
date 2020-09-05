const cookieConsent = (config) => {
  sessionStorage.setItem("categories", JSON.stringify(["essential"]));
  let cookieAvailable = getCookie(config.cookieName);
  let box = document.getElementById("js-cookie-consent-box");
  let cookieToggleBox = document.querySelector(".js-cookie-consent-toogle-box");
  let switchBtn = document.querySelectorAll(".switch");
  let mainTitle = document.querySelector(".title");
  let learnMoreBox = document.querySelector(".learn-more-box");
  let saveCookieBox = document.querySelector(".save-cookies-btn-box");
  let btnBox = document.querySelector(".btn-box");

  if (cookieAvailable !== null) {
    box.style.display = "none";
    return;
  } else {
    cookieToggleBox.style.display = "none";
    mainTitle.innerHTML = config.title;

    switchBtn.forEach((item) => {
      item.addEventListener("click", (e) => {
        e.stopImmediatePropagation();
        e.preventDefault();

        if (e.target.className.includes("marketing")) {
          toggleChecked(e.target);
          toggleValueInArray("marketing");
        } else if (e.target.className.includes("analytics")) {
          toggleChecked(e.target);
          toggleValueInArray("analytics");
        }
      });
    });

    acceptOnScroll(config, box);

    createLearnMoreLink(learnMoreBox, config.learnMore);
    createSaveCookieBtn(saveCookieBox, box, config.expiration);
    createAcceptAndSettingsBtn(btnBox, box, cookieToggleBox, config.expiration);
  }
};

const createLearnMoreLink = (elem, link) => {
  if (link === undefined || link === null || link?.length === 0) {
    return
  } else {
    let learnMore = document.createElement("a");
    learnMore.innerHTML = "Learn More";
    learnMore.setAttribute("href", link);
    learnMore.setAttribute("target", "_blank");
    learnMore.setAttribute("rel", "noopener noreferrer");
    learnMore.classList.add("learn-more");

    elem.appendChild(learnMore);
  }
};

const createSaveCookieBtn = (elem, box, expiration) => {
  let saveCookie = document.createElement("button");
  saveCookie.innerHTML = "Save cookie settings";
  saveCookie.setAttribute("id", "saveCookieSettings");
  saveCookie.classList.add("btn", "save-cookies");

  saveCookie.addEventListener("click", () => {
    let savedCookies = sessionStorage.getItem("categories");

    setCookie("cookiesGDPR", savedCookies, expiration);
    box.style.display = "none";
  });

  elem.appendChild(saveCookie);
};

const createAcceptAndSettingsBtn = (elem, box, toggleBox, expiration) => {
  let acceptAllCookies = document.createElement("button");
  let openSettings = document.createElement("button");
  acceptAllCookies.innerHTML = "Accept all";
  acceptAllCookies.setAttribute("id", "acceptAllCookies");
  acceptAllCookies.classList.add("btn", "accept");
  openSettings.innerHTML = "Cookie settings";
  openSettings.setAttribute("id", "openCookieSettings");
  openSettings.classList.add("btn", "open-settings");

  acceptAllCookies.addEventListener("click", () => {
    setCookie(
      "cookiesGDPR",
      JSON.stringify(["essential", "marketing", "analytics"]),
      expiration
    );
    box.style.display = "none";
  });

  openSettings.addEventListener("click", () => {
    let isOpen = box.classList.contains("slide-up");
    box.setAttribute("class", isOpen ? "slide-down" : "slide-up");

    if (toggleBox.style.display === "none") {
      toggleBox.style.display = "block";
    } else {
      setTimeout(() => {
        toggleBox.style.display = "none";
      }, 750);
    }
  });

  elem.appendChild(acceptAllCookies);
  elem.appendChild(openSettings);
};

const toggleValueInArray = (value) => {
  let categories = sessionStorage.getItem("categories");
  let categoriesGDPR = JSON.parse(categories);
  let idx = categoriesGDPR.indexOf(value);

  if (idx !== -1) {
    categoriesGDPR.splice(idx, 1);
  } else {
    categoriesGDPR.push(value);
  }

  sessionStorage.setItem("categories", JSON.stringify(categoriesGDPR));
};

const toggleChecked = (el) => {
  let checked = el.parentNode.childNodes[1].hasAttribute("checked");
  return !checked
    ? el.parentNode.childNodes[1].setAttribute("checked", "")
    : el.parentNode.childNodes[1].removeAttribute("checked");
};

const acceptCookies = (config, box) => {
  setCookie(
    "cookiesGDPR",
    JSON.stringify(["essential", "marketing", "analytics"]),
    config.expiration
  );
  box.style.display = "none";
};

const amountScrolled = () => {
  return (
    window.innerHeight + document.documentElement.scrollTop ===
    document.documentElement.offsetHeight
  );
};

const acceptOnScroll = (config, box) => {
  window.addEventListener("scroll", function _listener() {
    if (amountScrolled()) {
      acceptCookies(config, box);
      window.removeEventListener("click", _listener);
    }
  });
};

const getCookie = (name) => {
  if (document.cookie.length) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(";");

    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];

      while (c.charAt(0) === " ") {
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
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();

  document.cookie =
    name + "=" + value + ";" + expires + ";path=" + (path ? path : "/");
};
