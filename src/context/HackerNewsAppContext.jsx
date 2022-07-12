import { useReducer, createContext } from "react";

const initialState = {
  hackerNews: [],
  totalHackerNews: 0,
  isLoading: true
};

export const HackerNewsAppContext = createContext();

export const HackerNewsAppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <HackerNewsAppContext.Provider
      value={{
        hackerNews: state.hackerNews,
        totalHackerNews: state.totalHackerNews,
        isLoading:state.isLoading,
        dispatch
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
      const isLoading = action.isLoading
      return {
        ...state,
        hackerNews: hackerNews,
        totalHackerNews: totalHackerNews,
        isLoading:isLoading
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
