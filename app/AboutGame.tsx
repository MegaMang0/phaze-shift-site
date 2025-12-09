"use client";
import CharacterBadge from "@/components/CharacterBadge";
import GlowSelectButton from "@/components/GlowSelectButton";
import MenuButton from "@/components/MenuButton";
import ScrollPrompt from "@/components/ScrollPrompt";
import { useCharacter } from "@/contexts/CharacterContext";
import DebugOverlay from '@/components/DebugOverlay';

  function toggleSidebar() {
    document.body.classList.toggle("sidebar-open");
  }

export default function AboutGamePage() {
  const { currentCharacter } = useCharacter();
  return (
  <div className={`stage-wrap page-about about-game character-${currentCharacter}`}>
  <div className="stage">
    <MenuButton onClick={toggleSidebar} />
    <DebugOverlay />
    <main className="layout">

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
              disabled
            />
            <GlowSelectButton
              label="General Info"
              isSmall
              disabled
            />
            <GlowSelectButton
              label="Protagonists"
              href="/protagonists"
              isSmall
              toggleOnClick
              useCharacterTheme={true}
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
          
        {/*-------------------------- PAGE ACCENTS --------------------------*/}
    
        <div className="character-badge-container">
          <CharacterBadge
          spinSpeed={10}
          />
        </div>
        
        <aside className="corner-banner">
          <img src="/assets/website-gfx/dual-line.png" alt="Banner" />
        </aside>
        
        <aside className="title-banner">
          <img src="/assets/website-gfx/phaze-shift-title.png" alt="Title" />
        </aside>
        
        <aside className="page-fade">
          <img src="/assets/website-gfx/page-fade.png" alt="PageFade" />
        </aside>
        
        <ScrollPrompt/>

        {/*-------------------------- PAGE SPECIFIC CONTENT --------------------------*/}
        <section className="content">      
          <div className="content-container">
            <div className="text-content">
              
              <p className="intro-paragraph">
                Customize your journey in <strong>Phaze Shift!</strong> Switch between 
                two characters with different playstles in this action adventure game 
                where you fight  mechanized bosses, find upgrades that you can combine 
                to make new ones, and befriend members of various factions. Enjoy 
                classic 2D gameplay with hand drawn art!
              </p>
              
              <p className="intro-paragraph">
                Phaze Shift is a “Metroidvania” where you play as two different characters, 
                Aqua and Redd who play very distinctly from one another. Switch between 
                the scythe-wielding, melee combatant, Aqua, or the long range, weapons 
                specialist, Redd!
              </p>
              
              <div className="features-gif">
                <img src={"assets/gifs/gif1-switch-showcase.gif"}></img>
              </div>
              
              <p className="intro-paragraph">
                Find upgrades for your chassis throughout the world so that you can 
                customize your abilities. Pick and choose which ones you want, and fuse 
                similar upgrades together to create new moves or special traits!
              </p>
              
              <div className="features-gif">
                <img src={"assets/gifs/gif2-chassis-showcase.gif"}></img>
              </div>
              
              <p className="intro-paragraph">
                Enjoy classic abilities that are staples in both the platforming genre 
                and Metroidvanias. Abilities like dashing, wall jumping, sliding, 
                charge slashes and more.
              </p>
              
              <div className="features-gif">
                <img src={"assets/gifs/gif3-classic-abilities.gif"}></img>
              </div>
              
              <p className="intro-paragraph">
                Find new, unique abilities typically not found in the genre like 
                omni-directional air dashes, teleportation and more!
              </p>
              
              <div className="features-gif">
                <img src={"assets/gifs/gif3-rare-abilities.gif"}></img>
              </div>
              
              <p className="intro-paragraph">
                Enjoy exploring the Domain of Primora with Aqua and Redd on their 
                journey to reach the Spire. More information soon to come!
              </p>
            </div>  
          </div>
            
            <div className="character-space" style={{ height: '150px' }}></div>
        
        </section>
      </main>
      </div>
    </div>
  );
}
