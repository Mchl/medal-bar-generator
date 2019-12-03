import {verticalGrille} from './patterns/index.js'

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
  verticalGrille(canvas)

  document.body.appendChild(canvas)
}

export default paintBar
