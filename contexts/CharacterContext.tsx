"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type CharacterType = "aqua" | "redd";

interface CharacterContextType {
  currentCharacter: CharacterType;
  setCurrentCharacter: (character: CharacterType) => void;
  toggleCharacter: () => void;
}

const CharacterContext = createContext<CharacterContextType | undefined>(undefined);

export function CharacterProvider({ children }: { children: ReactNode }) {
  // Initialize from localStorage if available, otherwise default to "aqua"
  const [currentCharacter, setCurrentCharacter] = useState<CharacterType>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("selected-character");
      return (saved as CharacterType) || "aqua";
    }
    return "aqua";
  });

  const toggleCharacter = () => {
    const newCharacter = currentCharacter === "aqua" ? "redd" : "aqua";
    setCurrentCharacter(newCharacter);
    
    // Save to localStorage for persistence
    if (typeof window !== "undefined") {
      localStorage.setItem("selected-character", newCharacter);
    }
  };

  const value = {
    currentCharacter,
    setCurrentCharacter,
    toggleCharacter
  };

  return (
    <CharacterContext.Provider value={value}>
      {children}
    </CharacterContext.Provider>
  );
}

export function useCharacter() {
  const context = useContext(CharacterContext);
  if (context === undefined) {
    throw new Error("useCharacter must be used within a CharacterProvider");
  }
  return context;
}