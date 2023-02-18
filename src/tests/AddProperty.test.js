import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "@testing-library/react";
import AddProperty from "../components/AddProperty";

const RouterRender = () => {
    return (
        <Router>
            <AddProperty />
        </Router>
    );
};

describe('AddProperty', () => {
    test('renders correctly', () => {
        const { asFragment } = render(<RouterRender />);

        expect(asFragment()).toMatchSnapshot();
    });
});