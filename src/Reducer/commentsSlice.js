import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isCommentAreaOpen: false,
  commentId: null
};

const commentSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    toggleCommentArea: state => {
      state.isCommentAreaOpen = !state.isCommentAreaOpen;  
    },
    setIdForDelete: (state, action) => {
       state.commentId = action.payload;
    } 
  }
});

export const { toggleCommentArea, setIdForDelete } = commentSlice.actions;
export default commentSlice.reducer;
