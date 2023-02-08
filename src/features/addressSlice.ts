import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { addressDataType } from "../Services/Types";

const initialState: addressDataType = {
  client: "",
  seller: "",
  clientAddress: "",
  sellerAddress: "",
};

const addressSlice = createSlice({
  name: "addressSlice",
  initialState,
  reducers: {
    setClientName(state, action: PayloadAction<string>) {
      state.client = action.payload;
    },
    setClientAddress(state, action: PayloadAction<string>) {
      state.clientAddress = action.payload;
    },
    setSellerName(state, action: PayloadAction<string>) {
      state.seller = action.payload;
    },
    setSellerAddress(state, action: PayloadAction<string>) {
      state.sellerAddress = action.payload;
    },
  },
});

export default addressSlice.reducer;
export const {
  setClientAddress,
  setClientName,
  setSellerAddress,
  setSellerName,
} = addressSlice.actions;
