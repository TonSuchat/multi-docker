import { render } from "@testing-library/react";
import App from "../App";
import Fib from "../Fib";

jest.mock("../Fib");

describe("App", () => {
  let FibMock: jest.Mock;

  beforeEach(() => {
    FibMock = Fib as jest.Mock;
    FibMock.mockImplementation(() => <div>Fib</div>);
  });

  it("should match snapshot", () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should generate links properly", () => {
    const { getByText } = render(<App />);
    expect(getByText("Home")).toBeInTheDocument();
    expect(getByText("Other Page")).toBeInTheDocument();
  });
});
