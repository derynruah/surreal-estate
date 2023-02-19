import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "@testing-library/react";
import Properties from "../../components/Properties";

const RouterRender = () => {
  return (
    <Router>
      <Properties />
    </Router>
  );
};

describe("Properties", () => {
  test("renders correctly", () => {
    const { asFragment } = render(<RouterRender />);

    expect(asFragment()).toMatchSnapshot();
  });
});
