let prevScrollPos = window.pageYOffset
const header = document.querySelector(".header")

window.onscroll = function () {
  const currentScrollPos = window.pageYOffset

  if (currentScrollPos === 0) {
    header.classList.add("sticky")
  } else if (prevScrollPos > currentScrollPos) {
    header.classList.add("sticky")
  } else {
    header.classList.remove("sticky")
  }

  prevScrollPos = currentScrollPos
}
