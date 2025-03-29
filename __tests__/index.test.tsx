/**
 * @jest-environment jsdom
 */
import { Button } from "@/components/ui/button";
import { render } from "@testing-library/react";

describe("Component", () => {
  it("renders a heading", () => {
    render(<Button value={'hi'}/>);

    // const heading = screen.getByRole("heading", {
    //   name: /welcome to next\.js!/i,
    // });

    // expect(heading).toBeInTheDocument();
  });
});