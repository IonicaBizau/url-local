# url-local [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![Version](https://img.shields.io/npm/v/url-local.svg)](https://www.npmjs.com/package/url-local) [![Downloads](https://img.shields.io/npm/dt/url-local.svg)](https://www.npmjs.com/package/url-local) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Checks if a given url is a local url or not.

## Installation

```sh
$ npm i --save url-local
```

## Example

```js
const isLocal = require("url-local");

console.log(isLocal("path/to/some/file"));
// true

console.log(isLocal("file://path/to/some/file"));
// true

console.log(isLocal("http://ionicabizau.net"));
// false
```

## Documentation

### `urlLocal(url)`
Checks if a given url is a local url or not.

#### Params
- **String** `url`: The local/remote url.

#### Return
- **Boolean** `true` if the url is local, `false` otherwise.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

## License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md