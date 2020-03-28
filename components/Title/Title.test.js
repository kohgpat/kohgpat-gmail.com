import React from "react";
import { render } from "@testing-library/react";
import Title from "./index";

describe("Title", () => {
  it("it should render passed title variant", () => {
    const { queryByText } = render(<Title as={"h2"}>title</Title>);
    expect(queryByText("title").tagName).toEqual("H2");
  });

  it("it should render h1 by default", () => {
    const { queryByText } = render(<Title>title</Title>);
    expect(queryByText("title").tagName).toEqual("H1");
  });
});
