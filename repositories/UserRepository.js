const users = ['Diego', 'Luis', 'Carlos', 'Jorge']

export function getUsers() {
  let q = 2
  return users.slice(0, q)
}

export function addUser(user) {
  users.push(user)
}
