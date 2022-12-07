import axios from 'axios'
const baseUrl = 'http://localhost:3000/api/posts/timeline/all'
let config


const getAll = async () =>{
    const response = await axios.get(baseUrl, config)
    return response.data
}

const create = async newObject =>{
    const response = await axios.post(baseUrl, newObject, config)
    return response.data
}

export default { create, getAll}