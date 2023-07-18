import { render, screen } from "@testing-library/react";
import { Greet2 } from "./greet2";

// test('Greet2 render', () => {
//     render(<Greet2/>);
//     const textElement = screen.getByText("Hello");
//     expect(textElement).toBeInTheDocument();
// });

// test('Greet2 with name', () => {
//     render(<Greet2 name="Soliman"/>);
//     const textElement = screen.getByText("Hello Soliman");
//     expect(textElement).toBeInTheDocument();
// });

// test Grouping

// describe("Greet Group1", ()=>{
//     test('render', () => {
//         render(<Greet2/>);
//         const textElement = screen.getByText("Hello");
//         expect(textElement).toBeInTheDocument();
//     });

//     test('with name', () => {
//         render(<Greet2 name="Soliman"/>);
//         const textElement = screen.getByText("Hello Soliman");
//         expect(textElement).toBeInTheDocument();
//     });
// })

// describe("Greet Group2" , ()=>{
//     test('render', () => {
//         render(<Greet2/>);
//         const textElement = screen.getByText("Hello");
//         expect(textElement).toBeInTheDocument();
//     });

//     test('with name', () => {
//         render(<Greet2 name="Soliman"/>);
//         const textElement = screen.getByText("Hello Soliman");
//         expect(textElement).toBeInTheDocument();
//     });
// })

// coverageThreshold
describe("Greet Threshold", () => {
  test("render", () => {
    render(<Greet2 />);
    const textElement = screen.getByText(/Hello/);
    expect(textElement).toBeInTheDocument();
  });
});
