import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isCommentAreaOpen: false
};

const commentSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    toggleCommentArea: state => {
      state.isCommentAreaOpen = !state.isCommentAreaOpen;
    }
  }
});

export const { toggleCommentArea } = commentSlice.actions;
export default commentSlice.reducer;
