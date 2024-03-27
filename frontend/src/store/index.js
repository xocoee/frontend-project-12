import { configureStore } from '@reduxjs/toolkit';
import channelsSlice from './channelsSlice.js';
import messagesSlice from './messagesSlice.js';

const store = configureStore({
  reducer: {
    channel: channelsSlice,
    messages: messagesSlice
  },
})

export default store;
