const productImageSwitcher = () => {
  const colorSwatches = document.querySelectorAll(".js-swatch")
  console.log(colorSwatches)

  colorSwatches.forEach((el) => {
    el.addEventListener("click", (e) => {
      const parentCarousel = document.getElementById(e.target.parentElement.dataset.target.slice(1))
      const allSiblingSwatches = parentCarousel.querySelectorAll(".js-swatch")
      const allProductImages = parentCarousel.querySelectorAll(".product-image")

      // Remove active class from previously active swatch
      allSiblingSwatches.forEach((swatch) => {
        if (swatch.classList.contains('active')) {
          swatch.classList.remove('active')
        }
      })

      allProductImages.forEach((image, i) => {
        // Hide previous image
        if (image.classList.contains('active')) {
          image.classList.remove('active')
        }
        // Show next image
        if (i === parseInt(el.dataset.show)) {
          image.classList.add('active')
        }
      })

      // Add active class to new active swatch
      el.classList.add('active')
    })
  }) 
}

productImageSwitcher();