import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import App from "./App";

// Mock
vi.mock("@lauraadan/react-component-library", () => ({
  Button: ({
    children,
  }: React.PropsWithChildren<
    React.ButtonHTMLAttributes<HTMLButtonElement>
  >) => <button>{children}</button>,

  Alert: ({ children }: React.PropsWithChildren) => <div>{children}</div>,

  Card: ({ title }: { title: string }) => (
    <div>
      <h3>{title}</h3>
    </div>
  ),

  Accordion: ({
    items,
  }: {
    items: { title: string; description: string }[];
  }) => (
    <div>
      {items.map((item) => (
        <div key={item.title}>
          <button>{item.title}</button>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  ),
}));

describe("Demo App", () => {
  it("renders the main title", () => {
    render(<App />);

    expect(
      screen.getByText("Component Library Playground"),
    ).toBeInTheDocument();
  });

  it("renders section titles", () => {
    render(<App />);

    expect(screen.getByText("Alerts")).toBeInTheDocument();
    expect(screen.getByText("Buttons")).toBeInTheDocument();
    expect(screen.getByText("Card")).toBeInTheDocument();
    expect(screen.getByText("Accordion")).toBeInTheDocument();
  });

  it("renders alert messages", () => {
    render(<App />);

    expect(
      screen.getByText(/success alert from the component library/i),
    ).toBeInTheDocument();

    expect(
      screen.getByText(/error alert from the component library/i),
    ).toBeInTheDocument();
  });

  it("renders all buttons", () => {
    render(<App />);

    expect(screen.getByText("Primary")).toBeInTheDocument();
    expect(screen.getByText("Secondary")).toBeInTheDocument();
    expect(screen.getByText("Success")).toBeInTheDocument();
    expect(screen.getByText("Error")).toBeInTheDocument();
    expect(screen.getByText("Outlined")).toBeInTheDocument();
  });

  it("renders card component", () => {
    render(<App />);

    expect(screen.getByText("Card title")).toBeInTheDocument();
  });

  it("renders accordion items", () => {
    render(<App />);

    expect(screen.getByText("Section 1")).toBeInTheDocument();
    expect(screen.getByText("Section 2")).toBeInTheDocument();
  });

  it("shows accordion content when clicked", () => {
    render(<App />);

    const section = screen.getByText("Section 1");

    fireEvent.click(section);

    expect(screen.getByText("Content 1")).toBeInTheDocument();
  });
});
