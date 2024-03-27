import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
import { getAuthConfig } from '../utils/storageUtils';

export const fetchChannels = createAsyncThunk(
  'channels/fetchChannels',
  async (thunkAPI) => {
    try {
      const { data } = await axios.get('/api/v1/channels', getAuthConfig());
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const addChannels = createAsyncThunk(
  'channels/addChannels',
  async (channelData, thunkAPI) => {
    try {
      const { data } = await axios.post('/api/v1/channels', channelData, getAuthConfig());
      return data; // Повертаємо дані, отримані з сервера
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

const initialState = {
  chats: [],
}

export const channelsSlice = createSlice({
  name: 'chats',
  initialState,
  reducers: {
    reset: (state) => {
      state.chats = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchChannels.fulfilled, (state, action) => {
        state.chats = action.payload;
      })
      .addCase(fetchChannels.rejected, (state, action) => {
        state.chats = [];
      })
      .addCase(addChannels.fulfilled, (state, action) => {
        state.chats.push(action.payload);
      })
      .addCase(addChannels.rejected, (state, action) => {
        state.chats = [];
      })
  },
})

export const { reset } = channelsSlice.actions

export default channelsSlice.reducer
