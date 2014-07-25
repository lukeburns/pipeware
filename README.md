pipeware
========

For making stream-based middleware

### Usage
```
var ware = require('pipeware');
var middleware = ware();
middleware
.use(fs.createReadStream)
.use(function (file_path) {
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