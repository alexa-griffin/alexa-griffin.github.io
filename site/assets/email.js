(() => {
  emailjs.init("user_3YVsyHoeSEFiHcxzCuwTo")

  window.onload = () => {
    const nameI = document.getElementById("name")
    const emailI = document.getElementById("email")
    const messageI = document.getElementById("message")
    const errOut = document.getElementById("err")
    const ERR = "you forgot to fill out one of the above fields"

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
        }).then(console.log).catch(console.log)  
      }
    })
  }
})()