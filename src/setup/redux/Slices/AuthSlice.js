import { createSlice } from '@reduxjs/toolkit'

const initalState = {
  login: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState: initalState,
  reducers: {
    setLogin(state, action) {
      state.login = action.payload ?? false
    }
  },
})

const { actions, reducer } = authSlice
export const { setLogin } = actions
export default reducer