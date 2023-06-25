import { createContext, useContext, useState } from "react";

export const ContextHero = createContext({
  editId: "",
  isEditing: false,
  setEditId: () => {},
  setIsEditing: () => {},
});

export const HeroContextProvider = ({ children }) => {
  const [editId, setEditId] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  return (
    <ContextHero.Provider
      value={{ editId, isEditing, setEditId, setIsEditing }}
    >
      {children}
    </ContextHero.Provider>
  );
};

export const useHeroContext = () => {
  return useContext(ContextHero);
};
