import axios from 'axios'

export const baseUrl = axios.create({
    baseURL: `https://book-store.mvsoft.co.rs`,
    // headers: {
    //   'Content-Type': 'application/json',
    // },
  })