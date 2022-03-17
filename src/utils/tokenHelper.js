import Cookies from 'js-cookie'
import moment from 'moment'

export const checkValidToken = () => {
  const token = Cookies.get('token')
  if (!token) return false;

  const expiredTime = parseInt(Cookies.get('expiredTime') ?? '0')
  const now = moment().unix()
  if (now > expiredTime) return false;

  return true;
}

export const saveToken = (token, expiredTime) => {
  Cookies.set('token', token)
  Cookies.set('expiredTime', expiredTime)
}

export const clearToken = (token) => {
  Cookies.remove('token')
  Cookies.remove('expiredTime')
}