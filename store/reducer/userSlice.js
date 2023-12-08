import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
      id:'',
      fullName: '',
      username: '',
    },
    reducers: {
        setUserId: (state, action) => {
            state.id = action.payload
        },
        setUserFullName: (state, action) => {
            state.fullName = action.payload
        },
        setUserName: (state, action) => {
            state.username = action.payload
        },
        clearRegister:(state) => {
            state.id = ''
            state.email = ''
            state.username = ''
            state.fullName = ''
        }
    }
});

export const { 
    setUserId,
    setUserFullName,
    setUserName,
    clearRegister
} = userSlice.actions
export default userSlice.reducer