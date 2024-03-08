import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const url = "https://striveschool-api.herokuapp.com/books";
export const apiKey =
"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWNmNjhlMjA0NTcyZjAwMTk0OTM5NTgiLCJpYXQiOjE3MDgwOTE2MTgsImV4cCI6MTcwOTMwMTIxOH0.4WIOaHC0kc_1yvuly5YFr9w1gAL-ie7rgbByotZWHyg";

const initialState = {
  books: [],
  isLoading: false,
  error: null,
};

export const getBooks = createAsyncThunk("books/GETBooks", async () => {
  try {
    const response = await axios.get(url, {
      headers: { Authorization: `${apiKey}` },
    });
    return await response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
});

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    filterBooks: (state, action) => {
      const lowerCasePayload = action.payload.toLowerCase();
       state.books = state.books.filter((book) => {
        return book.title.toLowerCase().includes(lowerCasePayload);
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.books = action.payload || [];
      })
      .addCase(getBooks.rejected, (state) => {
        state.isLoading = false;
        state.error = "Something went wrong, please try again later.";
      });
  },
});

export const allBooks = (state) => state.booksData.books;
export const isAllBooksLoading = (state) => state.booksData.isLoading;
export const isAllBooksError = (state) => state.booksData.error;
export const { filterBooks, handleRendering } = booksSlice.actions;
export const isRendering = (state) => state.booksData.rendering

export default booksSlice.reducer;
