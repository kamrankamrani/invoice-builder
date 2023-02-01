import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {
  tableBodyType,
  updatePriceData,
  updateTitleData,
} from "../Services/Types";

const initialState: { bodyData: tableBodyType[] } = {
  bodyData: [
    {
      row: 1,
      count: 2,
      name: "شماره اول",
      off: 10,
      price: 1000,
      total: 1000,
      unit: "عدد",
    },
    {
      row: 2,
      count: 5,
      name: "شماره دوم",
      off: 10,
      price: 1000,
      total: 1000,
      unit: "عدد",
    },
    {
      row: 3,
      count: 2,
      name: "شماره سوم",
      off: 10,
      price: 1000,
      total: 1000,
      unit: "عدد",
    },
  ],
};

const tableBodySlice = createSlice({
  name: "tableBodySlice",
  initialState,
  reducers: {
    increaseItem(state, action: PayloadAction<number>) {
      state.bodyData[action.payload].count =
        state.bodyData[action.payload].count + 1;
    },
    decreaseItem(state, action: PayloadAction<number>) {
      state.bodyData[action.payload].count =
        state.bodyData[action.payload].count - 1;
    },
    deleteItem(state, action: PayloadAction<number>) {
      state.bodyData.splice(action.payload, 1);
    },
    updateItemPrice(state, action: PayloadAction<updatePriceData>) {
      state.bodyData[action.payload.row].total = action.payload.price;
    },
    updateTitle(state, action: PayloadAction<updateTitleData>) {
      state.bodyData[action.payload.row].name = action.payload.title;
    },
  },
});

export const {
  increaseItem,
  decreaseItem,
  deleteItem,
  updateItemPrice,
  updateTitle,
} = tableBodySlice.actions;
export default tableBodySlice.reducer;
