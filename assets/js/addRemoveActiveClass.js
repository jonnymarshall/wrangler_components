const myFunction = () => {
  const colorSwatches = document.querySelectorAll(".color-swatch")

  colorSwatches.forEach((el) => {
    el.addEventListener("click", (e) => {
      const parentCarousel = document.getElementById(e.target.parentElement.dataset.target.slice(1))
      const allSiblingSwatches = parentCarousel.querySelectorAll(".color-swatch")

      allSiblingSwatches.forEach((swatch) => {
        if (swatch.classList.contains('active')) {
          swatch.classList.remove('active')
        }
      })
      el.classList.add('active')
    })
  }) 
}

myFunction();