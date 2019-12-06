import {getRandomColor, selectPalette} from '../palette/index.js'
import prng from '../prng/index.js'

const randomSolidRectangles = (canvas, numberOfRectangles) => {
  const ctx = canvas.getContext('2d')
  const palette = selectPalette(3)

  // Single color ribbons are a bit boring, so let's cull them
  numberOfRectangles = numberOfRectangles || prng() < 0.05 ? 1 : 2 + Math.round(prng())
  const rectangleWidth = Math.round(canvas.width/numberOfRectangles)

  for (let i = 0; i < numberOfRectangles; i++) {
    const [r,g,b] = palette[i]

    ctx.fillStyle = `rgba(${r}, ${g}, ${b}, 1)`
    ctx.fillRect(i * rectangleWidth, 0, rectangleWidth, canvas.height)
  }
}

export default randomSolidRectangles
