import {configureStore} from '@reduxjs/toolkit'

import userReducder from './reducers/userReducder'

import IsLoadingReducer from './reducers/IsLoadingReducer'

export const store = configureStore({
    reducer : {
       userReducer : userReducder,
       IsLoadingReducer : IsLoadingReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type DispatchType = typeof store.dispatch
