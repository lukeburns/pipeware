var oneway = require('oneway');

module.exports = pipeware;

function pipeware () {
	if (!(this instanceof pipeware)) {
		return new pipeware;
	}
	this.streams = [];
};

pipeware.prototype.use = function (stream) {
	this.streams.push(stream);
	return this;
}

pipeware.prototype.run = function () {
	var context = {};
	var args = arguments;
	return oneway.apply(null, this.streams.map(function (stream) {
		return !stream.pipe ? stream.apply(context, args) : stream;
	}));
}