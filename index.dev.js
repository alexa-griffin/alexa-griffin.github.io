// file watchers
const chokidar = require("chokidar")
const fs = require("fs")

// compilers
const babel = require("@babel/core")
const sass = require('node-sass')
const React = require('react')
const ReactDOMServer = require('react-dom/server')

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
    } else if(path.indexOf(".html.js") !== -1) {
      fs.readFile(path, "utf8", (err, data) => {
        if(!err) {
          try {
            fs.writeFile("./out/test.html", "<!DOCTYPE html>" + 
              ReactDOMServer.renderToString(eval(babel.transform(data, {
                plugins: ["@babel/plugin-transform-react-jsx"]
              }).code)), () => { })
          } catch (error) {
            console.log(error)
          }
        } else console.log(err)
      })
    }
  }, 500)
})