// file watchers
const chokidar = require("chokidar")
const fs = require("fs")

// compilers
const babel = require("@babel/core")
const sass = require('node-sass')
const React = require('react')
const ReactDOMServer = require('react-dom/server')

// servers
const static = require('node-static')

const markupData = require("./data.js")
console.log(markupData)

// "compile"
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
          let markup
          let meta = {}
          if (data.indexOf("%--META--%") === 0) {
            meta = JSON.parse(data.substring(10, data.lastIndexOf("%--META--%")))
            markup = data.substring(data.lastIndexOf("%--META--%") + 10)
          } else {
            markup = data
          }
          try {
            fs.writeFile("./out/" + path.replace("\\", "/").replace("site/", "").replace(".js", ""), "<!DOCTYPE html>" + 
              ReactDOMServer.renderToString(eval(babel.transform("(" + markup + ")(markupData)", {
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

// serve

const server = new static.Server('./out')

require('http').createServer(function (request, response) {
  request.addListener('end', function () {
    server.serve(request, response);
  }).resume();
}).listen(8080)