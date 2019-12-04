import prng from '../prng/index.js'

const serviceStars = (canvas) => {
  const imageId = prng() > 0.5 ? 'serviceStarBronze' : 'serviceStarSilver'
  const image = document.getElementById(imageId)

  const ctx = canvas.getContext('2d')
  const imageRatio =  (canvas.height / 2) / image.height
  const starHeight = image.height * imageRatio
  const starWidth = image.width * imageRatio

  const numberOfStars = Math.round(prng() * 4 + 1)
  for (let i = 0; i < numberOfStars; i++) {
     ctx.drawImage(image, ((i + 1) * (canvas.width ) / (numberOfStars + 1)) - starWidth / 2, starHeight / 2, starWidth, starHeight)
  }
}

const arrowHead = (canvas) => {
  const image = document.getElementById('arrowhead')

  const ctx = canvas.getContext('2d')
  const imageRatio =  (canvas.height / 2) / image.height
  const arrowHeight = image.height * imageRatio
  const arrowWidth = image.width * imageRatio

  ctx.drawImage(image, (canvas.width  - arrowWidth) / 2, arrowHeight / 2, arrowWidth, arrowHeight)
}

const devices = (canvas) => {
  if (prng() < 0.5) {
    serviceStars(canvas)
  } else {
    arrowHead(canvas)
  }

}

export default devices
