(markupData, pageData) => (
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700,700i|Source+Code+Pro:600" rel="stylesheet" />
  <link rel="stylesheet" href="style/style.css"/>
  <title>{ markupData.name }</title>
</head>
<body>
  <section className="hero">
    <div className="txt">
      <h1>Hi</h1>
      <h3>I'm Alexa,</h3>
      <h4>I make pretty things with code</h4>
        <nav>
          <a href="#">about me</a>
          <a href="#">my projects</a>
          <a href="#">get in touch</a>
        </nav>
    </div>
    <div className="code">
      <div className="code-block">
        <pre>
          <code className="language-cpp">
{`
float localOffX, localOffY;

if(dA != 0) {
  localOffX = 2 * sin(dA / 2) * ((dS / dA) + sR);
  localOffY = 2 * sin(dA / 2) * ((dM / dA) + sM);
} else {
  localOffX = dS;
  localOffY = dM;
}

`}      
          </code>
        </pre>
      </div>
      <div className="code-block">
        <pre>
          <code className="language-javascript">
{`
siteData.forEach((data) => {
  try {
    fs.writeFile("./out/" + data.outFileName, "<!DOCTYPE html>" +
      ReactDOMServer.renderToString(eval(babel.transform("(" + markup + ")(markupData, data)", {
        plugins: ["@babel/plugin-transform-react-jsx"]
      }).code)), () => {})
  } catch (error) {
    console.log(error)
  }
})

`}
        </code></pre>
      </div>
      <div className="code-block">
        <pre>
          <code className="language-sass">
{`
.card, .img
  box-shadow: 0 8px 24px 8px rgba($main, 0.15)
  border-radius: 8px
  position: absolute
  width: $width * 0.8
  height: $height * 0.8

`}
          </code>
        </pre>
      </div>
    </div>
  </section>
  <div style={{ height: "2000px" }}></div>
  <script src="assets/prism.js"></script>
  <script src="assets/main.js"></script>
</body>
</html>
)