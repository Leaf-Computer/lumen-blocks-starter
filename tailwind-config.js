module.exports = {
  content: [
    "./src/**/*.{rs,html,css}",
    // Include Lumen Blocks components
    `${process.env.HOME}/.cargo/git/checkouts/lumen-blocks-*/654c76c/blocks/src/**/*.rs`
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
