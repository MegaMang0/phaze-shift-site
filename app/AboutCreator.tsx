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

export default function AboutCreator() {
  const { currentCharacter } = useCharacter();
  return (
  <div className={`stage-wrap page-about about-creator character-${currentCharacter}`}>
  <div className="stage">
      <MenuButton onClick={toggleSidebar} />
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
              isSmall
              disabled
            />
            <GlowSelectButton
              label="Get Demo"
              href="/getdemo"
              isSmall
              toggleOnClick
              useCharacterTheme={true}
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
              <div className="character-space"></div>
                
                <div className="content-with-card reverse-layout">
                    
                    <div className="text-content">
                      <p className="intro-paragraph">
                        It is I, Daniel Obregon... The sole creator of Phaze Shift! Welcome! All of the 
                        art in the game, code, level design, are done by me alone. Including this custom 
                        website!
                      </p>
                      
                  <div className="side-stack-extras creator-extras">
                    <img src={"assets/character-art/danny-small.png"}></img>
                  </div>
                      
                      <p className="intro-paragraph">
                        I taught myself how to code in C#, how to 3D model and how to animate in both 3D 
                        and 2D--all to be able to make this dream of mine a reality. This is my first 
                        project ever, and I do it all during my free time.
                      </p>
                      
                      <p className="intro-paragraph">
                        It's a slow grind, but after two and a half years of learning how to do everything 
                        by myself and actually implementing it (just one day a week mostly),  I have a full, 
                        playable demo with about two hours of solid gameplay.
                      </p>
                    </div>

                    <div className="side-stack">
                     <CharacterCard
                      characterName="Danny"
                      characterImage="/assets/character-art/danny-edit.png"
                      namePosition={65} // Adjust horizontal position
                      idlePosition={{ top: "54%", left: "67%", width: "76%" }}
                      />                      
                    </div>
                  
                </div>
              
              {/* CONTENT WITH GIFS LAYOUT */}
              <div className="subheading">
                <p>What can I do?</p>
              </div>

              <div className="content-with-image reverse-layout"> 
                
                <p>
                  Well, I’m not a character in the game, that’s for sure. But while making this game, 
                  I have become proficient in C# and familiar with CSS and TSX. There’s a lot of code
                  that goes into making a game... like, a LOT. 
                </p>
                
                <div className="features-gif">
                  <img src={"assets/gifs/coding-flow.gif"}></img>
                </div>
              
              </div>

              <div className="content-with-image">
                <p>We are talking thousands upon thousands of lines, hundreds of files and they got to
                  be neat, organized and easy to read. I’ve learned how to make complex enemy and UI
                  “state-machines”, read/write systems for saving player progress and more. You can
                  actually see a sample of my code, by clicking here.
              </p>
              </div>
              
              <div className="content-with-image">
                
                <div className="features-gif">
                  <img src={"assets/gifs/art-atlas.gif"}></img>
                </div>
                
                <p>
                  I’ve always enjoyed art, but I have learned to leverage my art skills into making
                  clean, consistent UI, that's easy to read and navigate,  art assets for enemies,
                  for the world, and overall level design.
                </p>
              
              </div>
              
              <div className="content-with-image">
                <p>
                  Writing convincing dialogue is something that is difficult for many, but my game
                  has a script that blends natural humor, believable language, personalities and a
                  sincere taste for adventure. So far, there are hundreds of lines of dialogue,
                  (most of which is actually optional), with branching dialogue options and specific
                  requirements for alternate or secret dialogue.
                </p>
              </div>
              
              <div className="content-with-image reverse-layout">
              
                <p>
                  I also learned how to 3D model using Blender! Certain assets in my game are 3D 
                  modeled first then animated. Their animations are then turned to sprites, and 
                  then given some polish and style to make them fit within the rest of the game 
                  world’s aesthetic.
                </p>
                
                <div className="features-gif">
                  <img src={"assets/gifs/blender-modeling.gif"}></img>
                </div>
              
              </div>
              
              <div className="content-with-image">
                
                <div className="features-gif">
                  <img src={"assets/gifs/level-design.gif"}></img>
                </div>
                
                <p>
                  But all of this is still not enough! I had to learn “game-feel” what makes things 
                  satisfying to use, satisfying to click, satisfying to explore. What can keep people 
                  playing! If you have a code for the demo, feel free to try it for yourself!
                </p>
              
              </div>

            <div className="character-space" style={{ height: '100px' }}></div>
        </section>
      </main>
      </div>
    </div>
  );
}
