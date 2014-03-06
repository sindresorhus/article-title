'use strict';
var cheerio = require('cheerio');

var matchers = [
	'.instapaper_title',
	'article h1',
	'.entry-content h1',
	'.markdown-body h1',
	'.entry-title',
	'.post-title',
	'.pageTitle',
	'.post_title',
	'.headline h1',
	'.headline',
	'.story h1',
	'.entry-header h1',
	'.news_title',
	'#page-post h1',
	'.postheader h1',
	'.postheader h2',
	'.type-post h1'
];

function clean (str) {
	return str.replace(/\r?\n|\r/g, '').replace(/\s+/g, ' ').trim();
}

function findSelectorMatch($) {
	for (var i = 0; i < matchers.length; i++) {
		var el = $(matchers[i]).first().text().trim();

		if (el && el.length > 0) {
			return el;
		}
	}
}

module.exports = function (html) {
	var $ = cheerio.load(html);

	var docTitle = $('title').text().replace(/\r?\n|\r/g, '');
	docTitle = (/^[^\|\-\/•—]+/.exec(docTitle) || [])[0] || docTitle;
	docTitle = ((docTitle || '').match(/\:(.*)/) || [])[1] || docTitle;
	docTitle = (docTitle || '').trim();

	var title = docTitle;
	var heading = findSelectorMatch($);

	if (heading.length > 5 && heading.length < 100) {
		title = heading;
	}

	return clean(title);
};
