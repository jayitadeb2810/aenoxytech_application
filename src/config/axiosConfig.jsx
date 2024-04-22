import axios from "axios"
const axiosConfig = axios.create({
  baseURL: import.meta.env.BASE_URL,
})

export default axiosConfig
