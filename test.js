import path from 'path';
import fs from 'fs';
import test from 'ava';
import articleTitle from './index.js';

function testHtml(t, file, result) {
	const html = fs.readFileSync(path.join('fixture', `${file}.html`), 'utf8');
	t.is(articleTitle(html), result);
}

testHtml.title = (providedTitle, file) => file;

test(testHtml, 'html5rocks', 'Yo Polymer – A Whirlwind Tour Of Web Component Tooling');
test(testHtml, 'shapeshed', 'Using the European npm mirror');
test(testHtml, 'rhumaric', 'Building a Yeoman generator');
test(testHtml, 'parkji', 'Using Yeoman to scaffold out new websites');
test(testHtml, 'codelittle', 'How To Use Yeoman');
test(testHtml, 'anthonyestebe', 'What Is Yeoman');
test(testHtml, 'agtlucas', 'Why you should use Yeoman');
test(testHtml, 'tylerhenkel', 'Angular Fullstack 1.2.0 available now');
test(testHtml, 'numediaweb', 'Web App with dream team; AngularJS, Cordova, Yeoman & Topcoat');
test(testHtml, 'github-repo', 'urls-md');
test(testHtml, 'yahoo', 'Yahoo');
test.failing(testHtml, 'youtube-wiki', 'Wikipedia: #Edit2014');
