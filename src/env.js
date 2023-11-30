const DEV = true

export let apiURL = ''

if (DEV) {
  apiURL = 'http://localhost:4200'
} else {
  apiURL = 'https://api.projectpad.so'
}

export const axiosConfig = {
  headers: {
    'Content-Type': 'application/json',
  }
}

export const axiosTokenConfig = (token) => {
  return {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    }
  }
}