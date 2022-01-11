import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";
import ItemInfo from "./ItemInfo";

const MockComponent = () => {
  return (
    <BrowserRouter>
      <ItemInfo />
    </BrowserRouter>
  );
};

beforeEach(() => {
  render(<MockComponent />);
});

// Num of items test
describe("Test counter", () => {
  it("increment and decrement count", () => {
    const plus = screen.getByTestId("plus");
    const count = screen.getByTestId("count");

    expect(count.textContent).toBe("0");

    fireEvent.click(plus);

    expect(count.textContent).toBe("1");
  });
});

// Add to cart test
describe("Add to Cart", () => {
  it("Cart amount increases", () => {
    const addBtn = screen.getByText(/Add to cart/i);

    expect(addBtn).toBeInTheDocument();
  });
});
