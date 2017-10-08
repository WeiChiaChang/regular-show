## regular-show
> Get random name of Regular Show

This name lists are just JSON files and you can use wherever.

## Installation
```shell
$ npm install --save regular-show
```

## Usage
```shell
var regularShow = require('regular-show');  // Conventional but classic way
import regularShow from 'regular-show';     // Or much more modern ES6  way

regularShow();
// Mordecai

regularShow();
// Rigby

regularShow.words;
// ['Mordecai', 'Rigby', ...]
```

## API
regularShow()

Type: `string`

Generate random character's name in Regular Show.

regularShow.names

Type: `array`

Fetch all of the names.

## CLI
```shell
$ npm i regular-show -g
```

```shell
$ npm regular-show --help
  
  Get random name of Regular Show

  Examples
    $ regular-show
    Mordecai

    $ regular-show --all
    Rigby
    Eileen
    Muscle Man
    ...

  Options
    --all  Fetch all the names rather than a random name
```

## License
MIT © [WeiChiaChang](https://github.com/WeiChiaChang)