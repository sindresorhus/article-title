'use strict';
var cheerio = require('cheerio');

module.exports = function (html) {
	var $ = cheerio.load(html);

	var docTitle = $('title').text().replace(/\r?\n|\r/g, '');
	docTitle = (/^[^\|\-\/•—]+/.exec(docTitle) || [])[0] || docTitle;
	docTitle = ((docTitle || '').match(/\:(.*)/) || [])[1] || docTitle;
	docTitle = (docTitle || '').trim();

	var title = docTitle;

	var heading = $('.instapaper_title, .entry-title, .post-title, .pageTitle, .post_title, article h1, .headline h1, .headline, .story h1, .entry-header h1, .news_title, #page-post h1, .postheader h1, .postheader h2, .type-post h1').first().text().trim();

	if (heading.length > 10 && heading.length < 100) {
		title = heading;
	}

	return title.replace(/\r?\n|\r/g, '').trim();
};
