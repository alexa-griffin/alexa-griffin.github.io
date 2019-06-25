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
<body className="home">
  <section className="hero">
    <div className="txt">
      <h1>Hi</h1>
      <h3>I'm Alexa</h3>
      <h4>I make pretty & functional things with code</h4>
    </div>
    <nav>
      <a href="#">about me</a>
      <a href="#">my projects</a>
      <a href="contact.html">get in touch</a>
    </nav>
    <div className="code">
      <div className="code-block">
        <pre>
          <code className="language-cpp">
{`
float localOffX, localOffY;

if(dA != 0) 
{
  localOffX = 2 * sin(dA / 2) * ((dS / dA) + sR);
  localOffY = 2 * sin(dA / 2) * ((dM / dA) + sM);
} 
else 
{
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
window.addEventListener("mousemove", e => {
  for(let i = 0; i < codeBlocks.length; i++) {
    codeBlocks[i].style.transform = \`translate(
      \${(e.clientX - window.innerWidth / 2) * scalars[i].x}px, 
      \${(e.clientY - window.innerHeight / 2) * scalars[i].y}px)
    \`
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
  <section className="about" id="about">
    <canvas id="c"></canvas>
    <div className="col">
      <h1>About me</h1>
      <p>
        I am a programmer, game maker, UI & UX designer, amateur mathematician, 
        web developer, open source idealist, and robotics enthusiast. Officially 
        I do front end webapp development however, I prefer to think of my work 
        as a constant stream of learning opportunities. I love what 
        I do and try to learn from everything my work is no exception.
      </p>
      <p>
        Other than content creation, programming, and being a student, 
        I enjoy coffee, tea, sleep when I can get it, and cats.
      </p>
    </div>
  </section>
  <section className="projects" id="projects">
    <h1>Projects</h1>
    <div className="cards">
      {
        markupData.projects.map((project, i) => (
          <a href={ "./projects/" + project.fileName }>
            <p className="num">{ i + 1 }</p>
            <div className="card">
              <h1>{ project.title }</h1>
              <p className="desc">{ project.shortDesc }</p>
              <div style={{ backgroundImage: `url(${project.thumb})` }} className="thumb"></div>
            </div>
          </a>
        ))
      }
    </div>
    <p>More coming soon</p>
  </section>
  <script src="assets/prism.js"></script>
  <script src="assets/main.js"></script>
  <script src="assets/canvas.js"></script>
</body>
</html>
)