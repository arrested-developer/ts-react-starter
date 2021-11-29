import { render } from "@testing-library/react";
import Simple from "./simple";

describe("smoke test", () => {
  it("renders", () => {
    render(<Simple />);
  });
});
