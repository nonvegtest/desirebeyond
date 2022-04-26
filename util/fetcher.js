import axios from 'axios'

const baseURL = 'https://serverbeyond.herokuapp.com/api/'

const publicFetch = axios.create({
  baseURL
})

export { publicFetch, baseURL }
