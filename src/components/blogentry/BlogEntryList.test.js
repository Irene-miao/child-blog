import React from "react"
import "@testing-library/jest-dom/extend-expect"
import { render, cleanup,  screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import BlogEntryList from "./BlogEntryList"

const blogentries = [
  {
    id: 1,
    title: "Sky",
    image: "https://www.cadtutor.net/download/raster/sky_04_images/sky-32tn.jpg",
    description: "Blue sky"
  },
  {
    id: 2,
    title: "Sea",
    image: "https://wallpapercave.com/wp/wp3845505.png",
    description: "Dark sea"
  }
]


afterEach(() => {
  cleanup()
})


describe("Blog Component", () => {

  test("should render items", () => {


    render(<BlogEntryList blogentries={blogentries} />)



    screen.debug()


    expect(screen.getByText("Dark sea")).toBeVisible()
    expect(screen.getByAltText("Sea")).toBeVisible()

  })
})