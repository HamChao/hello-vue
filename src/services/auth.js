import firebase from 'firebase'

const getCurrentUser = () => firebase.auth().currentUser

const requiresUser = () =>
  new Promise((resolve, reject) => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      unsubscribe()
      if (user) {
        resolve(user)
      }
      reject()
    })
  })

export default {
  getCurrentUser,
  requiresUser
}
