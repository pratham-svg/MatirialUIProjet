import axios from "axios"
var API_URL = 'http://localhost:5000/api'


export const createUser = async (data)=> {
   return axios.post(`${API_URL}/user/signup` ,data)
}

export const getUser = async ()=>{
    return axios.get(`${API_URL}/user/get-All`)
}

export const updateUser = async ()=>{
    return axios.post(`${API_URL}/user/Update-user`)
}

// export const forgetPassword = async ()=>{
//     return 
// }