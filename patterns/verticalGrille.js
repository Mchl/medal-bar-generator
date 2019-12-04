const verticalGrille = (canvas) => {
  const ctx = canvas.getContext('2d')
  ctx.fillStyle = `rgba(0, 0, 0, 0.25)`
  for (let y = Math.round(canvas.height / 64); y < canvas.height; y+= Math.round(canvas.height / 16)) {
    ctx.fillRect(0, y, canvas.width, Math.round(canvas.height / 32))
  }
}

export default verticalGrille
