import { screen, render } from "@testing-library/react";
import React from "react";
import AppWelcome from "../Components/Welcome/Welcome";



test("Renders AppWelcome component", () => {
    render(<AppWelcome/>) 

    const messagePage = screen.getByTestId('messagePage');
    expect(messagePage).toBeInTheDocument()

    const counterPage = screen.getByTestId('counterPage');
    expect(counterPage).toBeInTheDocument()
})