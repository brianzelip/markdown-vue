# markdown-it - vue

This is a simple proof of concept Vue app that renders some markdown [in a component](https://github.com/brianzelip/markdown-it-vue/blob/master/src/App.vue#L15-L18).

The aim of this project is to figure out a solution to import a markdown file into a Vue component to be rendered like any data or computed property.

See [the demo](https://markdown-it-vue.netlify.com).

## starring

- [Parcel](https://parceljs.org)
- [Vue](https://vuejs.org)
- [markdown-it](https://github.com/markdown-it/markdown-it)
- [parcel-plugin-markdown-string](https://github.com/jaywcjlove/parcel-plugin-markdown-string)

## guiding ideas

1. markdown files as components of prose/body copy/marketing text
2. markdown files as data, not as pages
3. maintain string data in markdown (an [authorable format](https://johno.com/authorable-format))
4. import one or more markdown files into Vue components

## background

I have a [simple home page](http://zelip.me) that contains an image, some links, and a bio. It's maintained in the classic, hands-on-html way.

The bio changes over time. As such, I'd like to refactor it out of the html and into its own isolated environment for maintenance, then import it wherever i want in the html.

Sure, the bio is just a string, and since I'm using Vue, why not just make a data property for this string? I could! But the string has a link in it, and I don't want to write html outside of html! Even if the string does not have a link in it, it's still nicer to maintain strings in markdown than html.

This repo was born from attempts at getting [Gridsome](https://gridsome.org) to generate my static home page from Vue components that render markdown content. However, Gridsome seems to only want to work with markdown files at page scale (file == page), not at the more granular data point scale (file == page *content*).

## Vue-related concerns with this approach

1. imposes pesky extra `<div>` wrapper that is not found in the [pure html version](https://github.com/brianzelip/brianzelip.github.io/blob/master/index.html#L67)
2. sends big ass js bundle down the pipe to the user, even though there is no js in use on the page

1 is acceptible, 2 is not.

## legacy brainstorm

I want to be able to write body copy/prose/narrative/marketing/brochure content/narrative/story content separate from writing the html where this content gets published, preferably in markdown.

I don't want to render markdown files as "pages" in the way that Gridsome seems to encourage. Rather, I want to think of the role of the markdown file as much smaller than that in scope - instead of a page, the markdown file represents one data point _in_ a(ny) page. Instead of a title, front matter, and body copy as is the case with tradition blog use of markdown files, the use case I'm coming from is having a very static document, that has very obvious components of finite content, of a manageable scale for manual hands-on writing of html. But instead of writing this body copy in the html, I want to be able to write it in markdown.

Let's say I want to import this entire markdown file into a component. There's not much difference between this and a blog post, as there are multiple paragraphs, with a logical narrative.

TRUE!

However, this markdown file really represents the "about" data point. It just happens to be a data point with multiple paragraphs and logic. This markdown file is a good format for keeping track of this type of content; since the content is writing, it makes sense to maintain it over time in a markdown environment.

Q: Let's say I want to include the "about" data point, and the "built with" data point on the same page?

A: Import them both!

Put simply, I want the ability to render content from one or more markdown files anywhere in any component.
