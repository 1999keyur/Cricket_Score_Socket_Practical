import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cricketScore: [],
};

const cricketDataSlice = createSlice({
    name: 'cricketData',
    initialState,
    reducers: {
        cricketScoreAction: (state, action) => {
            state.cricketScore.unshift(action.payload);
            if (state.cricketScore.length > 10) {
                state.cricketScore = state.cricketScore.slice(0, 10);
            }
        },
    },
});

export const { cricketScoreAction } = cricketDataSlice.actions;
export default cricketDataSlice.reducer;
