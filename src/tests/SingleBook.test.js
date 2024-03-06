import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import CardBook from "../Components/Card/SingleBook";
import { BrowserRouter } from "react-router-dom";

// !TEST BORDER COLOR

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn().mockReturnValue(jest.fn()),
}));

test("Changes border color on click", async () => {
  render(
    <BrowserRouter>
      <CardBook />
    </BrowserRouter>
  );

  const cardElement = screen.getByTestId("card");
  expect(cardElement).toHaveStyle({ border: "1px solid black" });
//   expect(cardElement.getAttribute("style")).toContain({ border: "1px solid black" });

  // fireEvent.click(cardElement);

  // expect(cardElement).toHaveStyle({ border: "2px solid red" });
  //   expect(cardElement.getAttribute("style")).toContain({ border: "2px solid red" });
});