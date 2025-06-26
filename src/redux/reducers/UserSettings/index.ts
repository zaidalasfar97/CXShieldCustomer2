import {createSlice} from '@reduxjs/toolkit';
import {fetchUserSetting} from '../../middleware/ManageUsers';
const userSettingsSlice = createSlice({
  name: 'userSettings',
  initialState: {
    userSettings: {} as any,
    loading: false,
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchUserSetting.pending, state => {
      state.loading = true;
    });

    builder.addCase(fetchUserSetting.fulfilled, (state, action) => {
      state.userSettings = action.payload as any;
      state.loading = false;
    });

    builder.addCase(fetchUserSetting.rejected, state => {
      state.loading = false;
    });
  },
}).reducer;
export default userSettingsSlice;
