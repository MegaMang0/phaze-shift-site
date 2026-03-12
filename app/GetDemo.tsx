"use client";
import { useState } from "react";
import CharacterBadge from "@/components/CharacterBadge";
import GlowSelectButton from "@/components/GlowSelectButton";
import { useCharacter } from "@/contexts/CharacterContext";
import MenuButton from "@/components/MenuButton";

  function toggleSidebar() {
    document.body.classList.toggle("sidebar-open");
  }

export default function GetDemo() {
  const { currentCharacter } = useCharacter();
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);

  {/* ------------------- DOWNLOAD CODE INPUT LOGIC ------------------- */}

  const handleSubmit = async () => {
    const res = await fetch("/api/validate-code", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code }),
    });

    const data = await res.json();

    if (data.success) {
      window.location.href = data.url;
    } else {
      setError("Invalid Code!");
      setIsInvalid(true);
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
  <div className="homepage-container">
  <div className={`stage-wrap page-about get-demo character-${currentCharacter}`}>
    <div className="stage">
          
          {/* ------------------- Fixed On Screen Elements ------------------- */}
      
          <MenuButton onClick={toggleSidebar} />    
          <div className="character-badge-container">
            <CharacterBadge spinSpeed={10}/>
          </div>
        
          <aside className="page-fade">
            <img src="/assets/website-gfx/page-fade.png" alt="PageFade" />
          </aside>
    
        {/* ------------------- SIDEBAR + BUTTONS ------------------- */}
    
        <main className="layout">
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
          
        <section className="content content-demo">

          <div className="banner-wrap">
            <div className="banner-graphic">
              <img src="/assets/website-gfx/dual-line.png"/>
            </div>
            
            <div className="banner-title">
              <img src="/assets/website-gfx/phaze-shift-title.png"/>
            </div>
          </div>

        {/*-------------------------- PAGE SPECIFIC CONTENT --------------------------*/}
        
          <div className="demo-code-wrap">
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
    </div>
  );
}
