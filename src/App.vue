<template>
  <main>
    <h1>Brian Zelip</h1>
    <div v-html="bio"></div>
    <TheFooter></TheFooter>
  </main>
</template>

<script>
import MarkdownIt from "markdown-it";

import TheFooter from "./components/TheFooter.js";
import Bio from "./content/bio.md";

export default {
  components: { TheFooter },
  computed: {
    bio() {
      const md = new MarkdownIt();
      return md.render(Bio);
    }
  }
};
</script>

