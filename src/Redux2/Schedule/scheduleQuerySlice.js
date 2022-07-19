import { createSlice } from "@reduxjs/toolkit";

export const scheduleQuerySlice = createSlice({
    name: "scheduleQuery",
    initialState: {
        
            id: 0,
            title: "",
            schedule: "",
            place: "",
            cinema: "",
            sortby: "schedule",
            order: "desc",
            limit: 6,
            page: 1,
        
    },
    reducers: {
        addScheduleLimit: (state, action )=> {  
            state.limit = action.payload
            // state = {...state, ...action.payload}
        },
        addSchedulePage: (state, action )=> {
            state.page = action.payload
            // state = {...state, ...action.payload}
        },
        addScheduleTitle: (state, action) => {
            state.title = action.payload
        },
        addScheduleOrder: (state, action) => {
            state.order = action.payload

        }
    }

})

// export const {addQuery} = scheduleQuerySlice.actions
export const {addScheduleLimit, addSchedulePage, addScheduleTitle, addScheduleOrder} = scheduleQuerySlice.actions

export default scheduleQuerySlice.reducer