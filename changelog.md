# changelog

This doc started at v1.0.0, on branch `jsx`.

1. Render content via jsx

- starting point: v1.0.0
- starging branch: jsx
- ending point: v1.1.0

@johno reached out about [MDX v1](https://github.com/mdx-js/mdx) and Vue. I remember listening to a [Full Stack Radio episode](http://www.fullstackradio.com/90) on using jsx in Vue and thinking,

> I gotta try that!

Here are the main resources I've looked into since his ping:

- https://github.com/mdx-js/mdx
- https://mdxjs.com/
- https://johno.com/authorable-format
- [What is MDX video](https://www.youtube.com/watch?v=d2sQiI5NFAM&list=PLV5CVI1eNcJgCrPH_e6d57KRUTiDZgs0u)
- Vue:
  1. https://vuejs.org/v2/guide/render-function.html
  2. https://vuejs.org/v2/api/#Instance-Properties, especially
     a. https://vuejs.org/v2/api/#vm-slots
     b. https://vuejs.org/v2/api/#vm-scopedSlots
  3. https://vuejs.org/v2/guide/render-function.html#Slots
  4. [JSX](https://vuejs.org/v2/guide/render-function.html#JSX)
  5. [Vue jsx installation](https://github.com/vuejs/jsx#installation)

Steps:

- let's get jsx up and running
- then let's get mdx up and running!

2. Render mdx

- starting point: v1.1.0
- ending point: v2.0.0
- starting branch: mdx
- steps:
  - **rename repo** to markdown-vue
  - get rid of markdown-it
  - implent mdx
