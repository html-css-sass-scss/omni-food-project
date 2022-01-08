// require the module as normal
const bs = require("browser-sync").create();

const config = {
  // watch: true,
  files: ["css/style.css", "js/*.js", "index.html"],
  open: false,
  port: 8080,
  server: ".",
};

// .init starts the server
bs.init(config);
