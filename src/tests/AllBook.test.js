import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import EpicBooks from '../Components/Main/AllTheBooks/AllTheBooks';
import { getBooks } from '../Reducer/booksSlice';
import { store } from '..';
import { allBooks } from '../Reducer/booksSlice';

jest.mock('../Reducer/booksSlice');
jest.mock(allBooks)

const mockBooks = [
  { asin: '123', title: 'Book 1', desc: 'Description 1', price: '$10', src: 'path/to/img1.jpg' },
  { asin: '456', title: 'Book 2', desc: 'Description 2', price: '$15', src: 'path/to/img2.jpg' },
];

jest.mock("axios", () => ({
  get: jest.fn(() => Promise.resolve({ data: {} })),
  post: jest.fn(() => Promise.resolve({ data: {} })),
}));

jest.mock("nanoid", () => ({
  nanoid: jest.fn(() => "mocked_nanoid"),
}));

describe('BooksDisplay Component', () => {
  beforeEach(() => {
    getBooks.mockResolvedValue(mockBooks);
  });

  test('renders the correct number of cards based on fetched data', async () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <EpicBooks />
        </Provider>
      </MemoryRouter>
    );

    await screen.findAllByTestId('card');

    const cards = screen.getAllByTestId('card');
    expect(cards.length).toBe(mockBooks.length);
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
