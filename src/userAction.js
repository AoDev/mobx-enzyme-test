import userStore from './userStore'

export function updateProperty (key, value) {
  userStore[key] = value
  console.log(key, value)
}
