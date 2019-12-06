import {
  randomSolidRectangles,
  symmetricSolidRectanglesEven,
  symmetricSolidRectanglesOdd,
} from './patterns/index.js'

import prng from './prng/index.js'
import paintBar from './paintBar.js'

const patterns = [
  randomSolidRectangles,
  symmetricSolidRectanglesEven,
  symmetricSolidRectanglesOdd,
]

for (let i = 0; i < 2000; i++) {
  const pattern = patterns[(Math.trunc(prng() * patterns.length))]
  const paintPattern = paintBar(pattern)

  paintPattern()
}





