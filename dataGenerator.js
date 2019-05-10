const fs = require("fs")


fs.writeFileSync("./data.js", `
module.exports = {
  name: "hello",
  testPages: [
    {
      fileName: "page1",
      content: "page 1 content"
    },
    {
      fileName: "page2",
      content: "page 2 content"
    },
    {
      fileName: "page3",
      content: "page 3 content"
    },
  ]
}
`)