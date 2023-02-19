import React from "react";
import { render, screen } from "@testing-library/react";
import AddProperty from "../../components/AddProperty.js";

describe("AddProperty", () => {
  test("renders correctly", () => {
    const { asFragment } = render(<AddProperty />);

    expect(asFragment()).toMatchSnapshot();
  });

  test("renders title feild", () => {
    render(<AddProperty />);
    const title = screen.getByLabelText(/property description/i);

    expect(title).toHaveAttribute("name", "title");
    expect(title).toHaveDisplayValue("");
  });

  test("renders city field", () => {
    render(<AddProperty />);
    const city = screen.getByLabelText(/city/i);

    expect(city).toHaveAttribute("name", "city");
    expect(city).toHaveDisplayValue("Manchester");
  });

  test("renders type field", () => {
    render(<AddProperty />);
    const type = screen.getByLabelText(/type/i);

    expect(type).toHaveAttribute("name", "type");
    expect(type).toHaveDisplayValue("Flat");
  });

  test("renders bedrooms field", () => {
    render(<AddProperty />);
    const bedrooms = screen.getByLabelText(/bedrooms/i);

    expect(bedrooms).toHaveAttribute("name", "bedrooms");
    expect(bedrooms).toHaveDisplayValue("");
    expect(bedrooms).toHaveAttribute("min", "0");
  });

  test("renders bathrooms field", () => {
    render(<AddProperty />);
    const bathrooms = screen.getByLabelText(/bathrooms/i);

    expect(bathrooms).toHaveAttribute("name", "bathrooms");
    expect(bathrooms).toHaveDisplayValue("");
    expect(bathrooms).toHaveAttribute("min", "0");
  });

  test("renders price field", () => {
    render(<AddProperty />);
    const price = screen.getByLabelText(/price/i);

    expect(price).toHaveAttribute("name", "price");
    expect(price).toHaveDisplayValue("");
    expect(price).toHaveAttribute("min", "0");
    expect(price).toHaveAttribute("step", "0.01");
  });

  test("renders email field", () => {
    render(<AddProperty />);
    const email = screen.getByLabelText(/email/i);

    expect(email).toHaveAttribute("name", "email");
    expect(email).toHaveDisplayValue("");
    expect(email).toHaveAttribute("type", "email");
  });
});
