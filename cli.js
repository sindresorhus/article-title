#!/usr/bin/env node
'use strict';
var fs = require('fs');
var stdin = require('get-stdin');
var pkg = require('./package.json');
var articleTitle = require('./');
var argv = process.argv.slice(2);
var input = argv[0];

function help() {
	console.log([
		'',
		'  ' + pkg.description,
		'',
		'  Usage',
		'    article-title <file>',
		'    curl <url> | article-title',
		'',
		'  Example',
		'    curl http://updates.html5rocks.com/2014/06/Automating-Web-Performance-Measurement | article-title',
		'    Automating Web Performance Measurement'
	].join('\n'));
}

function init(data) {
	console.log(articleTitle(data));
}

if (argv.indexOf('--help') !== -1) {
	help();
	return;
}

if (argv.indexOf('--version') !== -1) {
	console.log(pkg.version);
	return;
}

if (process.stdin.isTTY) {
	if (!input) {
		help();
		return;
	}

	init(fs.readFileSync(input, 'utf8'));
} else {
	stdin(init);
}
