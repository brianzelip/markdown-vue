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
  4. [jsx in Vue.render()](https://vuejs.org/v2/guide/render-function.html#JSX)
  5. [Vue jsx](https://github.com/vuejs/jsx)

Steps:

- let's get jsx up and running
- then let's get mdx up and running!

2. Refactor App.vue into App.js

- starting point: v1.1.0
- ending point: v1.1.1
- starting branch: refactor-App
- steps:
  - refactor src/App.vue into src/components/App.js

Regarding the use of Vue's `v-html` directive in jsx, as is the case with App.js:

Use `domPropsInnerHTML`, not `v-html` in jsx!

via [stack overflow](https://stackoverflow.com/a/50002981/2145103) and [babel-plugin-transform-vue-jsx docs](https://github.com/vuejs/babel-plugin-transform-vue-jsx#difference-from-react-jsx)

3. Change repo name to markdown-vue

- starting point: v1.1.1
- ending point: v2.0.0
- starting branch: rename-repo
- steps:
  - update gh repo settings
  - update all link references to old URL in copy
  - update all link references to old url in code
  - update git configs all around

4. Render mdx

- starting point: v2.0.0
- ending point: v2.1.0
- starting branch: mdx
- steps:
  - get rid of markdown-it
  - implent mdx
