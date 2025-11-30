import { ReactNode } from "react";
import { useCharacter } from "@/contexts/CharacterContext";

type CharacterBadgeProps = {
  size?: number;
  spinSpeed?: number;
  shadowBlur?: number;
  shadowColor?: string;
  hoverEffect?: boolean;
  spinOnHover?: boolean;
  className?: string;
  children?: ReactNode;
  disabled?: boolean;
  initialSpinning?: boolean;
};

export default function CharacterBadge({
  size = 80,
  spinSpeed = 8,
  shadowBlur = 16,
  shadowColor = "rgba(0, 0, 0, 0.4)",
  hoverEffect = true,
  spinOnHover = false,
  className = "",
  children,
  disabled = false,
  initialSpinning = true
}: CharacterBadgeProps) {
  const { currentCharacter, toggleCharacter } = useCharacter();

  function handleClick() {
    if (disabled) return;
    toggleCharacter();
  }

  const characterImages = {
    aqua: "/assets/website-gfx/aqua-badge.png",
    redd: "/assets/website-gfx/redd-badge.png"
  };

  const characterAltText = {
    aqua: "Aqua character badge",
    redd: "Redd character badge"
  };

  const cls = [
    "character-badge",
    disabled ? "is-disabled" : "",
    spinOnHover ? "spin-on-hover" : "",
    className
  ].filter(Boolean).join(" ");

  const shadowStyle = {
    filter: `drop-shadow(0 4px ${shadowBlur}px ${shadowColor})`
  };

  return (
    <button 
      className={cls}
      onClick={handleClick}
      aria-label={`Switch to ${currentCharacter === "aqua" ? "Redd" : "Aqua"}`}
      disabled={disabled}
      aria-disabled={disabled || undefined}
      tabIndex={disabled ? -1 : 0}
      data-hover-effect={hoverEffect}
      data-character={currentCharacter}
    >
      <div 
        className="character-badge-shadow"
        style={{
          ...shadowStyle,
          animationDuration: `${spinSpeed}s`,
          animationPlayState: initialSpinning ? 'running' : 'paused'
        }}
      >
        <img 
          src={characterImages[currentCharacter]} 
          alt={characterAltText[currentCharacter]}
          className="character-badge-image"
        />
      </div>
      {children}
    </button>
  );
}