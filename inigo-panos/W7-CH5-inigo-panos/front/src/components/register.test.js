import { Register } from "./register";
import { screen } from "@testing-library/react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../redux/store";

describe("Register component ", () => {
  test("should be rendered", () => {
    render(
      <Provider store={store}>
        <Register />
      </Provider>
    );
    expect(screen.getByPlaceholderText(/UserName/i));
    expect(screen.getByPlaceholderText(/Password/i));
    expect(screen.getByPlaceholderText(/Profile Image/i));
  });

  // describe('When submitting the form', () => {
  //   test('It should ')
  // })
});
