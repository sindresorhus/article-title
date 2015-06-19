#!/usr/bin/env node
'use strict';
var fs = require('fs');
var meow = require('meow');
var stdin = require('get-stdin');
var articleTitle = require('./');

var cli = meow({
	help: [
		'Usage',
		'  $ article-title <file>',
		'  $ curl <url> | article-title',
		'',
		'Example',
		'  $ curl http://updates.html5rocks.com/2014/06/Automating-Web-Performance-Measurement | article-title',
		'  Automating Web Performance Measurement'
	]
});

var input = cli.input[0];

function init(data) {
	console.log(articleTitle(data));
}

if (!input && process.stdin.isTTY) {
	console.error('Expected a filename');
	process.exit(1);
}

if (input) {
	init(fs.readFileSync(input, 'utf8'));
} else {
	stdin(init);
}
