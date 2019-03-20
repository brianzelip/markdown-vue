export default {
  name: 'TheFooter',
  data() {
    return {
      year: new Date().getFullYear()
    };
  },
  render() {
    return <p>&copy; Brian Zelip {this.year}</p>;
  }
};
