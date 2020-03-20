import Hexagon from '../components/Hexagon'

const imgStyles = {
  width: '800px',
  height: '500px',
  position: 'absolute'
}

const Index = () => {
  const cellHeight = (500 / 26).toFixed(2)
  const cellWidth = (800 / 44).toFixed(2)
  const height = new Array(26).fill(0)
  const width = new Array(44).fill(0)

  const hexagonDimensions = {
    width: cellWidth,
    height: cellHeight,
  }

  return (
    <div>
      <img style={imgStyles} src={'/caucasus.png'} alt='caucasus' />
      {height.map((_, idx) => {
        const rowStyle = {
          position: 'relative',
          left: idx % 2 === 0 ? '0' : `${cellWidth/2}px`,
          bottom: `${(cellHeight/4) * idx}px`,
          height: `${cellHeight}px`,
        }

        return (
          <div style={rowStyle}>
            {width.map((_, idx) => <Hexagon dimensions={hexagonDimensions} />)}
          </div>
        )
      })}
    </div>
  )
}

export default Index
