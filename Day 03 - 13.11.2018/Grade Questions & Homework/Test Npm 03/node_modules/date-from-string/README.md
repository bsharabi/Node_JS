[![Build Status](https://travis-ci.org/sbtnh/date-from-string.svg?branch=master)](https://travis-ci.org/sbtnh/date-from-string)
[![Coverage Status](https://coveralls.io/repos/github/sbtnh/date-from-string/badge.svg?branch=master)](https://coveralls.io/github/sbtnh/date-from-string?branch=master)

# date-from-string
Take a string date and convert it into a date.

# Why?!
The little story is that while playing with dates, I stumble upon this issue: 

<img src="https://pbs.twimg.com/media/Djr2_mMX4AAbp9a.jpg" />

I tweeted my surprise, and [Matt Johnson](https://twitter.com/mj1856) who knows about dates, helped me understand basically that dates in JavaScript was a mess.

> The Date constructor is only required to recognize ISO8601 compliant strings (which have two-digits in months and days fields).  When it does, they are treated as being at UTC midnight instead of local midnight - which is opposite of ISO8601, but a requirement of ECMAScript.

> Your 1st example is being treated as UTC because of this.

> Your 2nd example is non-iso compliant, but Chrome has decided to parse it as local time (implementation specific behavior).

> Your 3rd example is iso-compliant, but is treated as local time by the spec because it has a time

[Here's the small thread on Twitter](https://twitter.com/sebhiticas/status/1025406070351712256)

So this helper helps create dates in a more predictable way. If you have any issues, just let me know!

## Installation 
```sh
npm install date-from-string --save
yarn add date-from-string
bower install date-from-string --save
```
## Usage
### Javascript
```javascript
var dfs = require('date-from-string');

// same as new Date(2013, 10, 14)
dfs.parse('2013-11-14');

// same as new Date(2013, 0, 1)
dfs.parse('2013-01-01') === dfs.parse('2013-1-1');

// new Date('2013-11-14T00:00:00.000Z')
dfs.parse('2013-11-14T00:00:00.000Z');

/** You can also override time **/

// same as new Date(2013, 10, 14, 15, 49, 30, 12)
dfs.parse('2013-11-14', 15, 49, 30, 12);

// Or also with a full date and time
// same as new Date(2013, 0, 1, 15, 49, 30, 12)
dfs.parse('2013-01-01T00:00:00.000Z', 15, 49, 30, 12);
```
### TypeScript
```typescript
import { parse } from 'date-from-string';
console.log(parse('2013-01-01'))
```
### AMD
```javascript
define(function(require,exports,module){
  var dfs = require('date-from-string');
});
```
## Test 
```sh
npm run test
```