"use client";

import { useCharacter } from "@/contexts/CharacterContext";

type MenuButtonProps = {
  onClick?: () => void;
  size?: number;
  hoverEffect?: boolean;
  className?: string;
};

export default function MenuButton({
  onClick,
  size = 56,
  hoverEffect = true,
  className = ""
}: MenuButtonProps) {
  
  const { currentCharacter } = useCharacter();

  const menuImages = {
    aqua: "/assets/button-art/mini-menu-button-aqua.png",
    redd: "/assets/button-art/mini-menu-button-redd.png"
  };

  const altText = {
    aqua: "Open menu (Aqua style)",
    redd: "Open menu (Redd style)"
  };

  const cls = [
    "menu-button",
    hoverEffect ? "menu-hover" : "",
    className
  ].filter(Boolean).join(" ");

  return (
    <button
      className={cls}
      onClick={onClick}
      aria-label="Toggle navigation menu"
      data-character={currentCharacter}
      style={{ width: size, height: size }}
    >
      <img 
        src={menuImages[currentCharacter]}
        alt={altText[currentCharacter]}
        className="menu-button-img"
      />
    </button>
  );
}
