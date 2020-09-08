"use strict";

var cookieConsent = function cookieConsent(config) {
  if (config === null || config === undefined) {
    return;
  }

  var cookieAvailable = getCookie(config === null || config === void 0 ? void 0 : config.cookieName);
  var acceptAllKeysArray = [];
  var box = document.createElement("div");
  var mainTextBox = createMainTextBox(config === null || config === void 0 ? void 0 : config.message, config === null || config === void 0 ? void 0 : config.learnMore);
  var toggleBoxInner = createMainToggleBox(config, box);
  box.setAttribute("id", "js-cookie-consent-box");
  box.classList.add("slide-up");

  if (cookieAvailable !== null) {
    box.style.display = "none";
    return;
  } else {
    for (var i = 0; i < (config === null || config === void 0 ? void 0 : config.options.length); i++) {
      acceptAllKeysArray.push(config === null || config === void 0 ? void 0 : config.options[i].key);
    }

    box.appendChild(mainTextBox);
    box.appendChild(toggleBoxInner);
    var actionBtns = createActionButtonBox(config, acceptAllKeysArray, box);
    box.appendChild(actionBtns);
    document.body.appendChild(box);
    acceptOnScroll(config === null || config === void 0 ? void 0 : config.expiration, box, acceptAllKeysArray);
  }
};

var createMainTextBox = function createMainTextBox(text, link) {
  var textBox = document.createElement("div");
  var message = createMessage(text);
  var linkBtn = createLearnMoreBox(link);
  textBox.classList.add("js-cookie-consent-main-text-box");
  textBox.appendChild(message);
  textBox.appendChild(linkBtn);
  return textBox;
};

var createMessage = function createMessage(text) {
  var message = document.createElement("p");
  message.classList.add("title");
  message.innerHTML = text;
  return message;
};

var createLearnMoreBox = function createLearnMoreBox(link) {
  var learnMoreBox = document.createElement("span");
  var linkBtn = createLearnMoreLink(link);
  learnMoreBox.classList.add("learn-more-box");
  learnMoreBox.appendChild(linkBtn);
  return learnMoreBox;
};

var createLearnMoreLink = function createLearnMoreLink(link) {
  var emptyLink = document.createElement("a");
  var learnMore = document.createElement("a");
  learnMore.innerHTML = "Learn More";
  learnMore.setAttribute("href", link);
  learnMore.setAttribute("target", "_blank");
  learnMore.setAttribute("rel", "noopener noreferrer");
  learnMore.classList.add("learn-more");

  if (link === undefined || link === null || (link === null || link === void 0 ? void 0 : link.length) === 0) {
    return emptyLink;
  } else {
    return learnMore;
  }
};

var createMainToggleBox = function createMainToggleBox(config, mainBox) {
  var box = document.createElement("div");
  var keysArray = [];
  var acceptAllKeysArray = [];
  var saveBtn = createSaveCookieBox(mainBox, config === null || config === void 0 ? void 0 : config.expiration, config === null || config === void 0 ? void 0 : config.color);
  box.classList.add("js-cookie-consent-toogle-box", "closed");

  if ((config === null || config === void 0 ? void 0 : config.options.length) > 0) {
    for (var i = 0; i < (config === null || config === void 0 ? void 0 : config.options.length); i++) {
      createToggleBtns(box, config === null || config === void 0 ? void 0 : config.options[i], config === null || config === void 0 ? void 0 : config.color);

      if (config.options[i].checked) {
        keysArray.push(config === null || config === void 0 ? void 0 : config.options[i].key);
      }

      acceptAllKeysArray.push(config === null || config === void 0 ? void 0 : config.options[i].key);
    }

    sessionStorage.setItem("categories", JSON.stringify(keysArray));
  }

  box.appendChild(saveBtn);
  return box;
};

var createToggleBtns = function createToggleBtns(elem, options, color) {
  var innerBox = crateToggleContainerElement();
  var title = createTitleElement(options === null || options === void 0 ? void 0 : options.title);
  var description = createDescriptionElement(options === null || options === void 0 ? void 0 : options.description);
  var label = createLabelElement(options === null || options === void 0 ? void 0 : options.key);
  var input = createInputElement(options === null || options === void 0 ? void 0 : options.checked);
  var slider = createSliderElement(options, color);
  label.appendChild(input);
  label.appendChild(slider);
  innerBox.appendChild(title);
  innerBox.appendChild(label);
  innerBox.appendChild(description);
  elem.appendChild(innerBox);
  return innerBox;
};

var crateToggleContainerElement = function crateToggleContainerElement() {
  var innerBox = document.createElement("div");
  innerBox.classList.add("js-cookie-consent-toogle-box-inner");
  return innerBox;
};

var createTitleElement = function createTitleElement(title) {
  var titleContainer = document.createElement("p");
  titleContainer.classList.add("settings-title");
  titleContainer.innerHTML = title;
  return titleContainer;
};

