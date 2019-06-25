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
      thumb: "./assets/personal-thumb.png",
      sections: [
        {
          title: "Goals",
          p: `This website is my face on the internet. It should showcase the very best of my work and serve as a
          way for people to find me. I wanted it to show all the things I love about front end web development`,
        },
        {
          title: "Design",
          p: `I love weird little interactions on websites. So I wanted to incorperate several of these into my site without it feeling overwhelming.
          I also wanted the first thing everyone sees to be a big flashy animation, followed by a little demo of a micro-interaction. This lead to the floating codeblocks 
          concept which I originally intended to be easily editable, however when this was implemented I found it somewhat tacky. So I went with a simple paralax effect instead.
          Next was the about section. This section has always bored me to death. So I kept it as brief as possible while still incorporating my ethos. Then because that seemed too heavy 
          I also added a blithe comment about how little sleep I get. The animation I am exteremely happy with. My start in javascript was little canvas expirements so it felt only fitting to 
          pay homage to that origin.`
        }
      ]
    },
    // {
    //   fileName: "desktop-tasks.html",
    //   title: "Google Tasks Desktop",
    //   shortDesc: "I love the Google Tasks phone application, but why doesn't it have a dedicated desktop application",
    //   tech: [ "vue", "APIs" ],
    //   thumb: "./assets/tasks-thumb.png",
    //   sections: [
    //     {
    //       // TODO: import this
    //     }
    //   ]
    // },
  ]
}
