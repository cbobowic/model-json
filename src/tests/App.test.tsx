import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import App from "../App";

afterEach(() => {
  cleanup();
});

test("renders homepage", () => {
  render(<App />);
  // check for title
  expect(screen.getByText(/Colden Bobowick/i)).toBeInTheDocument();
  // check for nav links
  expect(screen.getByText(/About/i)).toBeInTheDocument();
  expect(screen.getByText(/Projects/i)).toBeInTheDocument();
  expect(screen.getByText(/Contact/i)).toBeInTheDocument();

  expect(screen.getByLabelText("home button")).not.toBeVisible();
  expect(screen.getByLabelText("back button")).not.toBeVisible();
});

test("renders about page", async () => {
  render(<App />);
  fireEvent.click(screen.getByText(/About/i));
  expect(screen.getByLabelText("about heading")).toBeInTheDocument();
  expect(screen.getByLabelText("Colden Bobowick headshot")).toBeInTheDocument();

  await waitFor(() => {
    expect(screen.getByLabelText("home button")).toBeVisible();
    expect(screen.getByLabelText("back button")).visibility === "hidden";
  });
});

test("renders contact page", () => {
  render(<App />);
  fireEvent.click(screen.getByText(/Contact/i));
  expect(screen.getByLabelText("contact heading")).toBeInTheDocument();
  expect(screen.getByLabelText("linkedin icon")).toBeInTheDocument();
  expect(screen.getByLabelText("github icon")).toBeInTheDocument();
  expect(screen.getByLabelText("email icon")).toBeInTheDocument();

  expect(screen.getByLabelText("home button")).toBeVisible();
  expect(screen.getByLabelText("back button")).not.toBeVisible();
});

test("renders projects page", () => {
  render(<App />);
  fireEvent.click(screen.getByLabelText(/projects nav/i));
  expect(screen.getByLabelText("projects heading")).toBeInTheDocument();

  expect(screen.getByLabelText("home button")).toBeVisible();
  expect(screen.getByLabelText("back button")).not.toBeVisible();
});

test("renders stylegan page", () => {
  render(<App />);
  fireEvent.click(screen.getByLabelText(/projects nav/i));
  fireEvent.click(screen.getByText(/StyleGAN/i));

  expect(screen.getByLabelText("stylegan heading")).toBeInTheDocument();
  expect(screen.getByLabelText("vgg16")).toBeInTheDocument();
  expect(screen.getByLabelText("saliency maps")).toBeInTheDocument();
  expect(screen.getByLabelText("lime")).toBeInTheDocument();
  expect(screen.getByLabelText("github icon")).toBeInTheDocument();
});

test("renders magnetorquer page", () => {
  render(<App />);
  fireEvent.click(screen.getByLabelText(/projects nav/i));
  fireEvent.click(screen.getByText(/Magnetorquer/i));

  expect(screen.getByLabelText("magnetorquer heading")).toBeInTheDocument();
  expect(screen.getByLabelText("param analysis figure")).toBeInTheDocument();
  expect(screen.getByLabelText("github icon")).toBeInTheDocument();
});

test("renders eventify page", () => {
  render(<App />);
  fireEvent.click(screen.getByLabelText(/projects nav/i));
  fireEvent.click(screen.getByText(/Eventify/i));

  expect(screen.getByLabelText("eventify heading")).toBeInTheDocument();
  expect(screen.getByLabelText("eventify login")).toBeInTheDocument();
  expect(screen.getByLabelText("eventify dataflow")).toBeInTheDocument();
  expect(screen.getByLabelText("email icon")).toBeInTheDocument();
});

test("renders lewas page", () => {
  render(<App />);
  fireEvent.click(screen.getByLabelText(/projects nav/i));
  fireEvent.click(screen.getByText(/LEWAS/i));

  expect(screen.getByLabelText("lewas heading")).toBeInTheDocument();
  expect(screen.getByLabelText("old owls")).toBeInTheDocument();
  expect(screen.getByLabelText("old owls")).toBeInTheDocument();
  expect(screen.getByLabelText("salinity")).toBeInTheDocument();
  expect(screen.getByLabelText("mail icon")).toBeInTheDocument();
});
