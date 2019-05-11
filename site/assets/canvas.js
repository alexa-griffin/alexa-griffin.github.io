const canvas = document.getElementById("c")

const c = canvas.getContext("2d")
canvas.width = window.innerWidth * 0.4
canvas.height = window.innerHeight

let r = canvas.width / 4
let a = 0
let p = 0
let aP = 0

function animate() {
  requestAnimationFrame(animate)
  a += aP
  aP += (Math.random() - 0.5) * Math.PI / 20
  p += 1
  c.strokeStyle = "#000"
  c.beginPath()
  c.moveTo((canvas.width / 2) - (r * Math.cos(a)), p - (r * Math.sin(a)))
  c.lineTo((canvas.width / 2) + (r * Math.cos(a)), p + (r * Math.sin(a)))
  c.closePath()
  c.stroke()
}

animate()

