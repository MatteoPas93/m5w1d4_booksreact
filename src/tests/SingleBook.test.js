import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import CardBook from "../Components/Card/SingleBook";
import { BrowserRouter } from "react-router-dom";
import EpicBooks from "../Components/Main/AllTheBooks/AllTheBooks";
import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "..";


// !TEST CARD NUMBER

const mockStore = configureStore([])

jest.mock("nanoid", () => ({
  nanoid: jest.fn(() => "mocked_nanoid"),
}));

jest.mock("axios", () => ({
  get: jest.fn(() => Promise.resolve({ data: {} })),
  post: jest.fn(() => Promise.resolve({ data: {} })),
}));

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: jest.fn(),
}));

const books = Array(150).fill("Book").map((index) => ({
    title: `Book ${index}`,
    img: `Img ${index}`,
    category: `Catwgory ${index}`,
    price: `Price ${index}`,
}))

const initialState = {
    booksData: {
      books: books,
    }
  };

const store = mockStore(initialState)
   

test("Renders all cards", () => {
  render(
    <Provider store={store}>
      <EpicBooks data={books} />
    </Provider>
  );

  const cards = screen.getAllByTestId("card");
  expect(cards).toHaveLength(books.length);
});

// !TEST BORDER COLOR

// test("Changes border color on click", async () => {
//   render(
//     <BrowserRouter>
//       {" "}
//       <CardBook />
//     </BrowserRouter>
//   );

//   const cardElement = screen.getByTestId("card");
//   expect(cardElement).toHaveStyle({ border: "1px solid black" });
// //   expect(cardElement.getAttribute("style")).toContain({ border: "1px solid black" });

//   fireEvent.click(cardElement);

//   expect(cardElement).toHaveStyle({ border: "2px solid red" });
//   //   expect(cardElement.getAttribute("style")).toContain({ border: "2px solid red" });
// });
