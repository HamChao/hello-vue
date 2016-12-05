import firebase from 'firebase'
import User from './user'

const getId = () => firebase.auth().currentUser ? firebase.auth().currentUser.uid : undefined

const get = () =>
  User.get(getId())

const set = (data) =>
  User.set(getId(), data)

export default {
  get,
  set
}
