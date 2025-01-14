import { services } from '../../constants/system'
import axiosInstance from '../axios'

const path = `/api/${services.chat}/account`

const accountApi = {
  profile: async () => {
    const response = await axiosInstance.get(`${path}/profile`)
    return response
  },

  image: async () => {
    const response = await axiosInstance.get(`${path}/image`)
    return response
  },

  uploadImage: async ({ image }) => {
    const body = { image }
    const response = await axiosInstance.post(`${path}/upload-image`, body)
    return response
  },

  accounts: async ({ pageNumber, pageSize, isLoadImage, searchField }) => {
    const params = [
      `pagination.pageNumber=${pageNumber || 0}`,
      `pagination.pageSize=${pageSize || 100}`,
      `isLoadImage=${isLoadImage || false}`,
      `searchField=${searchField}`
    ]

    const response = await axiosInstance.get(`${path}/accounts?${params.join('&')}`)
    return response
  }
}

export default accountApi
