import Cookies from 'js-cookie'
import { createSlice } from '@reduxjs/toolkit'

const initalState = {
  hoKhau: {},
  nhanKhaus: [],
  cccd: '',
}

export const informationSlice = createSlice({
  name: 'information',
  initialState: initalState,
  reducers: {
    setHoKhau(state, action) {
      state.hoKhau = action.payload ?? {}
      Cookies.set('hoKhau', JSON.stringify(action.payload) ?? '')
    },
    setNhanKhaus(state, action) {
      state.nhanKhaus = action.payload ?? []
      Cookies.set('nhankhaus', JSON.stringify(action.payload) ?? '')
    },
    setCccd(state, action) {
      state.cccd = action.payload ?? ''
      Cookies.set('cccd', action.payload ?? '')
    }
  },
})

const { actions, reducer } = informationSlice
export const {setHoKhau, setNhanKhaus, setCccd } = actions
export default reducer