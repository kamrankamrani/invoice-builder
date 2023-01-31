import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { tableHeaderType } from "../Services/Types";

const initialState: tableHeaderType = {
  row: "ردیف",
  name: "نام",
  count: "تعداد",
  unitPrice: "واحد",
  price: "قیمت",
  off: "تخفیف %",
  total: "قیمت کل",
  *[Symbol.iterator](): IterableIterator<string> {
    for (const item in this) {
      yield this[item];
    }
  },
};

export const tableHeaderSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setTableHeaderData(state, action: PayloadAction<tableHeaderType>) {
      state = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setTableHeaderData } = tableHeaderSlice.actions;

export default tableHeaderSlice.reducer;
