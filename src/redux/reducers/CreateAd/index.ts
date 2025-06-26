import {createSlice, PayloadAction} from '@reduxjs/toolkit';
const adInformationSlice = createSlice({
  name: 'adInformation',
  initialState: {
    adInformation: {} as any,
  },
  reducers: {
    setAdInformation(state, action: PayloadAction<any>) {
      state.adInformation = action.payload;
    },
  },
});
export const {setAdInformation} = adInformationSlice.actions;
export default adInformationSlice.reducer;
