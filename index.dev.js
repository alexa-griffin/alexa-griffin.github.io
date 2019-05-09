const chokidar = require("chokidar")
const sass = require('node-sass')
const fs = require("fs")

chokidar.watch("./site/", {}).on("all", (ev, path) => {
  console.log(ev, path)
  setTimeout(_ => { // hack to make node-sass work with vscode
    if(path.indexOf(".sass") !== -1) {
        sass.render({
        file: "./site/style/style.sass"
      }, (err, res) => {
        if(!err) {
          fs.writeFile("./out/style/style.css", res.css, () => {})
        } else console.log(err)
      })
    }
  }, 500)
})