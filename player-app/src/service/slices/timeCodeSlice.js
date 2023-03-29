import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    times: [],
    pending: false,
    error: ''
}

export const getTimesCode = createAsyncThunk('times', () => (fetch('http://91.185.84.78:8081/api/v1/getBadIntervals?videoLink=http://91.185.84.78:8080/video').then(data => data.json())))


export const timeCodeSlice = createSlice({
    initialState,
    name: 'timeCodes',
    reducers: {},
    extraReducers: {
        [getTimesCode.pending]: (state) => {
            state.pending = true
        },
        [getTimesCode.fulfilled]: (state,action) => {
            const arr = [...action.payload]
            const arr2 = arr.flat(Infinity)
            state.times = arr2.map((item) => Math.floor(item / 1000))
        },
        [getTimesCode.enjected]: (state,action) => {
            state.error = `${action.payload}`
        }
    }

})

export const {getCodes} = timeCodeSlice.actions