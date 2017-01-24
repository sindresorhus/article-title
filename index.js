'use strict';
const cheerio = require('cheerio');

const matchers = [
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

const clean = str => str.replace(/\r?\n|\r/g, '').replace(/\s+/g, ' ').trim();

const findSelectorMatch = $ => {
	for (const matcher of matchers) {
		const el = $(matcher).first().text().trim();

		if (el && el.length > 0) {
			return el;
		}
	}
};

module.exports = html => {
	const $ = cheerio.load(html);

	let docTitle = $('title').text().replace(/\r?\n|\r/g, '');
	docTitle = (/^[^|\-/•—]+/.exec(docTitle) || [])[0] || docTitle;
	docTitle = ((docTitle || '').match(/:(.*)/) || [])[1] || docTitle;
	docTitle = (docTitle || '').trim();

	let title = docTitle;
	const heading = findSelectorMatch($);

	if (heading && heading.length > 5 && heading.length < 100) {
		title = heading;
	}

	return clean(title);
};
