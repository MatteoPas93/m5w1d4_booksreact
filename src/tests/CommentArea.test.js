// import React from "react";
// import { screen, render, act } from "@testing-library/react";
// import CommentArea from "../Components/Main/AllTheBooks/Comment/CommentArea";
// import { Provider } from "react-redux";
// import { store } from "../index";


// jest.mock('axios', () => ({
//     get: jest.fn(() => Promise.resolve({ data: {} })),
//     post: jest.fn(() => Promise.resolve({ data: {} })),
//   }));

//   jest.mock('nanoid', () => ({
//     nanoid: jest.fn(() => 'mocked_nanoid')
//   }));


// test('comments section is rendered correctly', () => {
  
//     render(
//       <Provider store={store}>
//         <CommentArea />
//       </Provider>
//     );

//     const commentsPage = screen.getByTestId('comments-title');
//     expect(commentsPage).toBeInTheDocument()

  
//     // expect(getByText('Comments')).toBeInTheDocument();
//   });