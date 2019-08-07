# SAuth

SAuth is a social authentification module that works with access token

  - Supports Facebook, Twitter and Google
  - Unify all drivers in one module
  - Easy api

## Usage
Install the dependency
### Npm
```sh
npm install sauth-token
```
### Yarn
```sh
yarn add sauth-token
```
### Setup
```javascript
const SAuth = require('sauth-token');
const sAuth = new SAuth({
  facebook: {
    fields: ['id', 'first_name', 'last_name', 'birthday', 'email', 'picture']
  },
  twitter: {
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET
  },
  google: { // Not Required
      
  }
})
```

### Facebook
#### Promise
```javascript
sAuth.driver('facebook')
    .getUserByToken(<access_token>)
    .then(user => {
      console.log(user);
    })
    .catch(error => {
        console.error(error)
    });
```
#### Async/Await
```javascript
try {
    const user = await sAuth.driver('facebook')
        .getUserByToken(<access_token>);

    console.log(user);
} catch(error) {
    console.error(error)
}
```
### Twitter
#### Promise
```javascript
sAuth.driver('twitter')
    .getUserByToken(<access_token>, <access_secret>)
    .then(user => {
      console.log(user);
    })
    .catch(error => {
        console.error(error)
    });
```
#### Async/Await
```javascript
try {
    const user = await sAuth.driver('twitter')
        .getUserByToken(<access_token>, <access_secret>);

    console.log(user);
} catch(error) {
    console.error(error)
}
```
### Google
#### Promise
```javascript
sAuth.driver('google')
    .getUserByToken(<access_token>)
    .then(user => {
      console.log(user);
    })
    .catch(error => {
        console.error(error)
    });
```
#### Async/Await
```javascript
try {
    const user = await sAuth.driver('google')
        .getUserByToken(<access_token>);

    console.log(user);
} catch(error) {
    console.error(error)
}
```
## Development

Want to contribute? Great!

  - Clone the repository
  - Create a new branch
  - Make a change in your files and create your test files

Open your favorite Terminal and run the test command.
```sh
$ yarn run test
```

## Todos

 - Add support for other drivers
 - Add other export methods

## Author
Sami Ayed - Software Engineer and Tech Lead
Contact: m.ayed.sami@gmail.com

License
----

MIT


**Free Software, Hell Yeah!**
