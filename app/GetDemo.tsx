"use client";
import { useState } from "react";
import CharacterBadge from "@/components/CharacterBadge";
import GlowSelectButton from "@/components/GlowSelectButton";
import { useCharacter } from "@/contexts/CharacterContext";
import DebugOverlay from '@/components/DebugOverlay';
import MenuButton from "@/components/MenuButton";

  function toggleSidebar() {
    document.body.classList.toggle("sidebar-open");
  }

// List of valid codes (unlimited use)
const VALID_CODES = ["recruiter", "resume", "beta tester", "alex"];

const DROPBOX_URLS: Record<string, string> = {
  "recruiter": "https://www.dropbox.com/your-recruiter-link",
  "resume": "https://www.dropbox.com/your-resume-link", 
  "beta tester": "https://www.dropbox.com/your-beta-tester-link",
  "alex": "https://www.dropbox.com/your-alex-link"
};

export default function GetDemo() {
  const { currentCharacter } = useCharacter();
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);

  {/* ------------------- DOWNLOAD CODE INPUT LOGIC ------------------- */}

  const handleSubmit = () => {
    const normalizedCode = code.trim().toLowerCase();
    
    if (VALID_CODES.includes(normalizedCode)) {
      const dropboxUrl = DROPBOX_URLS[normalizedCode] || DROPBOX_URLS["recruiter"];
      window.location.href = dropboxUrl;
    } else {
      // Invalid code - show error and change character images
      setError("Invalid Code!");
      setIsInvalid(true);
      
      // Reset error after 3 seconds (optional)
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCode(e.target.value);
    // Reset invalid state when user starts typing again
    if (isInvalid) {
      setIsInvalid(false);
      setError("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
  <div className={`stage-wrap page-about get-demo character-${currentCharacter}`}>
    <div className="stage">
        <MenuButton onClick={toggleSidebar} />
      <main className="layout">
            <DebugOverlay />

        {/* ------------------- SIDEBAR + BUTTONS ------------------- */}
        <aside className="sidebar art">
          <div className="sidebar-bg" aria-hidden />
            <div className="sidebar-content">
              <span className="gbtn-hit" aria-hidden />
              <GlowSelectButton
                label="Home"
                href="/homepage"
                useCharacterTheme={true}
                toggleOnClick
              />
              <GlowSelectButton
                label="About Game"
                href="/aboutgame"
                toggleOnClick
                useCharacterTheme={true}
              />
              <GlowSelectButton
                label="More"
                disabled
              />
              <GlowSelectButton
                label="About Creator"
                href="/aboutcreator"
                isSmall
                toggleOnClick
                useCharacterTheme={true}
              />
              <GlowSelectButton
                label="Get Demo"
                isSmall
                disabled
              />
              <GlowSelectButton
                label="Contact"
                href="/contact"
                isSmall
                toggleOnClick
                useCharacterTheme={true}
              />
            </div>
      </aside>
          
          <div className="character-badge-container">
            <CharacterBadge spinSpeed={10}/>
          </div>
          
        {/*-------------------------- PAGE ACCENTS --------------------------*/}

          <aside className="page-fade">
            <img src="/assets/website-gfx/page-fade.png" alt="PageFade" />
          </aside>
          
          <section className="content content-get-demo">

            <div className="banner-wrap-demo">
              <div className="banner-graphic-demo">
                <img src="/assets/website-gfx/dual-line.png"/>
              </div>
              <div className="banner-title-demo">
                <img src="/assets/website-gfx/phaze-shift-title.png"/>
              </div>
            </div>

        {/*-------------------------- PAGE SPECIFIC CONTENT --------------------------*/}
        
            <div className="get-demo-notif">
              <div className={`redd-chibi ${isInvalid ? "shake" : ""}`}>
                <img src="/assets/character-art/redd-chibi.png"/>
              </div>
              
              <p>{"> >"} Type in your download code! {"< <"}</p>
              
              <div className={`aqua-chibi ${isInvalid ? "shake" : ""}`}>
                <img src="/assets/character-art/aqua-chibi.png"/>
              </div>
            </div>
            
            <div className="code-input-container">
              <input 
                type="text"
                placeholder="Enter your code here..."
                className={`code-input ${isInvalid ? "shake" : ""}`}
                maxLength={20}
                value={code}
                onChange={handleInputChange}
                onKeyDown={handleKeyPress}
              />

              <button className="submit-button" onClick={handleSubmit}>
                Submit Code
              </button>
              
              {error && (
                <div className={`error-message ${isInvalid ? "shake" : ""}`}>
                  {error}
                </div>
              )}
              
            </div>

            <div className="character-art">
              <div className="redd-image">
                <img src={ isInvalid 
                    ? "/assets/character-art/redd-think-l.png"
                    : "/assets/character-art/redd-idle-l.png"}/>
              </div>
              <div className="aqua-image">
                <img src={ isInvalid 
                    ? "/assets/character-art/aqua-think-r.png"
                    : "/assets/character-art/aqua-idle-r.png"}/>
              </div>
            </div>

          </section>
        </main>
        </div>
    </div>
  );
}
