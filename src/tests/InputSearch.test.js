// import React from "react";
// import { render, fireEvent } from "@testing-library/react";
// import { Provider } from "react-redux";
// import configureStore from "redux-mock-store";
// import SearchInput from "../Components/Main/AllTheBooks/InputSearch/SearchInput";
// import { filterBooks, getBooks } from "../../../../Reducer/booksSlice";

// const mockStore = configureStore([]);

// describe("SearchInput component", () => {
//   let store;

//   beforeEach(() => {
//     store = mockStore({
//       booksData: {
//         books: [],
//         isLoading: false,
//         error: null
//       }
//     });
//   });

//   test("dispatches filterBooks action on input change with input value length > 1", () => {
//     const { getByPlaceholderText } = render(
//       <Provider store={store}>
//         <SearchInput />
//       </Provider>
//     );

//     const input = getByPlaceholderText("Search book...");
//     fireEvent.change(input, { target: { value: "Harry Potter" } });

//     expect(store.dispatch).toHaveBeenCalledWith(filterBooks("Harry Potter"));
//   });

//   test("dispatches getBooks action on input change with input value length <= 1", () => {
//     const { getByPlaceholderText } = render(
//       <Provider store={store}>
//         <SearchInput />
//       </Provider>
//     );

//     const input = getByPlaceholderText("Search book...");
//     fireEvent.change(input, { target: { value: "H" } });

//     expect(store.dispatch).toHaveBeenCalledWith(getBooks());
//   });
// });
