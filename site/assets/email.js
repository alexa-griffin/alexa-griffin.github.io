(() => {
  emailjs.init("user_3YVsyHoeSEFiHcxzCuwTo")

  window.onload = () => {
    document.getElementById("submit-btn").addEventListener("click", e => {
      emailjs.send("gmail", "template_0EcV5CGz", {
        from_name: "test",
        from_email: "other@other.com",
        message: "hello!",
      }).then(console.log).catch(console.log)
    })
  }
})()