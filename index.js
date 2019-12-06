import {
  randomSolidRectangles,
  symmetricSolidRectanglesEven,
  symmetricSolidRectanglesOdd,
} from './patterns/index.js'

import prng, {reseed} from './prng/index.js'
import paintBar from './paintBar.js'

const canvas = document.getElementById('canvas')

const patterns = [
  randomSolidRectangles,
  symmetricSolidRectanglesEven,
  symmetricSolidRectanglesOdd,
]

const paintNewPattern = canvas => {
  const pattern = patterns[(Math.trunc(prng() * patterns.length))]
  console.log({pattern})
  const paintPattern = paintBar(pattern)

  paintPattern({canvas})
}

paintNewPattern(canvas)

document.getElementById('buttonNew').addEventListener('click', () => {
  reseed()
  paintNewPattern(canvas)
})


