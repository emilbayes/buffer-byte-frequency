# `buffer-byte-frequency`

> Count the frequency of each byte in a buffer

## Usage

```js
'use strict'

var freq = require('buffer-byte-frequency')

freq(Buffer.from([0, 1, 2, 3])) // => [1, 1, 1, 1, 0, 0, 0, 0, 0, ...]

```

## API

#### `freq(buf)`

Counts the frequency of each byte, returning a 256 element array with counts for each byte.

## License

[ISC](LICENSE.md)
