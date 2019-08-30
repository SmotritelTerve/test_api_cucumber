# API testing with JavaScript : Cucumber JS

A test project learn API testing it with [request-promise](https://github.com/request/request-promise) and [Cucumber JS](https://cucumber.io/docs/installation/javascript/).

The [test API](https://github.com/fraigo/node-express-rest-api-example) is based on Node JS, Express and SQLite.

## Installation

Clone the project and run the server.

```node
npm start
```

## Usage

```node
npm test
```

## Endpoints and methods
GET localhost:8000/api/users

POST localhost:8000/api/user

GET localhost:8000/api/user/:id

PATCH localhost:8000/api/user/:id

DELETE localhost:8000/api/user/:id

## License
[MIT](https://choosealicense.com/licenses/mit/)

## Acknowledgments

The code to create the test server was taken from:
[developerhowto.com](https://developerhowto.com/2018/12/29/build-a-rest-api-with-node-js-and-express-js/)