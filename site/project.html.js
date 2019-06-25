/*%--META--%
{
  "genForEach": {
    "objKey": "projects",
    "file": "/projects/%FILE%"
  }
}
%--META--%*/

(markupData, pageData) => (
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700,700i|Source+Code+Pro:600" rel="stylesheet" />
  <link rel="stylesheet" href="../style/style.css"/>
  <title>{ "Case study - " + pageData.title }</title>
</head>
<body className="project">
  <header>
    <nav>
      <a href="/index.html#about">about me</a>
      <a href="/index.html#projects">my projects</a>
      <a href="/contact.html">get in touch</a>
    </nav>
  </header>
  <section className="project">
    <h1>{ pageData.title }</h1>
    <p>{ pageData.shortDesc }</p>
    { pageData.link && <a href={ pageData.link }>find it live here!</a> }
    { pageData.sections.map(section => (<div>
      { section.title && <h2>{ section.title }</h2> }
      { section.p && <p>{ section.p }</p> }
    </div>)) }
  </section>
</body>
</html>
)