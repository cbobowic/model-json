import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import FileInput from "../components/FileInput";

beforeEach(() => {
  render(<FileInput onError={testOnError} />);
});

afterEach(() => {
  cleanup();
});

function testOnError(error: Error) {
  console.log(error);
}

test("non image file", () => {
  // load a non image file
  const file = new File(["hello"], "hello.txt", { type: "text/plain" });
  const input = screen.getByLabelText("file input");
  fireEvent.change(input, { target: { files: [file] } });
  waitFor(() => {
    expect(
      screen.getByText(/Please upload a .jpg, .jpeg, or .png file./i)
    ).toBeInTheDocument();
    expect(screen.getByLabelText("error alert")).toBeInTheDocument();
  });
});

test("image file", () => {
  // load an image file
  const file = new File(["hello"], "hello.jpg", { type: "image/jpeg" });
  const input = screen.getByLabelText("file input");
  fireEvent.change(input, { target: { files: [file] } });
  waitFor(() => {
    expect(screen.getByLabelText("the model")).toBeInTheDocument();
  });
});

test("image deemed fake", () => {
  const path = "bobowick-websrc\tests\test_fake.jpg";
  const img = new File([path], "test_fake.jpg", { type: "image/jpg" });
  const input = screen.getByLabelText("file input");
  fireEvent.change(input, { target: { files: [img] } });
  waitFor(() => {
    expect(screen.getByLabelText("the model")).toBeInTheDocument();
    expect(screen.getByLabelText("fake")).toBeInTheDocument();
    expect(screen.getByLabelText("model result")).color === "error";
    expect(screen.getByLabelText("model result")).toHaveTextContent("Fake");
    expect(screen.getByLabelText("model result")).not.toHaveTextContent("Real");
  });
});

test("image deemed real", () => {
  const path = "bobowick-websrc\tests\test_real.jpg";
  const img = new File([path], "test_real.jpg", { type: "image/jpg" });
  const input = screen.getByLabelText("file input");
  fireEvent.change(input, { target: { files: [img] } });
  waitFor(() => {
    expect(screen.getByLabelText("the model")).toBeInTheDocument();
    expect(screen.getByLabelText("real")).toBeInTheDocument();
    expect(screen.getByLabelText("model result")).color === "success";
    expect(screen.getByLabelText("model result")).toHaveTextContent("Real");
    expect(screen.getByLabelText("model result")).not.toHaveTextContent("Fake");
  });
});
