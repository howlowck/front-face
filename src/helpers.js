/* global fetch */
import {Observable} from 'rxjs/Observable'
import {snakeCase, camelCase} from 'lodash'

export const strToEl = (str) => {
  let temp = document.implementation.createHTMLDocument('')
  temp.body.innerHTML = str
  return temp.body.firstChild
}

export const postFetchToObservable = (url, dataObj) => {
  const requestPromise = fetch(url, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dataObj)
  })
  .then((res) => res.json())
  .catch(console.error.bind(console))

  return Observable.from(requestPromise)
}

export const getFetchToObservable = (url) => {
  const requestPromise = fetch(url, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then((res) => res.json())
  .catch(console.error.bind(console))

  return Observable.from(requestPromise)
}

export const getMiddleString = (str) => {
  let typeArray = snakeCase(str).split('_')
  typeArray.shift()
  typeArray.pop()
  return camelCase(typeArray.join('-'))
}

export function calculateCanvasDimension (streamAspectRatio, propWidth, propHeight) {
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
