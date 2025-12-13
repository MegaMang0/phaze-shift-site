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

export default function AboutGamePage() {
  const { currentCharacter } = useCharacter();
  return (
  <div className={`stage-wrap page-about world character-${currentCharacter}`}>
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
                disabled
              />
              <GlowSelectButton
                label="General Info"
                href="/aboutgame"
                isSmall
                useCharacterTheme={true}
                toggleOnClick
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
                isSmall
                disabled
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
            <CharacterBadge spinSpeed={10}/>
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
            {/* Pepper Section*/}
              <div className="content-with-card reverse-layout">

                <div className="text-content">

                  <p className="intro-paragraph">
                    Pepper is one of the 5 elite members of The Guardian Corps. 
                    You will meet her and other members, including their 
                    commander, Ivy, on your travels.
                  </p>
                  
                  <div className="visuals">
                    <img src={"assets/static-imgs/talk-ivy.png"}/>
                  </div>
                  
                  <p className="intro-paragraph">
                    A studious and powerful bunch, The Guardian Corps defend the 
                    citizens of Primora from would-be thieves, monsters, and 
                    any other harm.
                  </p>
                  
                  <p className="intro-paragraph">
                    Talk to them, and they may provide you with quests, rewards, 
                    or information about the world!
                  </p>  
                </div>
                
                <div className="side-stack">
                  <CharacterCard
                    characterName="Pepper"
                    characterImage="/assets/character-art/pepper-idle-2.png"
                    namePosition={65}
                    idlePosition={{ top: "55%", left: "70%", width: "75%" }}
                    />
                
                  <div className="side-stack-extras">
                    <img src={ currentCharacter === "aqua"
                      ? "/assets/character-art/pepper-complain-aqua.png"
                      : "/assets/character-art/pepper-complain-redd.png"}
                      alt="Pepper (themed art)"
                    />
                  </div>
                </div>
              </div>
                 
              {/* Vincent Section */}
              <div className="content-with-card">

                <CharacterCard
                  characterName="Vincent"
                  characterImage="/assets/character-art/vincent-idle-2.png"
                  namePosition={65}
                  idlePosition={{ top: "54%", left: "67%", width: "76%"}}
                />
                
              <div className="text-content">
                <p className="intro-paragraph">
                  Vincent is a man of... interesting tastes. He is one of 
                  several shop keeps you will find on your journey.
                </p>
                
                <div className="visuals">
                  <img src={"assets/static-imgs/chloe-shop.png"}/>
                </div>
                
                <p className="intro-paragraph">
                  Different shop owners are scattered throughout the world 
                  of Primora. You will have to find them to see what they 
                  have to offer!
                </p>
                
                <p className="intro-paragraph">
                  Check back with them throughout your adventure. They 
                  will sometimes have different stock, and even some 
                  odd jobs for you.
                </p>
              </div>
            </div>
              
            {/* CONTENT WITH GIFS LAYOUT */}

            <div className="content-with-image">  
              <p>
                The world of Primora is filled with several different 
                biomes and more are currently in development.
              </p>
            </div>

            <div className="content-with-image">
              <div className="features-gif">
                <img src={"assets/gifs/shadow-wood.gif"}></img>
              </div>
              
              <p>
                Explore the winding forest called "Shadow-Wood" with it’s 
                strange, alien-like creatures and deadly, spikey vines.
              </p>
            </div>
              
            <div className="content-with-image reverse-layout">  
              <p>
                Get lost in the many vertical shafts of "Metro Bypass", the 
                subway system that provides transit to almost all places in Primora.
              </p>
                
              <div className="features-gif">
                <img src={"assets/gifs/metro-bypass.gif"}></img>
              </div>
            </div>
              
            <div className="content-with-image">
              <div className="features-gif">
                <img src={"assets/gifs/shadow-wood.gif"}></img>
              </div>
              
              <p>
                Gain access to Praxus Grid, a beautiful town whose inhabitants 
                have all disappeared. It is also home to The Guardian Corps HQ!
              </p>              
            </div>
              
            <div className="content-with-image reverse-layout">
              <p>
                Find creepy, crawling things in the "Cleansing Conduit", an area 
                filled with tunnels that house many glass tubes which filter 
                water for the citizens of Praxus Grid.
              </p>
              <div className="features-gif">
                <img src={"assets/gifs/waterways.gif"}></img>
              </div>
            </div>
              
            <div className="content-with-image">
              <div className="features-gif">
                <img src={"assets/gifs/upcoming.gif"}></img>
              </div>
              
              <p>
                More areas are to come! Snowy mountain tops, scorching deserts, 
                underwater areas, ancient caverns and more!
              </p>
            </div>

            <div className="character-space" style={{ height: '100px' }}></div>
        </section>
      </main>
      </div>
    </div>
  );
}
