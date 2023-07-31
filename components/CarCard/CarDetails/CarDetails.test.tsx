import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event"; // Import userEvent for simulating user actions
import CarDetails from "./CarDetails";

describe("CarDetails", () => {
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

  it("renders car details in dialog when isOpen is true", () => {
    // Define a function to close the dialog (useful for later)
    const closeMock = jest.fn();

    // Render the CarDetails component with isOpen=true and car prop
    render(<CarDetails isOpen={true} closeModal={closeMock} car={mockCar} />);

    // Check if the car make and model are displayed
    const titleElement = screen.getByText(`${mockCar.make} ${mockCar.model}`);
    expect(titleElement).toBeInTheDocument();

    // Check if the "Close" button is displayed
    const closeButton = screen.getByRole("button", { name: /close/i });
    expect(closeButton).toBeInTheDocument();

    // Check if the car details are displayed
    Object.entries(mockCar).forEach(([key, value]) => {
      // Format the key to be capitalized with spaces
      const formattedKey = key.split("_").join(" ");

      // Check if the formatted key and its value are displayed
      const keyElement = screen.getByText(formattedKey);
      const valueElement = screen.getByText(value.toString()); // Convert value to string as it could be a number

      expect(keyElement).toBeInTheDocument();
      expect(valueElement).toBeInTheDocument();
    });

    // Simulate a click on the "Close" button
    userEvent.click(closeButton);

    // Check if the closeMock function is called
    expect(closeMock).toHaveBeenCalled();
  });
});
