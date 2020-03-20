const numberOfTiles = {
  duel: [44, 26],
  tiny: [60, 38],
  small: [74, 46],
  standard: [84, 54],
  large: [96, 60],
  huge: [106, 60]
}

const MapSizeSelection = ({ setXCells, setYCells }) => {
  const keys = Object.keys(numberOfTiles)
  return (
    <select id="mapSizes" onChange={(val) => {
      const selectedIndex = val.target.selectedIndex
      setXCells(numberOfTiles[keys[selectedIndex]][0])
      setYCells(numberOfTiles[keys[selectedIndex]][1])
    }}>
      {keys.map(key => (
        <option value={numberOfTiles[key]} onClick={() => {
          console.log('in onclick')
          setXCells(numberOfTiles[key][0])
          setYCells(numberOfTiles[key][1])
        }}>{key}</option>
      ))}
    </select>
  )
}

export default MapSizeSelection
