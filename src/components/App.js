import MarkdownIt from 'markdown-it';

import TheFooter from './TheFooter.js';
import Bio from '../content/bio.md';

export default {
  name: 'App',
  components: { TheFooter },
  computed: {
    bio() {
      const md = new MarkdownIt();
      return md.render(Bio);
    }
  },
  render() {
    return (
      <main>
        <h1>Brian Zelip</h1>
        <div v-html="bio" />
        <TheFooter />
      </main>
    );
  }
};
