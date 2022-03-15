import { Header } from "./header.js";
import { screen } from "@testing-library/dom";

describe("testing Header", () => {
  test("Testing h1 is rendered, should be Ok", () => {
    document.body.innerHTML = "<header id='header'></header>";

    new Header().render("#header");

    expect(screen.getByText(/Tour of Heroes/i)).toBeTruthy();
  });
  test("Testing h1 is rendered, should be Ok", () => {
    document.body.innerHTML = "<header id='header'></header>";

    new Header().render("#header");

    expect(screen.getByRole("link", { name: "Dashboard" })).toBeTruthy();
  });
});
