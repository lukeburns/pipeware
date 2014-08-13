pipeware
========

For making stream-based middleware. Built on [oneway](https://github.com/lukeburns/oneway).

### Usage
```
var ware = require('pipeware');
var mw = ware();
mw
.use(fs.createReadStream)
.use(function (file_path) {
  if (file_path.indexOf('.gz') != -1) {
    return require('zlib').createGunzip();
  }
});
mw.run('README.md.gz').pipe(process.stdout);
```

### Installation
```
npm install pipeware
```