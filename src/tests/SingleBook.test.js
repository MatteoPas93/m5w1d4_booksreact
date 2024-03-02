// import React from "react";
// import { render, fireEvent, screen } from "@testing-library/react";
// import CardBook from "../Components/Card/SingleBook";

// // !TEST CARD NUMBER

// jest.mock('nanoid', () => ({
//         nanoid: jest.fn(() => 'mocked_nanoid')
//       }));

//       jest.mock('axios', () => ({
//             get: jest.fn(() => Promise.resolve({ data: {} })),
//             post: jest.fn(() => Promise.resolve({ data: {} })),
//           }));

//           jest.mock("react-redux", () => ({
//             ...jest.requireActual("react-redux"),
//             useDispatch: jest.fn(),
//           }));

//           const books = Array.from({ length: 150 }, (_, index) => ({
//             id: index + 1,
//             title: `Book ${index + 1}`
//           }));

// test("Renders all cards", () => {
//     render(<CardBook data={books} />);

//     const cards = screen.getAllByTestId("card");
//     expect(cards.length).toEqual(books.length);
// })


// !TEST BORDER COLOR

// jest.mock('nanoid', () => ({
//         nanoid: jest.fn(() => 'mocked_nanoid')
//       }));

//       jest.mock('axios', () => ({
//             get: jest.fn(() => Promise.resolve({ data: {} })),
//             post: jest.fn(() => Promise.resolve({ data: {} })),
//           }));
// test("Changes border color on click", async () => {
//     render(<Provider store={store}> <CardBook /></Provider>)

//     const cardElement = screen.getByTestId('card')
//     expect(cardElement).toHaveStyle({borderColor: "black"})

//     fireEvent.click(cardElement)

//     await axios.get()
//     await axios.post()
//     expect(cardElement).toHaveStyle({borderColor: "red"})
// })



