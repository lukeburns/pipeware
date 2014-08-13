var test = require('tape');
var PassThrough = require('readable-stream/passthrough');
var Readable = require('readable-stream/readable');
var ware = require('./');

test('creates a pipeline', function (t) {
  t.plan(1);

  var source = new PassThrough;
  var destination = new PassThrough;

  var mw = ware();
  var arg = 'hello';

  var stream = mw.use(function (ing) {
    return str(ing);
  }).use(function () {
    return new PassThrough;
  }).run(arg);

  destination.on('data', function (data) {
    t.equal(data.toString(), arg);
  });

  stream.pipe(destination);
});

test('passes context through handlers', function (t) {
	t.plan(1);

	var mw = ware();
	mw.use(function (init) {
		this.value = init;
	}).use(function (init) {
		this.value += 1;
	}).use(function (init) {
		t.equal(this.value, init + 1);
	}).run(0);
});

function str (input) {
  var stream = new Readable;
  stream.push(input);
  stream.push(null);
  return stream;
}