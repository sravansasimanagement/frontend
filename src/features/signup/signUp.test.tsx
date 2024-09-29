import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { SignUp } from "./signUp";
import { Provider } from "react-redux";
import { store } from "../../store";
import "../../components/matchMedia";
import "@testing-library/jest-dom";

test("SignUp component: render", async () => {
  render(
    <Provider store={store}>
      <SignUp />
    </Provider>
  );
});
