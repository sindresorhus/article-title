/**
Extract the article title of a HTML document.

@param html - The HTML string to extract the title from.
@returns The extracted article title.

@example
```
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
*/
export default function articleTitle(html: string): string;
