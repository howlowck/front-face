import {createSelector} from 'reselect'

export default createSelector(
  state => state.detectFaces,
  state => state.identifyFaces,
  state => state.persons,
  (detected, identified, persons) => detected.map(dFace => {
    const matchedFace = identified.find(iFace => iFace.faceId === dFace.faceId)

    if (matchedFace) {
      if (matchedFace.candidates.length === 0) { // identify did not get a face
        return {
          ...dFace,
          found: false
        }
      }

      const personId = matchedFace.candidates[0].personId
      if (persons[personId]) { // "getPerson" has returned with a name
        return {
          ...dFace,
          name: persons[personId].name,
          found: true,
          personId: personId
        }
      }
      return {
        ...dFace,
        found: true,
        personId: personId
      }
    }

    return {...dFace}
  })
)
