require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const path = require('path')
const bodyParser = require('body-parser')
const fetch = require('node-fetch')
const { FACE_API_ENDPOINT, FACE_API_KEY, GROUP_ID, USER_FIELDS } = process.env

const app = express()

const FACE_API_VERSION = 'v1.0'

function handleError (error) {
  console.log(error)
  this.status(500)
  this.json(error)
}

if (FACE_API_ENDPOINT.substr(-4) !== FACE_API_VERSION) {
  console.log('WARNING!! your Face API version and the one used in this tool does not match.  The calls to the Face API might not work as expected.')
}

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'))
app.use(bodyParser.json({ limit: '4mb' }))

// Serve static assets
app.use(express.static(path.resolve(__dirname, 'build')))

app.get('/api/fields', (req, res) => {
  res.json(JSON.parse(USER_FIELDS))
})

app.post('/api/detect', (req, res) => {
  const buffer = Buffer.from(req.body.base64.replace(/^data:([A-Za-z-+/]+);base64,/, ''), 'base64')

  fetch(`${FACE_API_ENDPOINT}/detect?returnFaceLandmarks=true`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/octet-stream',
      'Ocp-Apim-Subscription-Key': FACE_API_KEY
    },
    body: buffer
  }).then(response => response.json())
  .then(res.json.bind(res))
  .catch(handleError.bind(res))
})

app.post('/api/identify', (req, res) => {
  fetch(`${FACE_API_ENDPOINT}/identify`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Ocp-Apim-Subscription-Key': FACE_API_KEY
    },
    body: JSON.stringify({
      faceIds: req.body.faceIds,
      personGroupId: GROUP_ID
    })
  })
    .then(response => response.json())
    .then(res.json.bind(res))
    .catch(handleError.bind(res))
})

app.get('/api/person/:personId', (req, res) => {
  fetch(`${FACE_API_ENDPOINT}/persongroups/${GROUP_ID}/persons/${req.params.personId}`, {
    headers: {
      'Ocp-Apim-Subscription-Key': FACE_API_KEY
    }
  })
    .then(response => response.json())
    .then(res.json.bind(res))
    .catch(handleError.bind(res))
})

// Creating a new Person
app.post('/api/person', (req, res) => {
  const {name, userData} = req.body
  const body = JSON.stringify({name, userData: JSON.stringify(userData)})
  console.log(body)
  fetch(`${FACE_API_ENDPOINT}/persongroups/${GROUP_ID}/persons`, {
    method: 'post',
    headers: {
      'Ocp-Apim-Subscription-Key': FACE_API_KEY,
      'Content-Type': 'application/json'
    },
    body
  })
  .then(response => response.json())
  .then(res.json.bind(res))
  .catch(handleError.bind(res))
})

// Adding a Person Face
app.post('/api/personFace', (req, res) => {
  const {personId, targetFace, base64} = req.body
  const buffer = Buffer.from(base64.replace(/^data:([A-Za-z-+/]+);base64,/, ''), 'base64')
  const {left, top, width, height} = targetFace

  fetch(`${FACE_API_ENDPOINT}/persongroups/${GROUP_ID}/persons/${personId}/persistedFaces?targetFace=${left},${top},${width},${height}`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/octet-stream',
      'Ocp-Apim-Subscription-Key': FACE_API_KEY
    },
    body: buffer
  })
  .then(response => response.json())
  .then(res.json.bind(res))
  .catch(handleError.bind(res))
})

// Train a Person Group
app.post('/api/train', (req, res) => {
  fetch(`${FACE_API_ENDPOINT}/persongroups/${GROUP_ID}/train`, {
    method: 'post',
    headers: {
      'Ocp-Apim-Subscription-Key': FACE_API_KEY
    }
  }).then(response => response.text())
    .then(resStr => {
      res.json({message: 'submitted'})
    })
    .catch(handleError.bind(res))
})

app.get('/api/train', (req, res) => {
  fetch(`${FACE_API_ENDPOINT}/persongroups/${GROUP_ID}/training`, {
    headers: {
      'Ocp-Apim-Subscription-Key': FACE_API_KEY
    }
  }).then(response => response.json())
  .then(res.json.bind(res))
  .catch(handleError.bind(res))
})

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
})

const PORT = process.env.PORT || 3003

app.listen(PORT, () => {
  console.log('App listening on ' + PORT)
})
