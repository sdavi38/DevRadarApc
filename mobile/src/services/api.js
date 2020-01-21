import  axios from 'axios'

const api = axios.create({
  baseURL: 'http://192.168.15.10:3333'
  // essa url precisa ser verificada com a url do expo para funcionar no app do expo
})

export default api