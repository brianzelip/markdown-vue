import TheBio from '../content/bio.mdx';
import TheFooter from './TheFooter.js';

export default {
  name: 'App',
  components: { TheBio, TheFooter },
  render() {
    return (
      <main>
        <h1>Brian Zelip</h1>
        <TheBio />
        <TheFooter />
      </main>
    );
  }
};
