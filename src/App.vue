<template>
  <div id="app2">
    <h1>markdown-it vue sandbox</h1>
    <h2>special shot out to parcel!</h2>
    <div v-html="bio"></div>
  </div>
</template>

<script>
import MarkdownIt from "markdown-it";

import Bio from "./content/bio.md";

export default {
  computed: {
    bio() {
      const md = new MarkdownIt();
      return md.render(Bio);
    }
  }
};
</script>

