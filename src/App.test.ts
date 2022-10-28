import "@testing-library/jest-dom"

import { render } from "@testing-library/svelte"

import App from "./App.svelte"

it("works", () => {
  const { component } = render(App, {})

  expect(component).toBeDefined()
})
