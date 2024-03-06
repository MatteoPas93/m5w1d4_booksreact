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

// test("Render CommentArea components", async () => {
//     await act(async () => {
//     render(<Provider store={store}> <CommentArea/> </Provider> )
// })
//     const commentsTitle = screen.queryByTestId('comments-title');
//     expect(commentsTitle).toBeTextContent('Comments')
    
   
// })