const colors = {
  "Air Force Yellow": [255,205,0],
  "Apple Red": [213,0,50],
  "Army Green (Uniform)": [40,71,52],
  "Aspic Green": [191,184,0],
  "Black": [0,0,0],
  "Blue HQ": [183,201,211],
  "Blue HX": [12,35,64],
  "Blue Turquoise": [104,210,223],
  "Bluebird": [123,175,212],
  "Bottle Green": [17,87,64],
  "Brick Red": [134,38,51],
  "Brittany Blue": [163,199,210],
  "Bronze": [139,111,78],
  "Brown": [96,61,32],
  "Buff": [185,151,91],
  "Burnt Orange": [227,82,5],
  "Cannes Blue": [123,175,212],
  "Cardinal Red": [186,12,47],
  "Chamois": [242,199,92],
  "Cobalt Blue": [0,32,91],
  "Corsaire Blue": [0,45,114],
  "Crimson": [165,0,80],
  "Dark Blue": [0,38,58],
  "Eggshell": [221,203,164],
  "Emerald": [100,167,11],
  "Flag Blue": [4,30,66],
  "Flame Red": [255,88,93],
  "Forget-Me-Not Blue": [154,219,232],
  "Garnet": [111,38,61],
  "Gherkin Green": [74,119,41],
  "Gold": [133,113,77],
  "Gold Brown": [184,97,37],
  "Golden Orange": [255,158,27],
  "Golden Yellow": [255,205,0],
  "Goldenlight": [255,198,88],
  "Graphite Blue": [0,38,58],
  "Grebe Gray": [84,88,90],
  "Green": [33,87,50],
  "Grotto Blue": [0,193,213],
  "Imperial Blue": [0,61,165],
  "Imperial Purple": [152,29,151],
  "Irish Green": [0,132,61],
  "Ivory": [255,255,255],
  "Jasmine": [253,210,110],
  "Khaki": [176,170,126],
  "Lemon Yellow": [251,221,64],
  "Light Blue": [91,127,149],
  "Light Green": [146,172,160],
  "MC Antique White": [233,223,151],
  "Mahogany": [127,48,53],
  "Marine Corps Scarlet": [228,0,43],
  "Maroon": [87,41,50],
  "Midnight Blue": [0,38,58],
  "Mintleaf": [164,214,94],
  "Mosstone Green": [122,154,1],
  "Myrtle Green": [0,122,51],
  "Natural": [202,199,167],
  "Navy Blue #1": [4,30,66],
  "Navy Blue #2": [4,30,66],
  "Nugget Gold": [255,209,0],
  "Old Blue": [162,170,173],
  "Old China Blue": [123,175,212],
  "Old Glory Blue": [1,33,105],
  "Old Glory Red": [186,12,47],
  "Old Gold": [132,117,78],
  "Olive": [78,91,49],
  "Olive Drab": [105,91,36],
  "Orange": [252,76,2],
  "Oriental Blue": [0,114,206],
  "Oriole Orange": [229,114,0],
  "Ostende Blue": [123,175,212],
  "Paprica": [250,70,22],
  "Parrot Blue": [136,219,223],
  "Peacock Blue": [0,146,188],
  "Primitive Green": [0,154,68],
  "Prophet Green": [67,176,42],
  "Purple": [95,37,159],
  "Putty": [178,168,162],
  "Rally Red": [111,38,61],
  "River Blue": [0,111,98],
  "Scarlet": [186,12,47],
  "Silver Gray": [158,162,162],
  "Smoke": [84,88,90],
  "Soldier Red": [111,38,61],
  "Spicebrown": [115,56,29],
  "Spring Green": [197,232,108],
  "Spruce Green": [0,76,69],
  "Star Yellow": [253,218,36],
  "Steel": [124,135,142],
  "Tarragon Green": [137,144,100],
  "Teal Blue": [0,62,81],
  "Terra Cotta": [150,56,33],
  "Toast": [155,90,26],
  "Ultramarine Blue": [0,20,137],
  "Victory Medal Blue #1": [0,75,135],
  "Victory Medal Blue #2": [0,75,135],
  "White": [255,255,255],
  "Yale Blue": [0,114,206],
  "Yellow": [255,199,44],
}
const colorKeys = Object.keys(colors)