var createDescriptionElement = function createDescriptionElement(description) {
  var descriptionContainer = document.createElement("span");
  descriptionContainer.classList.add("settings-subtitle");
  descriptionContainer.innerHTML = description;
  return descriptionContainer;
};

var createActionButtonBox = function createActionButtonBox(config, keys, box) {
  var btnBox = document.createElement("div");
  var accept = createAcceptBtn(config === null || config === void 0 ? void 0 : config.expiration, box, config === null || config === void 0 ? void 0 : config.color, keys);
  var openSettings = createOpenSettingsBtn(box);
  btnBox.classList.add("btn-box");
  btnBox.appendChild(accept);
  btnBox.appendChild(openSettings);
  return btnBox;
};

var createAcceptBtn = function createAcceptBtn(expiration, box, color, keys) {
  var acceptAllCookies = document.createElement("button");
  acceptAllCookies.innerHTML = "Accept all";
  acceptAllCookies.setAttribute("id", "acceptAllCookies");
  acceptAllCookies.classList.add("btn", "accept");

  if (color) {
    acceptAllCookies.style.backgroundColor = color;
  }

  acceptAllCookies.addEventListener("click", function () {
    return acceptCookies(expiration, box, keys);
  });
  return acceptAllCookies;
};

var createOpenSettingsBtn = function createOpenSettingsBtn(box) {
  var openSettings = document.createElement("button");
  openSettings.innerHTML = "Cookie settings";
  openSettings.setAttribute("id", "openCookieSettings");
  openSettings.classList.add("btn", "open-settings");
  openSettings.addEventListener("click", function () {
    var isOpen = box.classList.contains("slide-up");
    box.setAttribute("class", isOpen ? "slide-down" : "slide-up");
  });
  return openSettings;
};

var createSaveCookieBox = function createSaveCookieBox(box, expiration, color) {
  var saveBox = document.createElement("div");
  var btn = createSaveCookieBtn(box, expiration, color);
  saveBox.classList.add("save-cookies-btn-box");
  saveBox.appendChild(btn);
  return saveBox;
};

var createSaveCookieBtn = function createSaveCookieBtn(box, expiration, color) {
  var saveCookie = document.createElement("button");
  saveCookie.innerHTML = "Save cookie settings";
  saveCookie.setAttribute("id", "saveCookieSettings");
  saveCookie.classList.add("btn", "save-cookies");

  if (color) {
    saveCookie.style.backgroundColor = color;
  }

  saveCookie.addEventListener("click", function () {
    var savedCookies = sessionStorage.getItem("categories");
    setCookie("cookiesGDPR", savedCookies, expiration);
    box.style.display = "none";
  });
  return saveCookie;
};

var createSliderElement = function createSliderElement(options, color) {
  var span = document.createElement("span");
  span.classList.add("slider", "round", options === null || options === void 0 ? void 0 : options.key);

  if (options === null || options === void 0 ? void 0 : options.disabled) {
    span.classList.add("disabled");
  }

  if (options === null || options === void 0 ? void 0 : options.checked) {
    span.classList.add("checked");

    if (color) {
      span.style.backgroundColor = color;
    }
  }

  span.addEventListener("click", function (e) {
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
      toggleValueInArray(options === null || options === void 0 ? void 0 : options.key);
    }
  });
  return span;
};

var createLabelElement = function createLabelElement() {
  var label = document.createElement("label");
  label.classList.add("switch");
  return label;
};

var createInputElement = function createInputElement(checked) {
  var input = document.createElement("input");
  input.setAttribute("type", "checkbox");

  if (checked) {
    input.setAttribute("checked", "");
  } else {
    input.removeAttribute("checked");
  }

  return input;
};

var toggleValueInArray = function toggleValueInArray(value) {
  var categories = sessionStorage.getItem("categories");
  var categoriesGDPR = JSON.parse(categories);
  var idx = categoriesGDPR.indexOf(value);

  if (idx !== -1) {
    categoriesGDPR.splice(idx, 1);
  } else {
    categoriesGDPR.push(value);
  }

  sessionStorage.setItem("categories", JSON.stringify(categoriesGDPR));
};

var acceptCookies = function acceptCookies(config, box, keys) {
  setCookie("cookiesGDPR", JSON.stringify(keys), config === null || config === void 0 ? void 0 : config.expiration);
  box.style.display = "none";
};

var amountScrolled = function amountScrolled() {
  return window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight;
};

var acceptOnScroll = function acceptOnScroll(config, box, keys) {
  window.addEventListener("scroll", function _listener() {
    if (amountScrolled()) {
      acceptCookies(config, box, keys);
      window.removeEventListener("click", _listener);
    }
  });
};

var getCookie = function getCookie(name) {
  if (document.cookie.length) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");

    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];

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

var setCookie = function setCookie(name, value, exdays, path) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=" + (path ? path : "/");
};

module.exports = cookieConsent;