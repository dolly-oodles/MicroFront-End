// src/features/counter/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';
export const DataSlice = createSlice({
  name: 'StatsData',
  initialState: {
    lineGraphData: [2000, 2500, 2000, 2700, 1500],
    barGraphData:[65, 59, 80, 81, 56, 55, 68, 65, 59, 80, 81, 56, 55],
    doughnutGraphData:[40, 35, 25],
    revenueValue: '4,562',
    visitorValue: '2,562',
    transactionValue: '2,262',
    ProductValue: '2,100',
    
  },

});

const dataReducer = DataSlice.reducer;
export default dataReducer;
