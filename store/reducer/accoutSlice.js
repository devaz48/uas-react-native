import { createSlice } from '@reduxjs/toolkit'

export const accountSlice = createSlice({
    name: 'account',
    initialState: {
      account_type: '',
      account_name: '',
      email: '',
      account_password: '',
    },
    reducers: {
        setAccountType: (state, action) => {
            state.account_type = action.payload
        },
        setAccountName: (state, action) => {
            state.account_name = action.payload
        },
        setAccountEmail: (state, action) => {
            state.email = action.payload
        },
        setAccountPassword: (state, action) => {
            state.account_password = action.payload
        },
        clearAccount:(state) => {
            state.account_type  = ''
            state.account_name = ''
            state.email = ''
            state.account_password = ''
        }
    }
});

export const { 
    setAccountType,
    setAccountName,
    setAccountEmail,
    setAccountPassword,
    clearAccount
} = accountSlice.actions
export default accountSlice.reducer


