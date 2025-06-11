import { createContext, useContext, useReducer } from "react";

export const DatabaseContext = createContext();

const initialState = {
  isLoading: false,
  error: null,
  projects: [],
  currentProject: null,
};

export const databaseReducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, isLoading: true, error: null };
    case "ERROR":
      return { ...state, isLoading: false, error: action.payload };
    case "PROJECT_CREATED":
      return {
        ...state,
        isLoading: false,
        projects: [...state.projects, action.payload],
        currentProject: action.payload,
      };
    default:
      return state;
  }
};

export const DatabaseProvider = ({ children }) => {
  const [state, dispatch] = useReducer(databaseReducer, initialState);

  return (
    <DatabaseContext.Provider value={{ ...state, dispatch }}>
      {children}
    </DatabaseContext.Provider>
  );
};

export const useDatabase = () => {
  const context = useContext(DatabaseContext);
  if (!context) {
    throw new Error("useDatabase must be used within a DatabaseProvider");
  }
  return context;
};
