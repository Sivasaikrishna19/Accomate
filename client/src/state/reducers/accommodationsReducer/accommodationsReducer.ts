import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IAccommodation } from "../../../interfaces/accommodation.interface";

type accommodationsState = { accommodations: Array<IAccommodation> };
const initialState = { accommodations: [] };

const accommodationsSlice = createSlice({
  name: "accommodations",
  initialState,
  reducers: {
    addToaccommodations: (
      state: accommodationsState,
      action: PayloadAction<any>
    ) => {
      state.accommodations.push(action.payload);
    },
    setAccommodations: (
      state: accommodationsState,
      action: PayloadAction<any>
    ) => {
      state.accommodations = action.payload;
    },
  },
});
export const { addToaccommodations, setAccommodations } =
  accommodationsSlice.actions;
export default accommodationsSlice.reducer;
