# js-cookie-consent

[JS Cookie Consent](https://utazabanje.github.io/js-cookie-consent/) is a JavaScript library for showing cookie consent notice on your webiste.

#### How to use it:

You can get the library via ```npm```

```npm i ```


```
cookieConsent({
  cookieName: 'cookiesGDPR',
  title: 'We use 🍪 to provide you with the best browsing experience. The data collected by...',
  learnMore: 'https://www.cookie.com/gdpr',
  expiration: 7
});
```


##### Params

| key     | value | type | requred
| ---      | ---   | --- | --- |
| cookieName | value of the cookie that is going to be saved      | string  | true
| title     | main message that is going to be displayed in the cookie     | string   | true
| learnMore | link to your cookie info page | string   | optional
| expiration | number of days to save the cookie | number | true
