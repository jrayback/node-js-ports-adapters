// const products = []
const products = [{
  title: 'blper',
  imageUrl: 'https://imgs.search.brave.com/9a1sUManZjBbxwnG9zt5N5c4dukLT3PJV9qwUtHyIJA/rs:fit:316:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5v/bnFOUzFqeGNGMEhw/SUVKTW5CaWhRSGFM/RyZwaWQ9QXBp',
  price: '$32.76',
  description: 'Ultricies integer quis auctor elit sed vulputate mi. Eget velit aliquet sagittis id. Maecenas sed enim ut sem viverra. Aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh. Arcu dictum varius duis at consectetur lorem donec massa sapien.'
}]

exports.save = (p) => {
  products.push(p)
}

exports.getAll = (callback) => {
  callback(products)
}
