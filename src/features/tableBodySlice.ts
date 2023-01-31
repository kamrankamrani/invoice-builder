import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { tableBodyType } from "../Services/Types";

const initialState: tableBodyType[] = [
  {
    row: 1,
    count: 2,
    name: "دیتا",
    off: 10,
    price: 1000,
    total: 1000,
    unit: "عدد",
  },
  {
    row: 2,
    count: 2,
    name: "دیتا",
    off: 10,
    price: 1000,
    total: 1000,
    unit: "عدد",
  },
];

const tableBodySlice = createSlice({
  name: "tableBodySlice",
  initialState,
  reducers: {
    increaseItem(state, action: PayloadAction<number>) {
      state.forEach((val) => {
        if (val.row === action.payload) {
          val.count = val.count + 1;
        }
      });
    },
    decreaseItem(state, action: PayloadAction<number>) {
      state.forEach((val) => {
        if (val.row === action.payload) {
          val.count = val.count - 1;
        }
      });
    },
    deleteItem(state, action: PayloadAction<number>) {
      state.forEach((val, index) => {
        if (val.row === action.payload) {
          state.splice(index, 1);
        }
      });
    },
  },
});

export const { increaseItem, decreaseItem, deleteItem } =
  tableBodySlice.actions;
export default tableBodySlice.reducer;
