# js-cookie-consent

[JS Cookie Consent](https://utazabanje.github.io/js-cookie-consent/) is a JavaScript library for showing cookie consent notice on your webiste.

#### How to use it:

You can get the library via ```npm```

```npm i ```


```
cookieConsent({
  cookieName: 'cookiesGDPR',
  title: 'We use 🍪 to provide you with the...',
  messages: [
    {
      title: 'Essential cookies',
      description: 'These cookies are strictly necessary to provide you...',
      key: 'essential',
      disabled: true,
      checked: true
    },
    {
      title: 'Marketing personalisation / retargeting cookies',
      description: 'These cookies and pixels are used to make advertising...',
      key: 'marketing',
      disabled: false,
      checked: false
    },
    {
      title: 'Marketing analytics cookies',
      description: 'These cookies collect information that is...',
      key: 'analytics',
      disabled: false,
      checked: false
    }
  ],
  learnMore: 'https://www.cookie.com/gdpr',
  expiration: 7,
  color: '#6666ff'
});
```


##### Params

| key     | value | type | requred
| ---      | ---   | --- | --- |
| cookieName | name of the cookie that is going to be saved   | string  | true
| title     | main message that is going to be displayed in the cookie     | string   | true
| messages | array of toggle checkboxes and text | array | true
| messages[title] | array of toggle checkboxes and text | string | true
| messages[description] | array of toggle checkboxes and text | string | true
| messages[key] | key value that will be stored in ```cookieName array``` | string | true
| messages[disabled] | array of toggle checkboxes and text | bool | true
| messages[checked] | array of toggle checkboxes and text | bool | true
| learnMore | link to your cookie info page | string   | optional
| expiration | number of days to save the cookie | number | true
| color | color of the buttons and toggle checkboxes | string (text, hex,rgb,rgba) | optional
