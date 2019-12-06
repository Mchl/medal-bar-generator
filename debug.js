import {
  randomSolidRectangles,
  symmetricSolidRectanglesEven,
  symmetricSolidRectanglesOdd,
} from './patterns/index.js'
import paintBar from './paintBar.js'

const layouts = [
  {
    pattern: randomSolidRectangles,
    header: 'Random solid rectangles',
    numberOfRectangles: {
      min: 1,
      max: 3
    }
  },
  {
    pattern: symmetricSolidRectanglesEven,
    header: 'Symmetric solid rectangles even',
    numberOfRectangles: {
      min: 2,
      max: 5
    }
  },
  {
    pattern: symmetricSolidRectanglesOdd,
    header: 'Symmetric solid rectangles odd',
    numberOfRectangles: {
      min: 2,
      max: 5
    }
  },
]

layouts.forEach(layout => {
  let header = document.createElement('h1')
  header.innerText = layout.header
  document.body.appendChild(header)
  const paintPattern = paintBar(layout.pattern)

  for (
    let numberOfRectangles = layout.numberOfRectangles.min;
    numberOfRectangles <= layout.numberOfRectangles.max;
    numberOfRectangles++
  ) {
    paintPattern(numberOfRectangles)
  }
})
