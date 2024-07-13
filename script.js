function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // altera imagem de perfil
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }

  if (html.classList.contains("light")) {
    img.setAttribute("alt", "Foto do Bernardo de Óculos")
  } else {
    img.setAttribute("alt", "Foto do Bernardo")
  }
}
