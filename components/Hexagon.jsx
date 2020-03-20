const hexagonStyle = {
  fill: 'none',
  stroke: 'black',
  strokeWidth: 1
}

const Hexagon = () => (
  <svg height="200" width="175">
    <polygon
      style={hexagonStyle}
      points="87,0 173.603,50 173.603,150 87,200 0.397,150 0.397,50"
    />
  </svg>
)

export default Hexagon
