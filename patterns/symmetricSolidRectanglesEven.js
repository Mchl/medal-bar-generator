import {getRandomColor, selectPalette} from '../palette/index.js'
import prng from '../prng/index.js'

const symmetricSolidRectanglesEven = (canvas, numberOfRectangles)  => {
  const ctx = canvas.getContext('2d')
  const palette = selectPalette(Math.round(3 + prng() * 2))

  numberOfRectangles = numberOfRectangles || Math.round((2 + Math.trunc(prng() * 8)) / 2)
  const rectangleWidth = canvas.width/(numberOfRectangles * 2)


  for (let i = 0; i < numberOfRectangles; i++) {
    const [r,g,b] = getRandomColor(palette)

    ctx.fillStyle = `rgba(${r}, ${g}, ${b}, 1)`
    ctx.fillRect(i * rectangleWidth, 0, rectangleWidth, canvas.height)
    ctx.fillRect(canvas.width - (i+1) * rectangleWidth, 0, rectangleWidth, canvas.height)
  }
}

export default symmetricSolidRectanglesEven
