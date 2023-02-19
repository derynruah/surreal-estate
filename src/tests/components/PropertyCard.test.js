import React from "react";
import { render, screen } from "@testing-library/react";
import PropertyCard from "../../components/PropertyCard";

describe("PropertyCard", () => {
  const validProps = {
    title: "Stub description",
    type: "Stub type",
    bathrooms: 2,
    bedrooms: 5,
    price: 10000,
    city: "Stub city",
    email: "stub@email.com",
  };

  test("renders correctly", () => {
    const { asFragment } = render(
      <PropertyCard
        title={validProps.title}
        type={validProps.type}
        bathrooms={validProps.bathrooms}
        bedrooms={validProps.bedrooms}
        price={validProps.price}
        city={validProps.city}
        email={validProps.email}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  test("renders correct values for props", () => {
    render(
      <PropertyCard
        title={validProps.title}
        type={validProps.type}
        bathrooms={validProps.bathrooms}
        bedrooms={validProps.bedrooms}
        price={validProps.price}
        city={validProps.city}
        email={validProps.email}
      />
    );

    expect(screen.getByText(validProps.title)).toBeInstanceOf(
      HTMLHeadingElement
    );
    expect(screen.getByText(new RegExp(validProps.type))).toHaveTextContent(
      `${validProps.type} - ${validProps.city}`
    );
    expect(screen.getByText(validProps.bathrooms)).toHaveTextContent(/2/i);
    expect(screen.getByText(validProps.bedrooms)).toHaveTextContent(/5/i);
    expect(screen.getByText(validProps.price)).toHaveTextContent("10000");
    expect(screen.getByText(new RegExp(validProps.city))).toHaveTextContent(
      `${validProps.type} - ${validProps.city}`
    );
    expect(screen.getByText(/email/i)).toHaveAttribute(
      "href",
      `mailto:${validProps.email}`
    );
  });
});
