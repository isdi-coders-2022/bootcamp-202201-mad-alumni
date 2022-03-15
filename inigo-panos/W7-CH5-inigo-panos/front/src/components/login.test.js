import { LogIn } from "./login";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { store } from "../redux/store";

describe("LogIn componenet ", () => {
  test("should be rendered", () => {
    render(
      <Provider store={store}>
        <LogIn />
      </Provider>
    );
    expect(screen.getByPlaceholderText(/UserName/i));
    expect(screen.getByPlaceholderText(/Password/i));
  });
});
