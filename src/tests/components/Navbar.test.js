import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import Navbar from "../../components/Navbar";

const RouterRender = () => {
  return (
    <Router>
      <Navbar />
    </Router>
  );
};

describe("Navbar", () => {
  test("renders correctly", () => {
    const { asFragment } = render(<RouterRender />);

    expect(asFragment()).toMatchSnapshot();
  });

  test("renders logo", () => {
    render(<RouterRender />);
    const logo = screen.getByAltText("logo");

    expect(logo).toBeInTheDocument();
  });

  test("renders two nav links", () => {
    render(<RouterRender />);
    const links = screen.getAllByRole("link");

    expect(links).toHaveLength(2);
    expect(links[0]).toHaveTextContent(/view properties/i);
    expect(links[1]).toHaveTextContent(/add a property/i);
    expect(links[0]).toHaveAttribute("href", "/");
    expect(links[1]).toHaveAttribute("href", "/add-property");
  });
});
