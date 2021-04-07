# article-title

> Extract the article title of a HTML document

It's often quite hard to get the actual title of an article from a page as authors either add a bunch of trash to `<title>` or don't use it at all. There's also no standardized way to indicate the title of an article in the markup. This module uses some heuristics to extract it cleanly.

## Install

```
$ npm install article-title
```

## Usage

```js
import articleTitle from 'article-title';

const html = `
<!doctype html>
	<html>
		<head>
			<title>My awesome unicorn website</title>
		</head>
	<body>
		<article>
			<h1>How unicorns sleep</h1>
			<p>...</p>
		</article>
	</body>
</html>
`;

articleTitle(html);
//=> 'How unicorns sleep'
```

## Related

- [article-title-cli](https://github.com/sindresorhus/article-title-cli) - CLI for this module
