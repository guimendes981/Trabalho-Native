import axios from 'axios'

export const api = axios.create({
    baseURL: 'ttps://restcountries.com/#rest-countries'
})