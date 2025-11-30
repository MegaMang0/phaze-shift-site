"use client";
import { CharacterProvider } from "@/contexts/CharacterContext";

export default function CharacterProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <CharacterProvider>{children}</CharacterProvider>;
}