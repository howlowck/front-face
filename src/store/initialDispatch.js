import {fetchFieldStart} from '../actions/userData'
import {setDisplaySize} from '../actions/size'
import { calculateCanvasDimension } from '../helpers'
const aspectRatio = 1.333333

const {width, height, xOffset} = calculateCanvasDimension(aspectRatio, window.innerWidth, window.innerHeight)

export default (dispatch) => {
  dispatch(fetchFieldStart())
  dispatch(setDisplaySize({aspectRatio, width, height, xOffset}))
  // window.addEventListener('resize', () => {
  //   const {width, height, xOffset} = calculateCanvasDimension(aspectRatio, window.innerWidth, window.innerHeight)
  //   dispatch(setDisplaySize({aspectRatio, width, height, xOffset}))
  // })
}
