const goldenFrame = (canvas) => {
  const ctx = canvas.getContext('2d')
  ctx.fillStyle = `rgba(255 ,205, 0, 1)`
  const frameWidth = canvas.height / 8

  ctx.fillRect(0, 0, canvas.width, frameWidth)
  ctx.fillRect(0, canvas.height  - frameWidth, canvas.width, canvas.height)

  ctx.fillRect(0, 0, frameWidth, canvas.height)
  ctx.fillRect(canvas.width - frameWidth, 0, canvas.width, canvas.height)
}

export default goldenFrame
