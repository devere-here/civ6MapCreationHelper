import react, { useState } from 'react'
import Hexagon from '../components/Hexagon'
import MapSizeSelection from '../components/MapSizeSelection'

const imgStyles = {
  width: '800px',
  height: '500px',
  position: 'absolute'
}

const Index = () => {
  const [xCells, setXCells] = useState(44)
  const [yCells, setYCells] = useState(26)
  const cellHeight = (500 / yCells).toFixed(2)
  const cellWidth = (800 / xCells).toFixed(2)
  const height = new Array(yCells).fill(0)
  const width = new Array(xCells).fill(0)

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
      <MapSizeSelection setXCells={setXCells} setYCells={setYCells} />
    </div>
  )
}

export default Index
