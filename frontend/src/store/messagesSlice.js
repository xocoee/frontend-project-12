import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
import { getAuthConfig } from '../utils/storageUtils';

export const fetchMessages = createAsyncThunk(
    'messages/fetchMessages',
    async (id, thunkAPI) => {
      try {
        const { data } = await axios.get('/api/v1/messages', getAuthConfig());
        return data.filter(el => el.channelId === id.toString())
      } catch (error) {
        return thunkAPI.rejectWithValue({ error: error.message });
      }
    }
);

export const addMessage = createAsyncThunk(
    'messages/addMessage',
    async (message, thunkAPI) => {
      try {
        const { data } = await axios.post('/api/v1/messages', message, getAuthConfig());
        thunkAPI.dispatch(fetchMessages(data.channelId)); // redux action. селектори. редьюсери
        return data;
      } catch (error) {
        return thunkAPI.rejectWithValue({ error: error.message });
      }
    }
);

  const initialState = {
    messages: [],
  }

  export const messagesSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {
        reset: (state) => {
          state.messages = [];
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchMessages.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.messages = action.payload;
          })
        .addCase(fetchMessages.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.payload.error;
        })
    },
});

export const { reset } = messagesSlice.actions

export default messagesSlice.reducer
