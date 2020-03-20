const hexagonStyle = {
  fill: 'none',
  stroke: 'black',
  strokeWidth: 1
}

const generateHexagonPoints = (height, width) => {
  const x = [
    width / 2,
    width,
    width,
    width / 2,
    0,
    0
  ]
  const y = [
    0,
    height / 4,
    height - (height / 4),
    height,
    height - (height / 4),
    height / 4,
  ]

  return x
    .reduce((str, val, idx) => str += `${val},${y[idx]} `, '')
    .trim()
}

const Hexagon = ({ dimensions }) => {
  const { height, width } = dimensions
  return (
    <svg height={`${height}px`} width={`${width}px`}>
      <polygon
        style={hexagonStyle}
        points={generateHexagonPoints(height, width)}
      />
    </svg>
  )
}

export default Hexagon
