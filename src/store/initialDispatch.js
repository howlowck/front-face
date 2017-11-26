import {fetchFieldStart} from '../actions/userData'
import {setDisplaySize} from '../actions/size'
// import { calculateCanvasDimension } from '../helpers'
const aspectRatio = window.innerWidth / window.innerHeight

// const {width, height, xOffset} = calculateCanvasDimension(aspectRatio, window.innerWidth, window.innerHeight)

export default (dispatch) => {
  dispatch(fetchFieldStart())
  dispatch(setDisplaySize({aspectRatio, width: window.innerWidth, height: window.innerHeight, xOffset: 0}))
  // window.addEventListener('resize', () => {
  //   const {width, height, xOffset} = calculateCanvasDimension(aspectRatio, window.innerWidth, window.innerHeight)
  //   dispatch(setDisplaySize({aspectRatio, width, height, xOffset}))
  // })
}
