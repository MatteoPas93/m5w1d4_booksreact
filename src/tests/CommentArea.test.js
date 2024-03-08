import React from "react";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { render, screen, fireEvent, waitFor, act } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import CommentArea from "../Components/Main/AllTheBooks/Comment/CommentArea";
import CardBook from "../Components/Card/SingleBook";
import booksReducer from "../Reducer/booksSlice";
import themeReducer from "../Reducer/themeSlice";
import commentReducer from "../Reducer/commentsSlice";

// Combines reducers for books, theme, and comments into a single root reducer
export const reducer = combineReducers({
  booksData: booksReducer,
  theme: themeReducer,
  comment: commentReducer
});

// Configures the Redux store with the root reducer
export const store = configureStore({ reducer });

// Mocking axios for testing purposes to return a resolved promise
jest.mock("axios", () => ({
  get: jest.fn(() => Promise.resolve({ data: {} })),
  post: jest.fn(() => Promise.resolve({ data: {} })),
}));

// Mocking 'nanoid' to return a fixed value, used for generating unique IDs
jest.mock("nanoid", () => ({
  nanoid: jest.fn(() => "mocked_nanoid"),
}));

// Example of how to mock react-redux hooks (commented out)
// jest.mock("react-redux", () => ({
//   useSelector: jest.fn(),
//   useDispatch: jest.fn(),
// }));

describe("CardBook", () => {
  // Testing if the CardBook component renders correctly and if the comment area opens upon clicking the card
  test("renders correctly and opens comment area on click", async () => {
    render(
      <Provider store={store}>
        <Router>
          <CardBook />
          <CommentArea />
        </Router>
      </Provider>
    );

    // Getting the card element by its test ID
    const card = screen.getByTestId("card")

    // Simulating a click event on the card and checking if the comment area becomes visible
    await act(async () => {
      fireEvent.click(card);

      // Waiting for the assertion to be true that the comments area is visible
      waitFor(() => {
        expect(screen.getByTestId("comments-area")).toBeVisible();
      })
    })
  });
});
