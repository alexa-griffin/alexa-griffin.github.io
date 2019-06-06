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

let markupData = require("./data.js")

fs.watch("./data.js", (ev, f) => {
  console.log("changed data.js")
  delete require.cache[require.resolve('./data.js')]
  markupData = require("./data.js")
})

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
          if (data.indexOf("/*%--META--%") === 0) {
            meta = JSON.parse(data.substring(12, data.lastIndexOf("%--META--%*/")))
            markup = data.substring(data.lastIndexOf("%--META--%*/") + 12)
          } else {
            markup = data
          }
          let siteData = [{
            outFileName: path.replace("\\", "/").replace("site/", "").replace(".js", "")
          }] // empty object to make it run once

          if (meta.genForEach) {
            markupData[meta.genForEach.objKey].forEach((objData, i) => {
              siteData[i] = objData
              siteData[i].outFileName = meta.genForEach.file.replace("%FILE%", objData.fileName)
            })
          }
          siteData.forEach((data) => {
            try {
              fs.writeFile("./out/" + data.outFileName, "<!DOCTYPE html>" +
                ReactDOMServer.renderToString(eval(babel.transform("(" + markup + ")(markupData, data)", {
                  plugins: ["@babel/plugin-transform-react-jsx"]
                }).code)), () => { })
            } catch (error) {
              console.log(error)
            }
          })
        } else console.log(err)
      })
    } else if(path.indexOf("assets") !== -1) {
      if(path.indexOf(".js") !== -1) {
        fs.readFile(path, "utf8", (err, data) => {
          if(!err) {
            fs.writeFile("./out/" + path.replace("\\", "/").replace("site/", ""), babel.transform(data, {
              minified: true,
              comments: false,
              presets: ["@babel/preset-env"]
            }).code, _ => {})
          } else console.log(err)
        })
      } else {
        fs.copyFile(path, "./out/" + path.replace("\\", "/").replace("site/", ""), () => {})
      }
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