import { render, screen, fireEvent, waitFor, act} from "@testing-library/react";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import CardBook from "../Components/Card/SingleBook";
import CommentArea from "../Components/Main/AllTheBooks/Comment/CommentArea";
jest.mock("axios", () => ({
  get: jest.fn(() => Promise.resolve({ data: {} })),
  post: jest.fn(() => Promise.resolve({ data: {} })),
}));

jest.mock("nanoid", () => ({
  nanoid: jest.fn(() => "mocked_nanoid"),
}));

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));
describe("CardBook", () => {
  test("renders correctly and opens comment area on click", async () => {
    render(
      <Router>
        <CardBook />
        <CommentArea />
      </Router>
    );

    const card = screen.getByTestId("card")

    await act(async () => {
    fireEvent.click(card);

    await waitFor(() => {
    expect(screen.getByTestId("comments-area")).toBeVisible();
    })
})
  });
});
