import { createSlice } from '@reduxjs/toolkit'

export const taskSlice = createSlice({
    name: 'task',
    initialState: {
      account_type: '',
      account_id: '',
      email: '',
      initial_id: '',
      initial_page:'',
      counter:'',
    },
    reducers: {
        setAccountType: (state, action) => {
            state.account_type = action.payload
        },
        setAccountId: (state, action) => {
            state.account_id = action.payload
        },
        setAccountEmail: (state, action) => {
            state.email = action.payload
        },
        setInitialId: (state, action) => {
            state.initial_id = action.payload
        },
        setInittialPage: (state, action) => {
            state.initial_page = action.payload
        },
        setCounter: (state, action) => {
            state.counter = action.payload
        },
        clearTask:(state) => {
            state.account_type  = ''
            state.account_id = ''
            state.email = ''
            state.initial_page = ''
            state.initial_id = ''
            state.counter = ''
        }
    }
});

export const { 
    setAccountType,
    setAccountId,
    setInitialId,
    setInittialPage,
    setCounter,
    setAccountEmail,
    clearTask
} = taskSlice.actions
export default taskSlice.reducer


