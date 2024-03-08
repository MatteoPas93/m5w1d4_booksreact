import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import booksSlice from '../Reducer/booksSlice'; // Assume this is your structure
import EpicBooks from '../Components/Main/AllTheBooks/AllTheBooks';


jest.mock("axios", () => ({
  get: jest.fn(() => Promise.resolve({ data: {} })),
  post: jest.fn(() => Promise.resolve({ data: {} })),
}));

// Creating a mock store with predefined state
const store = configureStore({
  reducer: {
    booksData: booksSlice,
  },
  preloadedState: {
    booksData: {
      books: [
        { asin: '123', title: 'Book 1', img: 'path/to/img1.jpg', category: 'Category 1', price: '10' },
        { asin: '456', title: 'Book 2', img: 'path/to/img2.jpg', category: 'Category 2', price: '15' },
      ],
    },
  },
});

describe('EpicBooks Component', () => {
  test('renders the correct number of cards based on fetched data', async () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <EpicBooks />
        </Provider>
      </MemoryRouter>
    );

    // Waiting for the card components to be rendered
    const cards = await screen.findAllByTestId('card');
    expect(cards).toHaveLength(2);
  });
});




// !TEST CARD 

// async function fetchLibrary() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(['Harry Potter', 'Il Signore degli Anelli', 'Cronache del ghiaccio e del fuoco']);
//     }, 1000); 
//   });
// }

// test('Verifica se fetchLibrary ottiene correttamente elenco dei libri', async () => {
//   const books = await fetchLibrary(); 

//   expect(books).toHaveLength(3); 
//   expect(books).toContain('Harry Potter'); 
//   expect(books).toContain('Il Signore degli Anelli'); 
//   expect(books).toContain('Cronache del ghiaccio e del fuoco');
// });
