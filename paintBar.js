import {goldenFrame, horizontalGrille, devices} from './patterns/index.js'
import prng from './prng/index.js'

const createBarCanvas = () => {
  const canvas = document.createElement('canvas')
  canvas.setAttribute('width', 140)
  canvas.setAttribute('height', 38)
  canvas.classList.add('bar')
  return canvas
}

const paintBar = pattern => numberOfRectangles => {
  const canvas = createBarCanvas()

  pattern(canvas, numberOfRectangles)
  horizontalGrille(canvas)
  if (prng() <= 0.1) {
    goldenFrame(canvas)
  }
  if (prng() <= 0.3) {
    devices(canvas)
  }

  document.body.appendChild(canvas)
}

export default paintBar
