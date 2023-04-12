import axios from "axios"

export const branchApi = axios.create({
  baseURL: "http://localhost:3001"
})
