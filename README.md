# markdown-it - vue

## why?

I want to be able to write body copy/prose/narrative/marketing/brochure content/narrative/story content separate from writing the html where this content gets published, preferably in markdown.

I don't want to render markdown files as "pages" in the way that Gridsome seems to encourage. Rather, I want to think of the role of the markdown file as much smaller than that in scope - instead of a page, the markdown file represents one data point *in* a(ny) page. Instead of a title, front matter, and body copy as is the case with tradition blog use of markdown files, the use case I'm coming from is having a very static document, that has very obvious components of finite content, of a manageable scale for manual hands-on writing of html. But instead of writing this body copy in the html, I want to be able to write it in markdown.

Let's say I want to import this entire markdown file into a component. There's not much difference between this and a blog post, as there are multiple paragraphs, with a logical narrative.

TRUE!

However, this markdown file really represents the "about" data point. It just happens to be a data point with multiple paragraphs and logic. This markdown file is a good format for keeping track of this type of content; since the content is writing, it makes sense to maintain it over time in a markdown environment.

Q: Let's say I want to include the "about" data point, and the "built with" data point on the same page?

A: You just need to import the "built with" markdown file!

Put simply, I want the ability to render content from _multiple_ markdown files in a single component.

The aim of this project is to figure out a solution to import a markdown file and render it as html in a vue component, like a data or computed property.
