module.exports = {
  name: "Alexa Griffin",
  projects: [
    {
      fileName: "omnisnote.html",
      title: "Omnisnote",
      shortDesc: "This is an on/off project that I am creating that is my perfect markdown editor. Because several friends and I are unsatisfied with all products we were able to find, I decided to make my own.",
      tech: [ "react", "firebase", "emotion" ],
      thumb: "./assets/omnisnote-thumb.png",
      link: "",
      sections: [
        {
          title: "Goals of this project",
          p: `My primary goal of this project was to create a service. Before doing this
          project I knew all the theory about creating an application however I did not know 
          many of the intricacies of building out a real application with actual users.
          Because I made this while in school my time was limited, and while this is still very 
          much an ongoing project it has taught me a lot about creating a production ready application.`
        },
        {
          title: "Functionality",
          p: `Much of this is still a work in progress however I still believe it is worthwhile to go into the original
          features intended for this project. This was primarily made for students, thus organization was key. In order to facilitate this
          folders, tags, and search functionality should all be very tightly interwoven. Accessibility was also a major consideration. Almost all aspects of text can be changed to improve readability.
          In addition to this one of the people who I know will be using this application cannot read dark text on a light background. Therefore themes were a consideration from day one.`
        },
      ]
    },
    {
      fileName: "personal-website.html",
      title: "Personal Website",
      shortDesc: "After years of not doing anything for my online presence, I decdied it would be good for me to create some kind of website, portfolio, and resume.",
      tech: [ "react", "SASS", "node.js", "babel", "" ],
      thumb: "./assets/personal-thumb.png"
    },
    // {
    //   fileName: "wiki-redesign.html",
    //   title: "Wikipedia Redesign",
    //   shortDesc: "",
    //   tech: [ "react", "APIs" ],
    //   thumb: "./assets/wiki-thumb.png"
    // },
  ]
}