const getRandomColor = () => {
  const colorKey = colorKeys[Math.trunc(Math.random() * colorKeys.length)]
  return colors[colorKey]
}

const verticalGrille = (canvas) => {
  const ctx = canvas.getContext('2d')
  ctx.fillStyle = `rgba(0, 0, 0, 0.25)`
  for (let y = canvas.height / 64; y < canvas.height; y+= canvas.height / 16) {
    ctx.fillRect(0, y, canvas.width, canvas.height / 32)
  }
}

const randomSolidRectangles = (canvas, numberOfRectangles) => {
  const ctx = canvas.getContext('2d')
  numberOfRectangles = numberOfRectangles || 2 + Math.trunc(Math.random() * 8)

  for (let i = 0; i < numberOfRectangles; i++) {
    const [r,g,b] = getRandomColor()

    ctx.fillStyle = `rgba(${r}, ${g}, ${b}, 1)`
    ctx.fillRect(i * canvas.width/numberOfRectangles, 0, canvas.width/numberOfRectangles, canvas.height)
  }
}

const symmetricSolidRectanglesEven = (canvas, numberOfRectangles)  => {
  const ctx = canvas.getContext('2d')
  numberOfRectangles = numberOfRectangles || Math.round((2 + Math.trunc(Math.random() * 8)) / 2)

  for (let i = 0; i < numberOfRectangles; i++) {
    const [r,g,b] = getRandomColor()

    ctx.fillStyle = `rgba(${r}, ${g}, ${b}, 1)`
    ctx.fillRect(i * canvas.width/(numberOfRectangles * 2), 0, canvas.width/(numberOfRectangles * 2), canvas.height)
    ctx.fillRect(canvas.width - (i+1) * canvas.width/(numberOfRectangles * 2), 0, canvas.width/(numberOfRectangles * 2), canvas.height)
  }
}

const symmetricSolidRectanglesOdd = (canvas, numberOfRectangles)  => {
  const ctx = canvas.getContext('2d')
  numberOfRectangles = numberOfRectangles || Math.trunc(Math.random() * 5)

  const rectangleWidth = canvas.width/(1 + 2 * (numberOfRectangles - 1))

  for (let i = 0; i < numberOfRectangles; i++) {
    const [r,g,b] = getRandomColor()

    ctx.fillStyle = `rgba(${r}, ${g}, ${b}, 1)`

    ctx.fillRect(i * rectangleWidth, 0, rectangleWidth, canvas.height)
    ctx.fillRect(canvas.width - (i+1) * rectangleWidth, 0, rectangleWidth, canvas.height)
  }
}

let header = document.createElement('h1')
header.innerText = 'Asymmetric solid rectangles'
document.body.appendChild(header)

for (let numberOfRectangles = 1; numberOfRectangles <=3; numberOfRectangles++) {
  const canvas = document.createElement('canvas')
  canvas.classList.add('bar')

  randomSolidRectangles(canvas, numberOfRectangles)
  verticalGrille(canvas)

  document.body.appendChild(canvas)
}

header = document.createElement('h1')
header.innerText = 'Symmetric solid rectangles even'
document.body.appendChild(header)

for (let numberOfRectangles = 1; numberOfRectangles <=5; numberOfRectangles++) {
  const canvas = document.createElement('canvas')
  canvas.classList.add('bar')

  symmetricSolidRectanglesEven(canvas, numberOfRectangles)
  verticalGrille(canvas)

  document.body.appendChild(canvas)
}

header = document.createElement('h1')
header.innerText = 'Symmetric solid rectangles odd'
document.body.appendChild(header)

for (let numberOfRectangles = 1; numberOfRectangles <=5; numberOfRectangles++) {
  const canvas = document.createElement('canvas')
  canvas.classList.add('bar')

  symmetricSolidRectanglesOdd(canvas, numberOfRectangles)
  verticalGrille(canvas)

  document.body.appendChild(canvas)
}








