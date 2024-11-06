import { createContext, useState } from "react";

export const EditorContext = createContext();

export const EditorProvider = ({ children }) => {
  const [isEditing, setIsEditing] = useState(false);
  return (
    <EditorContext.Provider value={{ isEditing, setIsEditing }}>
      {children}
    </EditorContext.Provider>
  );
};
