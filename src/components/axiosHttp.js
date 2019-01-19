
import axios from 'axios'

export function get(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get('/api' + url, {
      params: params
    })
      .then(response => {
        if (response.data.code === 1) {
          resolve(response.data.data)
        } else {
          console.log(response.data.msg)
        }
      })
      .catch(err => {
        console.log(err)
      })
  })
}

export function post(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post('/api' + url, data)
      .then(response => {
        if (response.data.code === 1 || response.data.status === 0) {
          if (response.data.result) {
            resolve(response.data.result)
          } else {
            resolve(response.data.data)
          }
        } else {
          if (response.data.message) {
            console.log(response.data.message)
          } else {
            console.log(response.data.msg)
          }
        }
      }, err => {
        console.log(err)
      })
  })
}
