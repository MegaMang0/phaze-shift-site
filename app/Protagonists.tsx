"use client";
import CharacterBadge from "@/components/CharacterBadge";
import GlowSelectButton from "@/components/GlowSelectButton";
import ScrollPrompt from "@/components/ScrollPrompt";
import { useCharacter } from "@/contexts/CharacterContext";
import CharacterCard from "@/components/CharacterCard";
import MenuButton from "@/components/MenuButton";

  function toggleSidebar() {
    document.body.classList.toggle("sidebar-open");
  }

export default function Protagonists() {
  const { currentCharacter } = useCharacter();
  return (
  <div className={`stage-wrap page-about protagonists character-${currentCharacter}`}>
  <div className="stage">
    
    {/* ------------------- Fixed On Screen Elements ------------------- */}

    <MenuButton onClick={toggleSidebar} />    
    <ScrollPrompt/>
    
    <aside className="corner-banner">
      <img src="/assets/website-gfx/dual-line.png" alt="Banner" />
    </aside>
    <aside className="title-banner">
      <img src="/assets/website-gfx/phaze-shift-title.png" alt="Title" />
    </aside>
        
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
              disabled
            />
            <GlowSelectButton
              label="General Info"
              href="/aboutgame"
              isSmall
              useCharacterTheme={true}
            />
            <GlowSelectButton
              label="Protagonists"
              isSmall
              disabled
            />
            <GlowSelectButton
              label="NPCs + World"
              href="/world"
              isSmall
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

        {/*-------------------------- PAGE SPECIFIC CONTENT --------------------------*/}
        <section className="content">
          <div className="character-space"></div> 
            {/* Aqua Section */}
            <div className="content-with-card">
            
              <CharacterCard
                characterName="Aqua"
                characterImage="/assets/character-art/aqua-idle-L.png"
                namePosition={65} 
                idlePosition={{ top: "53%", left: "75%", width: "70%" }}
              />
            
              {/* Text Content */}
              <div className="text-content">
               
                <p className="intro-paragraph">
                  Aqua is one of the two main characters of Phaze Shift.
                </p>
                
                <p className="intro-paragraph">
                  She is a scythe-wielding melee combatant. She is athletic, nimble, 
                  and strong. While she cannot attack from a distance, her large, 
                  wide arching swings from her scythe pack quite a punch!
                </p>
              
                <div className="features-gif">
                  <img src={"assets/gifs/melee-combat.gif"}></img>
                </div>
              
                <p className="intro-paragraph">
                  Try to use her for big damage, or against hordes of enemies. 
                  Her scythe can interact with the environment in a way 
                  blasters cannot. Experiment!
                </p>
                
                <p className="intro-paragraph">
                  Aqua is a warm, positive soul. She can sometimes be stubborn and 
                  a little impulsive, but she does her best to see the good in others. 
                  She is quick to help others, and is fiercely loyal.
                </p>
              </div>
            </div>

            {/* Redd Section*/}
            <div className="content-with-card reverse-layout">
                <div className="text-content">
                
                  <p className="intro-paragraph">
                    Redd is the deuteragonist of Phaze Shift.
                  </p>
                
                  <p className="intro-paragraph">
                    He is a master marksman. He is capable with almost any weapon, 
                    but prefers to fight from afar with his custom blaster. His 
                    attacks are more precise, and require good aim.
                  </p>
                
                  <div className="features-gif">
                    <img src={"assets/gifs/ranged-combat.gif"} alt="Redd ranged combat" />
                  </div>
                
                  <p className="intro-paragraph">
                    Try using Redd when you want to stay out of harm’s way or 
                    analyze enemy attack patterns. He can shoot in 8 directions, 
                    and can damage enemies from quite a distance away!
                  </p>
                
                  <p className="intro-paragraph">
                    Redd is a sarcastic, yet rational person. He will often recommend 
                    the most pragmatic approach, but will still yield to those who 
                    are more altruistic.
                  </p>
                
                </div>
                  <CharacterCard
                    characterName="Redd"
                    characterImage="/assets/character-art/redd-idle-r.png" 
                    namePosition={65} 
                    idlePosition={{ top: "53%", left: "75%", width: "70%" }}
                  />
              </div>

            <div className="character-space" style={{ height: '100px' }}></div>
        
        </section>
      </main>
      </div>
    </div>
  );
}
