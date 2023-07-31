import { render, screen } from '@testing-library/react';
import CarCard from "./CarCard";

describe("CarCard", () => {
  const mockCar = {
    city_mpg: 30,
    year: 2022,
    make: "Test Make",
    model: "Test Model",
    transmission: "a",
    drive: "testDrive",
    class: "dd",
    combination_mpg: 1,
    cylinders: 2,
    displacement: 3,
    fuel_type: "gas",
    highway_mpg: 2,
  };

  it("renders the car details", () => {
    render(<CarCard car={mockCar} />);

    // Check if car make and model are displayed
    const titleElement = screen.getByText(`${mockCar.make} ${mockCar.model}`);
    expect(titleElement).toBeInTheDocument();

    // Check if car transmission is displayed
    const transmissionElement = screen.getByText(/Automatic/);
    expect(transmissionElement).toBeInTheDocument();

    // Check if car drive is displayed
    const driveElement = screen.getByText(mockCar.drive.toUpperCase());
    expect(driveElement).toBeInTheDocument();

    // Check if car city_mpg is displayed
    const mpgElement = screen.getByText(`${mockCar.city_mpg} MPG`);
    expect(mpgElement).toBeInTheDocument();

    // Check if "View More" button is displayed
    const viewMoreButton = screen.getByRole("button", { name: /View More/i });
    expect(viewMoreButton).toBeInTheDocument();
  });

  // Add more tests if needed
});
