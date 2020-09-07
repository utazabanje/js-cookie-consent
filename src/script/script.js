export const cookieConsent = (config) => {
  let cookieAvailable = getCookie(config?.cookieName);
  let acceptAllKeysArray = [];
  let box = document.createElement('div');
  let mainTextBox = createMainTextBox(config?.message, config?.learnMore);
  let toggleBoxInner = createMainToggleBox(config, box)
  box.setAttribute('id', 'js-cookie-consent-box');
  box.classList.add('slide-up');
  
  if (cookieAvailable !== null) {
    box.style.display = "none";
    return;
  } else {
    for (let i = 0; i < config?.options.length; i++) {
      acceptAllKeysArray.push(config?.options[i].key);
    }

    box.appendChild(mainTextBox)
    box.appendChild(toggleBoxInner)
    let actionBtns = createActionButtonBox(config, acceptAllKeysArray, box);
    box.appendChild(actionBtns)

    document.body.appendChild(box)

    acceptOnScroll(config?.expiration, box, acceptAllKeysArray);
  }
};

const createMainTextBox = (text, link) => {
  let textBox = document.createElement('div');
  let message = createMessage(text)
  let linkBtn = createLearnMoreBox(link)
  textBox.classList.add('js-cookie-consent-main-text-box');
  textBox.appendChild(message);
  textBox.appendChild(linkBtn)

  return textBox
}

const createMessage = (text) => {
  let message = document.createElement('p');
  message.classList.add('title')
  message.innerHTML = text

  return message
}

const createLearnMoreBox = (link) => {
  let learnMoreBox = document.createElement('span');
  let linkBtn = createLearnMoreLink(link)
  learnMoreBox.classList.add('learn-more-box');
  learnMoreBox.appendChild(linkBtn)

  return learnMoreBox;
}

const createLearnMoreLink = (link) => {
  if (link === undefined || link === null || link?.length === 0) {
    return;
  } else {
    let learnMore = document.createElement("a");
    learnMore.innerHTML = "Learn More";
    learnMore.setAttribute("href", link);
    learnMore.setAttribute("target", "_blank");
    learnMore.setAttribute("rel", "noopener noreferrer");
    learnMore.classList.add("learn-more");

    return learnMore;
  }
};

const createMainToggleBox = (config, mainBox) => {
  let box = document.createElement('div');
  let keysArray = [];
  let acceptAllKeysArray = [];
  let saveBtn = createSaveCookieBox(mainBox, config?.expiration, config?.color);

  box.classList.add('js-cookie-consent-toogle-box');

  if (config?.options.length > 0) {
    for (let i = 0; i < config?.options.length; i++) {
      createToggleBtns(box, config?.options[i], config?.color);
      if (config.options[i].checked) {
        keysArray.push(config?.options[i].key);
      }

      acceptAllKeysArray.push(config?.options[i].key);
    }

    sessionStorage.setItem("categories", JSON.stringify(keysArray));
  }

  box.appendChild(saveBtn)

  return box
}

const createToggleBtns = (elem, options, color) => {
  let innerBox = crateToggleContainerElement();
  let title = createTitleElement(options?.title);
  let description = createDescriptionElement(options?.description);
  let label = createLabelElement(options?.key);
  let input = createInputElement(options?.checked);
  let slider = createSliderElement(options, color);

  label.appendChild(input);
  label.appendChild(slider);
  innerBox.appendChild(title);
  innerBox.appendChild(label);
  innerBox.appendChild(description);
  
  elem.appendChild(innerBox)
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

const createActionButtonBox = (config, keys, box) => {
  let btnBox = document.createElement('div');
  let accept = createAcceptBtn(config?.expiration, box, config?.color, keys)
  let openSettings = createOpenSettingsBtn(box)
  btnBox.classList.add('btn-box');

  btnBox.appendChild(accept);
  btnBox.appendChild(openSettings)

  return btnBox
}

const createAcceptBtn = (expiration, box, color, keys) => {
  let acceptAllCookies = document.createElement("button");
  acceptAllCookies.innerHTML = "Accept all";
  acceptAllCookies.setAttribute("id", "acceptAllCookies");
  acceptAllCookies.classList.add("btn", "accept");

  if (color) {
    acceptAllCookies.style.backgroundColor = color;
  }

  acceptAllCookies.addEventListener("click", () =>
    acceptCookies(expiration, box, keys)
  );

  return acceptAllCookies;
}

const createOpenSettingsBtn = (box) => {
  let openSettings = document.createElement("button");
  openSettings.innerHTML = "Cookie settings";
  openSettings.setAttribute("id", "openCookieSettings");
  openSettings.classList.add("btn", "open-settings");

  openSettings.addEventListener("click", () => {
    let isOpen = box.classList.contains("slide-up");
    box.setAttribute("class", isOpen ? "slide-down" : "slide-up");
  });

  return openSettings;
}

const createSaveCookieBox = (box, expiration, color) => {
  let saveBox = document.createElement('div');
  let btn = createSaveCookieBtn(box, expiration, color);
  saveBox.classList.add('save-cookies-btn-box');

  saveBox.appendChild(btn)

  return saveBox
}

const createSaveCookieBtn = (box, expiration, color) => {
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

  return saveCookie;
};

const createSliderElement = (options, color) => {
  let span = document.createElement("span");
  span.classList.add("slider", "round", options?.key);

  if (options?.disabled) {
    span.classList.add("disabled");
  }

  if (options?.checked) {
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
      toggleValueInArray(options?.key);
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
