import { createContext, useContext, useReducer } from "react";

const DatabaseContext = createContext();

const initialState = {
  isLoading: false,
  error: null,
  projects: [],
  currentProject: null,
};

const databaseReducer = (state, action) => {
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
    case "PROJECTS_LOADED":
      return {
        ...state,
        isLoading: false,
        projects: action.payload,
      };
    case "PROJECT_UPDATED":
      return {
        ...state,
        isLoading: false,
        projects: state.projects.map((project) =>
          project.id === action.payload.id ? action.payload : project
        ),
        currentProject: action.payload,
      };
    case "PROJECT_DELETED":
      return {
        ...state,
        isLoading: false,
        projects: state.projects.filter(
          (project) => project.id !== action.payload
        ),
        currentProject: null,
      };
    default:
      return state;
  }
};

const DatabaseProvider = ({ children }) => {
  const [state, dispatch] = useReducer(databaseReducer, initialState);

  return (
    <DatabaseContext.Provider value={{ ...state, dispatch }}>
      {children}
    </DatabaseContext.Provider>
  );
};

const useDatabase = () => {
  const context = useContext(DatabaseContext);
  if (!context) {
    throw new Error("useDatabase must be used within a DatabaseProvider");
  }
  return context;
};

export { DatabaseProvider, useDatabase };
