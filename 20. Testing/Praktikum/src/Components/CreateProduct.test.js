import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CreateProduct from "./CreateProduct";

describe("CreateProduct Component", () => {
  test("should accept input for Product Name and display it", () => {
    render(<CreateProduct addProduct={() => {}} />);
    const productNameInput = screen.getByLabelText(/Product Name/i);
    fireEvent.change(productNameInput, { target: { value: "Test Product" } });
    expect(productNameInput.value).toBe("Test Product");
  });

  // Other tests...
});
