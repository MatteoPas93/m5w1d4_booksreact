import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import CardBook from "../Components/Card/SingleBook";
import axios from "axios";

jest.mock('nanoid', () => ({
        nanoid: jest.fn(() => 'mocked_nanoid')
      }));

      jest.mock('axios', () => ({
            get: jest.fn(() => Promise.resolve({ data: {} })),
            post: jest.fn(() => Promise.resolve({ data: {} })),
          }));
test("Changes border color on click", async () => {
    render(<CardBook />)

    const cardElement = screen.getByTestId('card-border')
    expect(cardElement).toHaveStyle({borderColor: "black"})

    fireEvent.click(cardElement)

    await axios.get()
    await axios.post()
    expect(cardElement).toHaveStyle({borderColor: "red"})
})

