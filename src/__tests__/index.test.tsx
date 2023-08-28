import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../app/page";
import LeftNavigation from "@/components/layout/LeftNavigation";

// describe("Home", () => {
//   it("Check when the navigation is closed", () => {
//     render(<LeftNavigation />);

//     const openButton = screen.getByTestId("navigation-open-button");

//     expect(openButton).toBeInTheDocument();
//   });
//   it("Check when the navigation is closed", async () => {
//     render(<LeftNavigation />);

//     const openButton = screen.getByTestId("navigation-open-button");

//     fireEvent.click(openButton);

//     const closeButton = screen.getByTestId("navigation-close-button");

//     expect(closeButton).toBeInTheDocument();
//   });
// });
