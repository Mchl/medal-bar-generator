import {getRandomColor, selectPalette} from '../palette/index.js'
import prng from '../prng/index.js'

const randomSolidRectangles = (canvas, numberOfRectangles) => {
  const ctx = canvas.getContext('2d')
  const palette = selectPalette(3)

  numberOfRectangles = numberOfRectangles || 2 + Math.trunc(prng() * 8)
  const rectangleWidth = Math.round(canvas.width/numberOfRectangles)

  for (let i = 0; i < numberOfRectangles; i++) {
    const [r,g,b] = getRandomColor(palette)

    ctx.fillStyle = `rgba(${r}, ${g}, ${b}, 1)`
    ctx.fillRect(i * rectangleWidth, 0, rectangleWidth, canvas.height)
  }
}

export default randomSolidRectangles
