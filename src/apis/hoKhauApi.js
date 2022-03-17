import Cookies from 'js-cookie'
import axios from 'axios'

const BASE_URL = process.env.REACT_APP_BASE_URL
const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN

const getInformation = async (cccd) => {
  try {
    const res = await axios({
      method: 'GET',
      url: `${BASE_URL}/hokhaus/nhankhaucccd/${cccd}`,
      timeout: 15000,
      headers: {
        'Authorization': `Bearer ${ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
        'userTokenKey': Cookies.get('token') ?? '',
      },
    })

    return res?.data
  } catch (error) {
    console.error(error)
    return null
  }
}

export const hoKhauApi = {
  getInformation,
}