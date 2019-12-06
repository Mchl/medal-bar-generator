import {goldenFrame, horizontalGrille, devices} from './patterns/index.js'
import prng from './prng/index.js'

const createBarCanvas = () => {
  const canvas = document.createElement('canvas')
  canvas.setAttribute('width', 140)
  canvas.setAttribute('height', 38)
  canvas.classList.add('bar')
  document.body.appendChild(canvas)
  return canvas
}

const clearCanvas = canvas => {
  const ctx = canvas.getContext('2d')
  ctx.clearRect(0, 0, canvas.width, canvas.height)
}

const paintBar = pattern => ({canvas, numberOfRectangles} = {}) => {
  canvas = canvas || createBarCanvas()

  clearCanvas(canvas)

  pattern(canvas, numberOfRectangles)
  horizontalGrille(canvas)
  if (prng() <= 0.1) {
    goldenFrame(canvas)
  }
  if (prng() <= 0.3) {
    devices(canvas)
  }

}

export default paintBar
