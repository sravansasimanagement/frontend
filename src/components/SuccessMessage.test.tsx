import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SuccessMessage from "./SuccessMessage";

test("Display content: logoImage", async () => {
  render(<SuccessMessage />);
  expect(screen.getByTestId("logoImage")).toBeTruthy();
});

test("Display content: Successfully Submitted!", async () => {
  render(<SuccessMessage />);
  expect(screen.getByText("Successfully Submitted!")).toBeTruthy();
});

test("Display content: succesIcon", async () => {
  render(<SuccessMessage />);
  expect(screen.getByTestId("succesIcon")).toBeTruthy();
});

test("Display content: Our representative will get in touch with you shortly.!", async () => {
  render(<SuccessMessage />);
  expect(
    screen.getByText("Our representative will get in touch with you shortly.")
  ).toBeTruthy();
});
