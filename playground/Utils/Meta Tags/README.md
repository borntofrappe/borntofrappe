# Meta Tags

The `<head>` of a document details a series of tags with additional information regarding the page.

## rss

The `.xml` file describing the structure for RSS feed is included with a `<link>` tag and the particular type of `application/rss+xml`.

## icon

The icon displayed in the browser's tab is set with different dimensions and formats. The vector graphic describes a rocket, and the `.png` variants are created in the `PNG Icons` project from the sharo syntax.

## og

After the link locating the ions, the idea is to provide meta information in the form of the page's title, description and URL. This is where the tags start to change according to the specific page. Indeed the title, description and URL depend on the particular route. Other information like the name of the website as a whole, or the the website own language is instead shared by every possible page.

The `og` tags also introduce meta information in the form of an image, which leads to the `twitter` counterpart.

## twitter

The idea is to include the image created through the logic described in the `OpenGraph Image` demo. It is important to mention the size of the image, a rectangle of `1000x500`, and the type of the card, `summary_large_image`. The size of the image can change in a range of acceptable values, but what matters is that the card has a `2:1` aspect ratio.

## article

The tags are commented out since I haven't found a usefulness for the connected tags. These allow to customize a page, perhaps a page dedicated to a blog post, detailing a date and keyword(s).
