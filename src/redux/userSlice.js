import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  email: '',
  role: '',
  token: '',

  souhait: 'Combien on peut avir de bonbons avec ce lingot',
  secret: "Il y'a des lingots d'or cacher dans la cave"

}

const userSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    setEmailR: (state, action) => {
      state.email = action.payload
    },
    setRole: (state, action) => {
      state.role = action.payload
    },
    setToken: (state, action) => {
      state.token = action.payload
    },

    setSouhait: (state, action) => {
      state.souhait = action.payload
    },
    setSecret: (state, action) => {
      state.secret = action.payload
    }
    
  }
})

export const { setEmailR, setRole, setToken, setSouhait, setSecret } = userSlice.actions
export default userSlice.reducer
