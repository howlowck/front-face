import {fetchFieldStart} from '../actions/userData'
import {setDisplaySize} from '../actions/size'
const aspectRatio = 1.333333

function calculateCanvasDimension (streamAspectRatio, propWidth, propHeight) {
  let width = propHeight * streamAspectRatio
  let height = propHeight
  let xOffset = 0

  if (width > propWidth) {
    xOffset = (width - propWidth) / 2
  }

  return {
    width: +width.toFixed(0),
    height: +height.toFixed(0),
    xOffset: +xOffset.toFixed(0)
  }
}
const {width, height, xOffset} = calculateCanvasDimension(aspectRatio, window.innerWidth, window.innerHeight)

export default (dispatch) => {
  dispatch(fetchFieldStart())
  dispatch(setDisplaySize({aspectRatio, width, height, xOffset}))
  // window.addEventListener('resize', () => {
  //   const {width, height, xOffset} = calculateCanvasDimension(aspectRatio, window.innerWidth, window.innerHeight)
  //   dispatch(setDisplaySize({aspectRatio, width, height, xOffset}))
  // })
}
