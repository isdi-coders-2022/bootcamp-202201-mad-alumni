import { Heroeslist } from "./heroeslist.js";

describe("testing HeroesList", () => {
  test("Testing heroeslist is rendered, should be Ok", () => {
    document.body.innerHTML = "<div id='heroeslist'></div>";

    new Heroeslist().render("#heroeslist");

    expect(screen.getByText(/My Heroes/i)).toBeTruthy();
  });
});
