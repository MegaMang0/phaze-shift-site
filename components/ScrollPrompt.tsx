import { ReactNode } from "react";

type ScrollPromptProps = {
  leftCharacter?: string;
  rightCharacter?: string;
  text?: ReactNode;
  className?: string;
};

export default function ScrollPrompt({
  leftCharacter = "/assets/character-art/redd-chibi.png",
  rightCharacter = "/assets/character-art/aqua-chibi.png",
  text = "> > Scroll down! < <",
  className = "",
}: ScrollPromptProps) {
  return (
    <div className={`scroll-prompt ${className}`}>
      <div className="scroll-prompt-content">
        {/* Left Character */}
        <div className="scroll-prompt-character scroll-prompt-left">
          <img 
            src={leftCharacter} 
            alt="Redd character" 
            className="scroll-prompt-img"
          />
        </div>
        
        {/* Text */}
        <div className="scroll-prompt-text">
          {text}
        </div>
        
        {/* Right Character */}
        <div className="scroll-prompt-character scroll-prompt-right">
          <img 
            src={rightCharacter} 
            alt="Aqua character" 
            className="scroll-prompt-img"
          />
        </div>
      </div>
    </div>
  );
}