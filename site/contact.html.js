(markupData, pageData) => (
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700,700i|Source+Code+Pro:600" rel="stylesheet" />
  <link rel="stylesheet" href="style/style.css"/>
  <title>{ "Contact " + markupData.name }</title>
  <script type="text/javascript" src="https://cdn.emailjs.com/sdk/2.3.2/email.min.js"></script>
  <script type="text/javascript" src="assets/email.js"></script>
</head>
<body className="ctn-bty">
  <section className="contact">
    <h1 id="header">Contact Me</h1>
    <form id="contact-form">
      <div className="sender">
        <input id="name" type="text" placeholder="what should I call you?"/>
        <input id="email" type="email" placeholder="what's your email?"/>
      </div>
      <textarea id="message" placeholder="what would you like to talk to me about?"></textarea>
      <input type="submit" id="submit-btn" value="submit" />
    </form>
    <p id="err"></p>
    <nav>      
      <a href="/index.html#about">about me</a>
      <a href="/index.html#projects">my projects</a>
      <a href="#">get in touch</a>
    </nav>
  </section>
</body>
</html>
)