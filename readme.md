# article-title [![Build Status](https://travis-ci.org/sindresorhus/article-title.png?branch=master)](https://travis-ci.org/sindresorhus/article-title)

> Extract the article title of a HTML document

It's often quite hard to get the actual title of an article from a page as authors either add a bunch of trash to `<title>` or don't use it at all. There's also no standardized way to indicate the title of an article in the markup. This module uses various ways for extracting it cleanly.


## Install

```
npm install --save article-title
```


## Example

```js
var articleTitle = require('article-title');
var htmlDocument = '<!doctype html><html><head><title>My awesome unicorn website</title></head><body><article><h1>How unicorns sleep</h1><p>...</p></body></html>';

articleTitle(htmlDocument);
//=> How unicorns sleep
```


## CLI

You can also use it as a CLI app by installing it globally:

```
npm install --global article-title
```

### Usage

```
$ article-title -h

article-title <html-document>
or
cat <html-document> | article-title
```


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
