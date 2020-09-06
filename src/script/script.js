const cookieConsent = (config) => {
  let cookieAvailable = getCookie(config?.cookieName);
  let box = document.getElementById("js-cookie-consent-box");
  let cookieToggleBox = document.querySelector(".js-cookie-consent-toogle-box");
  let mainTitle = document.querySelector(".title");
  let learnMoreBoxContainer = document.querySelector(".learn-more-box");
  let saveCookieBoxContainer = document.querySelector(".save-cookies-btn-box");
  let btnBoxContainer = document.querySelector(".btn-box");
  let keysArray = [];
  let acceptAllKeysArray = [];

  if (cookieAvailable !== null) {
    box.style.display = "none";
    return;
  } else {
    cookieToggleBox.style.display = "none";
    mainTitle.innerHTML = config?.title;

    if (config?.messages.length > 0) {
      for (let i = config?.messages.length - 1; i >= 0; i--) {
        createToggleBtns(cookieToggleBox, config?.messages[i], config?.color);
        if (config.messages[i].checked) {
          keysArray.push(config?.messages[i].key);
        }

        acceptAllKeysArray.push(config?.messages[i].key);
      }

      sessionStorage.setItem("categories", JSON.stringify(keysArray));
    }

    acceptOnScroll(config?.expiration, box, acceptAllKeysArray);

    createLearnMoreLink(learnMoreBoxContainer, config?.learnMore);
    createSaveCookieBtn(
      saveCookieBoxContainer,
      box,
      config?.expiration,
      config?.color
    );
    createAcceptAndSettingsBtn(
      btnBoxContainer,
      box,
      cookieToggleBox,
      acceptAllKeysArray,
      config?.expiration,
      config?.color
    );
  }
};

const createLearnMoreLink = (elem, link) => {
  if (link === undefined || link === null || link?.length === 0) {
    return;
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

const createSaveCookieBtn = (elem, box, expiration, color) => {
  let saveCookie = document.createElement("button");
  saveCookie.innerHTML = "Save cookie settings";
  saveCookie.setAttribute("id", "saveCookieSettings");
  saveCookie.classList.add("btn", "save-cookies");

  if (color) {
    saveCookie.style.backgroundColor = color;
  }

  saveCookie.addEventListener("click", () => {
    let savedCookies = sessionStorage.getItem("categories");

    setCookie("cookiesGDPR", savedCookies, expiration);
    box.style.display = "none";
  });

  elem.appendChild(saveCookie);
};

const createAcceptAndSettingsBtn = (
  elem,
  box,
  toggleBox,
  keys,
  expiration,
  color
) => {
  let acceptAllCookies = document.createElement("button");
  let openSettings = document.createElement("button");
  acceptAllCookies.innerHTML = "Accept all";
  acceptAllCookies.setAttribute("id", "acceptAllCookies");
  acceptAllCookies.classList.add("btn", "accept");
  openSettings.innerHTML = "Cookie settings";
  openSettings.setAttribute("id", "openCookieSettings");
  openSettings.classList.add("btn", "open-settings");

  if (color) {
    acceptAllCookies.style.backgroundColor = color;
  }

  acceptAllCookies.addEventListener("click", () =>
    acceptCookies(expiration, box, keys)
  );

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

const createToggleBtns = (elem, message, color) => {
  let innerBox = crateToggleContainerElement();
  let title = createTitleElement(message?.title);
  let description = createDescriptionElement(message?.description);
  let label = createLabelElement(message?.key);
  let input = createInputElement(message?.checked);
  let slider = createSliderElement(message, color);

  label.appendChild(input);
  label.appendChild(slider);
  innerBox.appendChild(title);
  innerBox.appendChild(label);
  innerBox.appendChild(description);
  elem.insertBefore(innerBox, elem.childNodes[0]);
};

const crateToggleContainerElement = () => {
  let innerBox = document.createElement("div");
  innerBox.classList.add("js-cookie-consent-toogle-box-inner");

  return innerBox;
};

const createTitleElement = (title) => {
  let titleContainer = document.createElement("p");
  titleContainer.classList.add("settings-title");
  titleContainer.innerHTML = title;

  return titleContainer;
};

const createDescriptionElement = (description) => {
  let descriptionContainer = document.createElement("span");
  descriptionContainer.classList.add("settings-subtitle");
  descriptionContainer.innerHTML = description;

  return descriptionContainer;
};

const createSliderElement = (message, color) => {
  let span = document.createElement("span");
  span.classList.add("slider", "round", message?.key);

  if (message?.disabled) {
    span.classList.add("disabled");
  }

  if (message?.checked) {
    span.classList.add("checked");

    if (color) {
      span.style.backgroundColor = color;
    }
  }

  span.addEventListener("click", (e) => {
    if (e.target.className.includes("disabled")) {
      e.preventDefault();
    } else {
      if (e.target.className.includes("checked")) {
        e.target.classList.remove("checked");
        e.target.style.backgroundColor = "#ccc";
      } else {
        e.target.classList.add("checked");
        e.target.style.backgroundColor = color;
      }
      e.stopPropagation();
      toggleValueInArray(message?.key);
    }
  });

  return span;
};

const createLabelElement = () => {
  let label = document.createElement("label");
  label.classList.add("switch");

  return label;
};

const createInputElement = (checked) => {
  let input = document.createElement("input");
  input.setAttribute("type", "checkbox");

  if (checked) {
    input.setAttribute("checked", "");
  } else {
    input.removeAttribute("checked");
  }

  return input;
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

const acceptCookies = (config, box, keys) => {
  setCookie("cookiesGDPR", JSON.stringify(keys), config?.expiration);
  box.style.display = "none";
};

const amountScrolled = () => {
  return (
    window.innerHeight + document.documentElement.scrollTop ===
    document.documentElement.offsetHeight
  );
};

const acceptOnScroll = (config, box, keys) => {
  window.addEventListener("scroll", function _listener() {
    if (amountScrolled()) {
      acceptCookies(config, box, keys);
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
