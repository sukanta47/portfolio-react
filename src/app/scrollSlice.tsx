import { createSlice } from "@reduxjs/toolkit";

const scrollSlice = createSlice({
    name: "scroll",
    initialState: {isScrolledToShowTitle : false},
    reducers:{
        setScrolledToShowTitle:(state, action)=>{
            state.isScrolledToShowTitle = action.payload;
        }
    }
});

export const { setScrolledToShowTitle } = scrollSlice.actions;
export default scrollSlice.reducer;