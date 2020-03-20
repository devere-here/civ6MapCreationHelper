import Hexagon from '../components/Hexagon'

const Index = () => {
  const arr = new Array(10)
  arr.fill(0)
  return (
    <div>
      {arr.map((_, idx) => {
        const rowStyle = {
          position: 'relative',
          left: idx % 2 === 0 ? '0' : '87px',
          bottom: `${53 * idx}px`
        }

        return (
          <div style={rowStyle}>
            <Hexagon />
            <Hexagon />
            <Hexagon />
          </div>
        )
      })}
    </div>
  )
}

export default Index
