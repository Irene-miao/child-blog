import React from "react"
import "@testing-library/jest-dom/extend-expect"
import { render,  screen, fireEvent, cleanup } from "@testing-library/react"
import "@testing-library/jest-dom"
import BlogEntryItem from "./BlogEntryItem"
import userEvent from "@testing-library/user-event"


afterEach(() => {
  cleanup()
})



describe("Button Component", () => {
  const blog =
    {
      id: 1,
      title: "Sky",
      image: "https://www.cadtutor.net/download/raster/sky_04_images/sky-32tn.jpg",
      description: "Blue sky"
    }


  test("button renders", () => {
    render(<BlogEntryItem blog={blog} />)

    const button = screen.getByTestId("button")


    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent("Favorite")

  })


})