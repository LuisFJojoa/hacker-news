import { useReducer, createContext } from "react";

const initialState = {
  hackerNews: [
    {
      id: 32043728,
      title: "We Need to Stop Pretending we can Limit Global Warming to 1.5°C",
      author: "kkfx",
      created_at: "2022-07-10T15:40:28.000Z",
      url: "https://bylinetimes.com/2022/07/06/we-need-to-stop-pretending-we-can-limit-global-warming-to-1-5c/",
    },
  ],
  totalHackerNews: 0,

};

export const HackerNewsAppContext = createContext();

export const HackerNewsAppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <HackerNewsAppContext.Provider
      value={{
        hackerNews: state.hackerNews,
        totalHackerNews: state.totalHackerNews,
        dispatch,
      }}
    >
      {props.children}
    </HackerNewsAppContext.Provider>
  );
};

const AppReducer = (state, action) => {
 
  switch (action.type) {
    case "UPDATE_HACKER_NEWS":
      const hackerNews = action.hackerNews
      const totalHackerNews = action.totalHackerNews
      return {
        ...state,
        hackerNews: hackerNews,
        totalHackerNews: totalHackerNews
      }
    //   };
    // case "DELETE_EXPENSE":
    //   return {
    //     ...state,
    //     expenses: state.expenses.filter(
    //       (expense) => expense.id !== action.payload
    //     ),

    default:
      return state;
  }
};

export default HackerNewsAppContext
