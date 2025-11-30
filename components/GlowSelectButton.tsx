import { useState } from "react";
import { useRouter } from "next/navigation"; 
import { useCharacter } from "@/contexts/CharacterContext";

type Props = {
  label: string;
  onClick?: () => void;
  href?: string;
  glowSrc?: string;
  fillSrc?: string;
  selectedSrc?: string;
  outlineSrc?: string;
  initialSelected?: boolean;
  toggleOnClick?: boolean;
  disabled?: boolean;
  isSmall?: boolean;
  className?: string;
  useCharacterTheme?: boolean;
};

export default function GlowSelectButton({
  label,
  onClick,
  href,
  glowSrc = "/assets/button-art/button-bg-glow.png",
  fillSrc = "/assets/button-art/button-bg-fill.png",
  selectedSrc = "/assets/button-art/button-fill-aqua.png",
  outlineSrc = "/assets/button-art/button-bg-outline.png",
  initialSelected = false,
  toggleOnClick = false,
  disabled = false,
  isSmall = false,
  className = "",
  useCharacterTheme = false,
}: Props) {

  const router = useRouter();
  const [selected, setSelected] = useState(initialSelected);
  const { currentCharacter } = useCharacter();

  function handleClick() {
    if (disabled) return;

    if (href) {
      router.push(href); 
      return; 
    }

    if (toggleOnClick) setSelected(v => !v);
    onClick?.();
  }

  const cls = [
    "gbtn",
    isSmall ? "is-small" : "",
    disabled ? "is-disabled" : "",
    useCharacterTheme ? `character-theme-${currentCharacter}` : "",
    className
  ].filter(Boolean).join(" ");

  // Simple character-based image switching
  const getCharacterImage = (basePath: string) => {
    if (!useCharacterTheme) return basePath;
    
    if (currentCharacter === "aqua") {
      return basePath.replace('.png', '-aqua.png');
    } else {
      return basePath.replace('.png', '-redd.png');
    }
  };

  return (
    <button
      className={cls}
      onClick={handleClick}
      data-selected={selected ? "true" : "false"}
      data-character={useCharacterTheme ? currentCharacter : undefined}
      aria-pressed={selected}
      disabled={disabled}
      aria-disabled={disabled || undefined}
      tabIndex={disabled ? -1 : 0}
    >
      <img className="gbtn-glow"     src={getCharacterImage(glowSrc)}     alt="" aria-hidden />
      <img className="gbtn-fill"     src={getCharacterImage(fillSrc)}     alt="" aria-hidden />
      <img className="gbtn-selected" src={getCharacterImage(selectedSrc)} alt="" aria-hidden />
      <img className="gbtn-outline"  src={outlineSrc}                     alt="" aria-hidden />
      <span className="gbtn-label">{label}</span>
    </button>
  );
}
