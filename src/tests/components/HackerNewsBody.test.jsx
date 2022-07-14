import { render } from "@testing-library/react"
import { HackerNewsBody } from "../../components"
import HackerNewsAppContext from "../../context/HackerNewsAppContext"

describe("Testing on <HackerNewsBody/> component", () => {

  test('should first the component without data', () => { 

    render(
      <HackerNewsAppContext.Provider value={{ techCategory: "Angular", page: 1}}>
        <HackerNewsBody></HackerNewsBody>
      </HackerNewsAppContext.Provider>
    )
   })
});