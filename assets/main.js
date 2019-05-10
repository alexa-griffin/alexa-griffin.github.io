const codeBlocks = document.getElementsByClassName("code-block");
const scalars = [{
  x: 0.2,
  y: 0.1
}, {
  x: 0.1,
  y: -0.2
}, {
  x: -0.15,
  y: 0.15
}];
window.addEventListener("mousemove", e => {
  for (let i = 0; i < codeBlocks.length; i++) {
    codeBlocks[i].style.transform = `translate(
      ${(e.clientX - window.innerWidth / 2) * scalars[i].x}px, 
      ${(e.clientY - window.innerHeight / 2) * scalars[i].y}px)
    `;
  }
});