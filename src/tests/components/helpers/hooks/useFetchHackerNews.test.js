// import { renderHook, waitFor } from "@testing-library/react"
// import { useFetchHackerNews } from "../../hooks/useFetchHackerNews"
// import HackerNewsAppContext from '../../context/HackerNewsAppContext';

// describe('Test useFetchHackerNews', () => { 
  
//   test('Should be return the initial state', () => { 
    
//     const { result } = renderHook(() => useFetchHackerNews("Angular", 1))
//     const { hackerNews, isLoading } = result.current

//     expect( hackerNews.length ).toBe(0)
//     expect( isLoading ).toBeTruthy()
//   })

//   test('Should be return an hackerNews array and isLoading should be false', async() => { 
    
//     const { result } = renderHook(() => useFetchHackerNews("Angular", 1))
//     const { hackerNews, isLoading } = result.current
    
//     await waitFor(
//       () => expect(hackerNews.length).toBeGreaterThan(0),
//       {
//         timeout:1000
//       }
//     )
    
//     expect( hackerNews.length ).toBeGreaterThan(0)
//     expect( isLoading ).toBeFalsy()
//   })
//  })