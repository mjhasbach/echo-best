# Why Another JavaScript API

- [nestjs](https://github.com/echonest/nestjs/tree/master/src) - Out of date
- [node-echonest](https://github.com/badamson/node-echonest) - Out of date
- [echojs](https://github.com/tcr/echojs) - Tests failing due to incorrect dependency configuration. Tests failing with correct dependency configuration.
- [Echonest-jQuery-Plugin](https://github.com/Rodeoclash/Echonest-jQuery-Plugin) - Some tests failing
- [theechonest](https://github.com/playlist-media/theechonest) - Only supports certain API endpoints
- [angular-echonest](https://github.com/Kraku/angular-echonest) - Only supports certain API endpoints

# Features

All available Echo Nest API endpoints are supported. Browser, RequireJS, and Node environments are supported.

# Installation
### Npm
```
npm install echo-best --save
```
### Bower
```
bower install echo-best --save
```

# Examples
Before running any of the examples, the dependencies must be downloaded:
```
cd examples/shared && npm install
```
[Browser Examples](https://github.com/mjhasbach/echo-best/tree/master/examples/browser)

[RequireJS Examples](https://github.com/mjhasbach/echo-best/tree/master/examples/requirejs)

[Node Examples](https://github.com/mjhasbach/echo-best/tree/master/examples/node)

# Tests
Before running the tests, Mocha must be installed:
```
npm install -g mocha
```

To run the tests:
```
npm test
```