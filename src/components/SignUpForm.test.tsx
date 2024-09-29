import { render, screen, fireEvent, within, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import SignUpForm from "./SignUpForm";
import { Provider } from "react-redux";
import { store } from "../store";
import "./matchMedia";

let onSubmit: jest.Mock;

const renderComponent = (submitMock = onSubmit) =>
  render(
    <Provider store={store}>
      <SignUpForm onSubmit={submitMock} />
    </Provider>
  );

describe("SignUpForm Component", () => {
  beforeEach(() => {
    onSubmit = jest.fn();
    // eslint-disable-next-line testing-library/no-render-in-setup
    renderComponent();
  });

  test("Displays content: Create Account", () => {
    expect(screen.getByTestId("createAccountText")).toBeInTheDocument();
  });

  test("renders all form fields and buttons", () => {
    expect(screen.getByPlaceholderText("Full Name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Email address")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
    expect(screen.getByTestId("signupbutton")).toBeInTheDocument();
  });

  test("displays validation messages if fields are empty on submit", async () => {
    fireEvent.click(screen.getByTestId("signupbutton"));

    expect(
      await screen.findByText("Please enter your full name!")
    ).toBeInTheDocument();
    expect(
      await screen.findByText("Please enter your email!")
    ).toBeInTheDocument();
    expect(
      await screen.findByText("Please enter your password!")
    ).toBeInTheDocument();
  });

  test("shows an error for invalid email input", async () => {
    await userEvent.type(
      screen.getByPlaceholderText("Email address"),
      "invalidemail"
    );
    fireEvent.click(screen.getByTestId("signupbutton"));

    expect(
      await screen.findByText("The input is not valid email!")
    ).toBeInTheDocument();
  });

  test("shows an error for password that is too short", async () => {
    await userEvent.type(screen.getByPlaceholderText("Password"), "pass");
    fireEvent.click(screen.getByTestId("signupbutton"));

    expect(
      await screen.findByText("Password must be at least 8 characters!")
    ).toBeInTheDocument();
  });

  test("shows an error for invalid password characters", async () => {
    await userEvent.type(screen.getByPlaceholderText("Password"), "pass@123");
    fireEvent.click(screen.getByTestId("signupbutton"));

    expect(
      await screen.findByText("Password can only contain letters and numbers!")
    ).toBeInTheDocument();
  });

  test("successful form submission when all fields are valid", async () => {
    const form = screen.getByTestId("signupFormMain");
    await act(async () => {
      await userEvent.type(
        within(form).getByTestId("fullNameInput"),
        "John Doe"
      );
      await userEvent.type(
        within(form).getByTestId("emailInput"),
        "johndoe@example.com"
      );
      await userEvent.type(
        within(form).getByTestId("passwordInput"),
        "password123"
      );
      fireEvent.click(within(form).getByTestId("termscheckbox"));
      fireEvent.click(within(form).getByTestId("signupbutton"));
    });
    expect(onSubmit).toHaveBeenCalled();
  });
});
