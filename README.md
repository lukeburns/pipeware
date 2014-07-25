pipeware
========

For making stream-based middleware

### Usage
```
var ware = require('pipeware');
var mw = ware();
mw.use(function (file_path) {
  return fs.createReadStream(file_path)
}).use(function (file_path) {
  if (file_path.indexOf('.gz') != -1) {
    return require('zlib').createGunzip(file_path);
  }
});
mw.run('README.md.gz').pipe(process.stdout);
```

### Installation
```
npm install pipeware
```