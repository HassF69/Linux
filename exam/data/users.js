const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    password: "password123" 
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    password: "password456"
  }
]

export const findUserByEmail = (email) => {
  return users.find(user => user.email === email)
}

export const authenticateUser = (email, password) => {
  const user = findUserByEmail(email)
  if (user && user.password === password) {
    const { password, ...userWithoutPassword } = user
    return userWithoutPassword
  }
  return null
}

export const registerUser = (userData) => {
  if (findUserByEmail(userData.email)) {
    return { success: false, message: "Email already registered" }
  }

  const newUser = {
    id: users.length + 1,
    name: userData.name,
    email: userData.email,
    password: userData.password 
  }

  users.push(newUser)
  
  const { password, ...userWithoutPassword } = newUser
  return { success: true, user: userWithoutPassword }
}

export const getUserById = (id) => {
  const user = users.find(user => user.id === id)
  if (user) {
    const { password, ...userWithoutPassword } = user
    return userWithoutPassword
  }
  return null
} 