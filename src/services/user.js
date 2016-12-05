import firebase from 'firebase'

const get = (id) =>
  firebase.database()
    .ref(`user/${id}`)
    .once('value')
    .then((snapshot) => snapshot.val())

const set = (id, data) =>
  firebase.database()
    .ref(`user/${id}`)
    .set(data)

const subscribe = (id, callback) => {
  firebase.database()
    .ref(`user/${id}`)
    .on('value', (snapshot) => {
      callback(snapshot.val())
    })
}

export default {
  get,
  set,
  subscribe
}
