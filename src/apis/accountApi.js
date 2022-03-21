import axios from 'axios'
import Cookies from 'js-cookie'

const BASE_URL = process.env.REACT_APP_BASE_URL
const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN

const login = async ({username, password}) => {
  try {
    const res = await axios({
      method: 'POST',
      url: `https://qldcdienxa.namdinh.gov.vn/_layouts/15/td.qldc.service/wcfservice.svc/login`,
      timeout: 15000,
      headers: {
        // 'Authorization': `Bearer ${ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
      data: JSON.stringify({
        username,
        password,
      }),
    })

    const token = res?.data?.data?.token ?? ''
    const expiredTime = res?.data?.data?.expiredTime ?? ''
    Cookies.set('token_public', token)
    Cookies.set('expiredTime_public', expiredTime)

    return res?.data
  } catch (error) {
    console.error(error)
    return null
  }
}

const logout = async () => {
  try {
    const res = await axios({
      method: 'GET',
      url: `${BASE_URL}/logout`,
      timeout: 15000,
      headers: {
        'Authorization': `Bearer ${ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
    })

    Cookies.remove('token')
    Cookies.remove('expiredTime')

    return res?.data
  } catch (error) {
    console.error(error)
    return null
  }
}

const registration = async ({name, username, password}) => {
  try {
    const res = await axios({
      method: 'POST',
      url: `${BASE_URL}/registration`,
      timeout: 15000,
      headers: {
        'Authorization': `Bearer ${ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
      data: JSON.stringify({
        name,
        username,
        password,
      }),
    })

    return res?.data
  } catch (error) {
    console.error(error)
    return null
  }
}

export const accountApi = {
  login,
  registration,
  logout,
}