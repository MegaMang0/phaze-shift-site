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

        {/*-------------------------- PAGE SPECIFIC CONTENT --------------------------*/}

            <section className="content">
              <div className="character-space"></div>
                
                <div className="content-with-card">

                    <CharacterCard
                      characterName="Danny"
                      characterImage="/assets/character-art/danny-edit.png"
                      namePosition={65} // Adjust horizontal position
                      idlePosition={{ top: "54%", left: "67%", width: "76%" }}
                    />                      
                    
                    <div className="text-content">
                      <p className="intro-paragraph">
                       I'm Danny-O! The sole developer of "Phaze Shift", a high-fidelity 2D action platformer. 
                       I am a multi-disciplinary Technical Artist, Gameplay Programmer, and UI Engineer seeking remote
                       opportunities where I can leverage my full-stack development expertise and C# proficiency.
                       I am completely bilingual (English/Spanish) and can enable seamless communication across diverse teams. 
                      </p>
                      
                      <p className="intro-paragraph">
                        A two-hour playable demo is available via private link/download code and has been published to
                        Steam (currently set to private until the marketing campaign begins).
                      </p>
                      
                      <p className="intro-paragraph">
                        Below is my development process, showcasing everything I've taught myself. Though I started as an artist, I've developed strong programming and technical skills to bridge art and engineering.
                        From the beginning, I knew Phaze Shift would feature hand-drawn art with a 2.5D aesthetic. I wanted to 3D model the characters while maintaining a 2D look. Here's how I achieved that:
                      </p>
                    </div>
                  
                </div>
              
              {/* CONTENT WITH GIFS LAYOUT */}
              {/*-------------------------- First Section --------------------------*/}
              <div className="subheading">
                <p>Character Development Pipeline</p>
              </div>

              <div className="content-with-image reverse-layout"> 
                <p>
                  From concept, I bring each character to life with high-quality portrait art, 
                  then move into Blender to sculpt, retopologize, and weight paint, ensuring the 
                  face has clean topology for animation. I use shape keys and inverse kinematics 
                  rigging to animate characters properly. 
                </p>  

                <div className="features-gif">
                  <img src={"assets/gifs/wipgif1.gif"}></img>
                </div>              
              </div>

              <div className="content-with-image">
                
                <div className="features-gif">
                  <img src={"assets/gifs/wipgif2.gif"}></img>
                </div>
                <p>
                  To create the illusion of 2D, I developed a custom shader combined with vertex 
                  painting to give the models a hand-drawn appearance.
                </p>
              
              </div>

              {/*-------------------------- Second Section --------------------------*/}
              <div className="subheading">
                <p>Animation + Technical Art</p>
              </div>

              <div className="content-with-image reverse-layout"> 
                <p>
                  I animated both main characters without their hair and capes, rendering each frame into sprite sheets. 
                  I then drew over these sprite sheets by hand, adding hair, capes, and traditional animation techniques 
                  like speed lines and squash-and-stretch to enhance the hand-drawn aesthetic. 
                </p>  

                <div className="features-gif">
                  <img src={"assets/gifs/wipgif3.gif"}></img>
                </div>              
              </div>

              <div className="content-with-image">
                
                <div className="features-gif">
                  <img src={"assets/gifs/wipgif4.gif"}></img>
                </div>
                <p>
                  After importing into Unity, I animate characters "on twos" for fluid movements like running and walking, 
                  and I use anticipation, smear and impact frames for snappier action animations. There are over 200+ unique animations 
                  per character (400+ total), and at least 1,500+ individual sprites for each.
                </p>
              
              </div>

              {/*-------------------------- Third Section --------------------------*/}
              <div className="subheading">
                <p>Programming + Systems</p>
              </div>

              <div className="content-with-image reverse-layout"> 
                <p>
                  I built a character controller in C# with tunable variables for move speed, dash speed, coyote time, and more, 
                  ensuring controls feel responsive while accounting for player input errors. I invested significant iteration time 
                  on "movement feel" to ensure players enjoy simply moving the character around the world.
                </p>  

                <div className="features-gif">
                  <img src={"assets/gifs/wipgif5.gif"}></img>
                </div>              
              </div>

              <div className="content-with-image">
                
                <div className="features-gif">
                  <img src={"assets/gifs/wipgif6.gif"}></img>
                </div>
                <p>
                  I created a complex, modular state machine architecture to handle character behaviors, with 30+ substates 
                  (falling, jumping, sliding, injured, etc. and more on the way) and clean transition logic. This architecture ensures scalable, 
                  maintainable logic with robust transition handling, and was successfully adapted for smaller-scale state 
                  machines managing unique enemy and boss behaviors.
                </p>
              
              </div>
            
              {/*-------------------------- Fourth Section --------------------------*/}
              <div className="subheading">
                <p>Level Design + Environment</p>
              </div>

              <div className="content-with-image reverse-layout"> 
                <p>
                  Once movement and character-switching mechanics felt right, I designed the game world using a library of 
                  500+ modular environment assets across 4 distinct locales (with more in development). 
                  These pieces work like building blocks, allowing flexible level construction. 
                </p>  

                <div className="features-gif">
                  <img src={"assets/gifs/wipgif7.gif"}></img>
                </div>              
              </div>

              <div className="content-with-image">
                
                <div className="features-gif">
                  <img src={"assets/gifs/wipgif8.gif"}></img>
                </div>
                <p>
                  I developed custom shader graphs for environmental effects like foliage sway and charge blast distortions. 
                  All enemies and environments are hand-drawn. I incorporated light 3D elements alongside 2D sprites with 
                  parallax effects to create a unique 2.5d “diorama” type look for the environment. 
                </p>
              
              </div>

              {/*-------------------------- Fifth Section --------------------------*/}
              <div className="subheading">
                <p>UI/UX Design</p>
              </div>

              <div className="content-with-image reverse-layout"> 
                <p>
                  I designed a clean, readable UI that draws immediate attention to the map and active character. 
                  The pause menu features distinct color themes for each character, with frame-by-frame animated 
                  character reactions that respond to the player's menu selections, adding personality and polish to the interface.
                </p>  

                <div className="features-gif">
                  <img src={"assets/gifs/wipgif10.gif"}></img>
                </div>              
              </div>

              <div className="content-with-image">
                
                <div className="features-gif">
                  <img src={"assets/gifs/wipgif9.gif"}></img>
                </div>
                <p>
                  The UI is consistent across shops and NPCs, but I made sure to give the NPCs their own color schemes and flair.
                  I took care to make the main menu of the game unique, yet still carry the same overall theme. The save slots 
                  display relevant data and have unique images that showcase a preview of the last area the player saved in.
                </p>
              
              </div>

              {/*-------------------------- Sixth Section --------------------------*/}
              <div className="subheading">
                <p>Game Systems</p>
              </div>

              <div className="content-with-image reverse-layout"> 
                <p>
                  The game features a customizable upgrade system where players install modifications into their "chassis." 
                  From stat boosts to new abilities, upgrades can be equipped and fused together to create unique power
                  combinations. The demo includes 12 optional upgrades to discover.
                </p>  

                <div className="features-gif">
                  <img src={"assets/gifs/wipgif11.gif"}></img>
                </div>              
              </div>

              <div className="content-with-image">
                
                <div className="features-gif">
                  <img src={"assets/gifs/wipgif12.gif"}></img>
                </div>
                <p>
                  I implemented a dynamic, context-aware dialogue system with 80+ branching nodes that track player progression, 
                  sequence breaks, equipped upgrades, and the order in which characters are encountered. 
                  Dialogue adapts intelligently to how each player experiences the game.
                </p>
              
              </div>

              <div className="character-space" style={{ height: '50px' }}></div>

              <div className="content-with-image">               
                <p>
                  Additional systems featured in the demo include: a complete save file manager (create/copy/delete functionality), 
                  a dynamic map that fills as players explore, sequence break paths allowing players to skip bosses or 
                  entire areas, 3 unique boss encounters, 2 challenge rooms and a weapon-switching mechanic.
                </p>
              </div>

              {/*-------------------------- Seventh Section --------------------------*/}
              <div className="content-container">
                <div className="subheading">
                  <p>Tools & Technologies</p>
                </div>

                <div className="text-content">
                    <p>Game Engine: Unity (C#) </p>
                    <p>2D Art: Photoshop, Krita, Procreate, GIMP (portrait art, concept art, sprite work)</p>
                    <p>3D Art: Blender (sculpting, rendering, sprite work)</p>
                    <p>Design: Figma (web/UI design)</p>
                    <p>This project taught me that great games emerge from a deep passion for the craft, a strong drive 
                      to push quality content, continuously iterating on game feel, and responding to player feedback. 
                      These are the skills I'm excited to bring to a collaborative team environment where I can 
                      contribute across art, engineering, and design.</p>          
                  </div>
              </div>
            <div className="character-space" style={{ height: '125px' }}></div>
        </section>
      </main>
      </div>
    </div>
  );
}
