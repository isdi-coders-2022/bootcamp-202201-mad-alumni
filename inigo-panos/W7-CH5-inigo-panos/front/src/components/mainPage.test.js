import { MainPage } from "./mainPage";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../redux/store";

describe("Main page is called", () => {
  test("should be rendered", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <MainPage />
        </MemoryRouter>
      </Provider>
    );
  });
  // render(<MainPage />);
  // expect(screen.getByText("Please, log in to see your profile"));
});
