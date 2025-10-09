module.exports = {
  content: [
    "./src/**/*.{rs,html,css}",
    // Include Lumen Blocks components
    `${process.env.HOME}/.cargo/git/checkouts/lumen-blocks-*/e73f85f/blocks/src/**/*.rs`
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
