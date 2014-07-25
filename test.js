var test = require('tape');
var ware = require('./');

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