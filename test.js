'use strict';
var path = require('path');
var assert = require('assert');
var fs = require('fs');
var articleTitle = require('./');

function assertHTML(file, result) {
	var html = fs.readFileSync(path.join('fixture', file + '.html'), 'utf8');
	assert.strictEqual(articleTitle(html), result);
}

it('should get article title from a HTML document', function () {
	assertHTML('html5rocks', 'Yo Polymer – A Whirlwind Tour Of Web Component Tooling');
	assertHTML('shapeshed', 'Using the European npm mirror');
	assertHTML('rhumaric', 'Building a Yeoman generator');
	assertHTML('parkji', 'Using Yeoman to scaffold out new websites');
	assertHTML('codelittle', 'How To Use Yeoman');
	assertHTML('anthonyestebe', 'What Is Yeoman');
	assertHTML('agtlucas', 'Why you should use Yeoman');
	assertHTML('tylerhenkel', 'Angular Fullstack 1.2.0 available now');
	assertHTML('numediaweb', 'Web App with dream team; AngularJS, Cordova, Yeoman & Topcoat');
	assertHTML('github-repo', 'urls-md');
	assertHTML('youtube-wiki', 'Wikipedia: #Edit2014');
});

