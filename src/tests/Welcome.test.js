import { screen, render } from "@testing-library/react";
import AppWelcome from "../Components/Welcome/Welcome";



test("Renders AppWelcome component", () => {
    render(<AppWelcome/>) 

    const messagePage = screen.getByTestId('messagePage');
    expect(messagePage).toBeTruthy()

    const counterPage = screen.getByTestId('counterPage');
    expect(counterPage).toBeTruthy()
})