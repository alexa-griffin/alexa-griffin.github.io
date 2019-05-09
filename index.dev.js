const chokidar = require("chokidar")

chokidar.watch("./site/", {}).on("all", (ev, path) => {
  console.log(ev, path)
})