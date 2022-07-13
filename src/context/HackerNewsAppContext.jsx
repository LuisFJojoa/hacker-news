import { useReducer, createContext } from "react";

const initialState = {
  hackerNews: [],
  totalHackerNews: 0,
  isLoading: true,
  page: 1,
  techCategory: "React"
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
        page: state.page,
        techCategory: state.techCategory,
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
      
      return {
        ...state,
        hackerNews:  action.hackerNews,
        totalHackerNews:  action.totalHackerNews,
        isLoading: action.isLoading,
        page: action.page,
        techCategory: action.techCategory
      }
    
    case "UPDATE_PAGE":
      return{
        ...state,
        page: action.page
      }

      case "UPDATE_CATEGORY":
        return{
          ...state,
          techCategory: action.techCategory
        }

    default:
      return state;
  }
};

export default HackerNewsAppContext
