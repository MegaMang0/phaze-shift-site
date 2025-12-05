"use client";
import CharacterBadge from "@/components/CharacterBadge";
import GlowSelectButton from "@/components/GlowSelectButton";
import { useCharacter } from "@/contexts/CharacterContext";
import DebugOverlay from '@/components/DebugOverlay';
export default function HomePage() {
  const { currentCharacter } = useCharacter();
  return (
  <div className="homepage-container">
      <DebugOverlay />
    <div className={`stage-wrap homepage character-${currentCharacter}`}>
      <div className="stage">
        <main className="layout">
        
          {/* ------------------- SIDEBAR + BUTTONS ------------------- */}
          <aside className="sidebar art">
            <div className="sidebar-bg" aria-hidden />
              <div className="sidebar-content">
                <span className="gbtn-hit" aria-hidden />
                  <GlowSelectButton
                    label="Home"
                    disabled
                  />
                  <GlowSelectButton
                    label="About Game"
                    href="/aboutgame"
                    toggleOnClick
                    useCharacterTheme={true}
                  />
                  <GlowSelectButton
                    label="More"
                    href="/aboutcreator"
                    toggleOnClick
                    useCharacterTheme={true}
                  />
              </div>
            </aside>
      
              {/*-------------------------- SIDEBAR GRAPHICS --------------------------*/}          
            
              <div className="character-badge-container">
                <CharacterBadge spinSpeed={10}/>
              </div>

              <div className="notification-box">
                <img src= { currentCharacter === 'redd' 
                        ? "/assets/website-gfx/redd-info-box.png"
                        : "/assets/website-gfx/aqua-info-box.png"} 
                    alt="Info Box" 
                    className="info-box-image"
                />
              </div>
              
              
            {/*-------------------------- PAGE ACCENTS --------------------------*/}

              <aside className="page-fade">
                <img src="/assets/website-gfx/page-fade.png" alt="PageFade" />
              </aside>
              
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
            
                <div className="get-demo-notif">
                </div>
                
                  <div className="code-input-container">
                  
                </div>

                <div className="character-art">
                  <div className="aqua-image">
                    <img src="/assets/character-art/aqua-full-svg.png" />
                  </div>

                  <div className="redd-image">
                    <img src="/assets/character-art/redd-full-svg.png" />
                  </div>
                </div>
                
                <div className="mainGIF">
                  <a href="/aboutgame" className="gif-button">
                    <img src="/assets/gifs/main-title-gif.gif" alt="MainGIF" />
                  </a>

                  <div className="gif-caption">
                    &gt; &gt; Click For More! &lt; &lt;
                  </div>
                </div>
              </section>
            </main>
          </div>
      </div>
    </div>
  );
}
