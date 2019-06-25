(() => {
  emailjs.init("user_3YVsyHoeSEFiHcxzCuwTo")

  window.onload = () => {
    const nameI = document.getElementById("name")
    const emailI = document.getElementById("email")
    const messageI = document.getElementById("message")
    const errOut = document.getElementById("err")
    const form = document.getElementById("contact-form")
    const ERR = "you forgot to fill out one of the above fields"
    const header = document.getElementById("header")
    document.getElementById("submit-btn").addEventListener("click", e => {
      e.preventDefault()
      errOut.innerText = ""
      if(nameI.value === "") {
        errOut.innerText = ERR
        nameI.classList.add("err")
      }
      if(emailI.value === "") {
        errOut.innerText = ERR
        emailI.classList.add("err")
      }
      if(messageI.value === "") {
        errOut.innerText = ERR
        messageI.classList.add("err")
      }

      if(errOut.innerText === "") {
        emailjs.send("gmail", "template_0EcV5CGz", {
          from_name: nameI.value,
          from_email: emailI.value,
          message: messageI.value,
        }).then(() => {
          header.innerText = "thanks for contacting me, I try to get back within a few days"
          form.classList.add("fade")
        }).catch(() => {
          errOut.innerText = "I'm sorry something went wrong, could you please try again"
        })  
      }
    })
  }
})()