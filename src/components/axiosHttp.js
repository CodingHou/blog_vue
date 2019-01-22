
import axios from 'axios'

export function get(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get('/api' + url, {
      params: params
    })
      .then(response => {
        if (response.data.resCode === '0000') {
          resolve(response.data.data)
        } else {
          console.log(response.data.resMsg)
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
        if (response.data.resCode === '0000' || response.data.status === 0) {
          if (response.data.result) {
            resolve(response.data.result)
          } else {
            resolve(response.data.data)
          }
        } else {
          if (response.data.message) {
            console.log(response.data.message)
          } else {
            console.log(response.data.resMsg)
          }
        }
      }, err => {
        console.log(err)
      })
  })
}
