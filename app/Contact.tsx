"use client";
import CharacterBadge from "@/components/CharacterBadge";
import GlowSelectButton from "@/components/GlowSelectButton";
import { useCharacter } from "@/contexts/CharacterContext";
import MenuButton from "@/components/MenuButton";

  function toggleSidebar() {
    document.body.classList.toggle("sidebar-open");
  }

export default function Contact() {
  const { currentCharacter } = useCharacter();
  return (
  <div className={`stage-wrap page-about contact character-${currentCharacter}`}>
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
                  href="/aboutcreator"
                  isSmall
                  toggleOnClick
                  useCharacterTheme={true}
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
                  isSmall
                  disabled
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

        {/*-------------------------- PAGE SPECIFIC CONTENT --------------------------*/}
          <section className="content">
            <div className="character-space"></div>

            <div className="info-box">
              <img
                src={ currentCharacter === 'redd'
                  ? "/assets/website-gfx/info-box-redd.png"
                  : "/assets/website-gfx/info-box-aqua.png" }
                alt="Info Box"
                className="info-box-image"
              />

              <div className="text-inside">
                <h1>Contact Info</h1>

                <div className="dash-line">-----------------------</div>

                <div className="email">
                  <p>E-mail: lord_mango@outlook.com</p>
                </div>

                <div className="socials">
                  <p>Socials:</p>
                  <p>X - Twitter: TBA</p>
                  <p>Instagram: TBA</p>
                  <p>Youtube: TBA</p>
                </div>

                <div className="disclaimer">
                  <p>Socials will go live when the game is further in development!</p>
                </div>
              </div>
            </div>

            <div className="enemy-artwork">
              <div className="sentry">
                <img src="/assets/character-art/sentry.png" />
              </div>

              <div className="owl">
                <img src="/assets/character-art/snowy-owl.png" />
              </div>

              <div className="snake">
                <img src="/assets/character-art/snake-boss.png" />
              </div>

              <div className="ivy">
                <img src="/assets/character-art/ivy-attack.png" />
              </div>

              <div className="hornet">
                <img src="/assets/character-art/hornet.png" />
              </div>
              
              <div className="blyro">
                <img src="/assets/character-art/blyro.png" />
              </div>
              
              <div className="acid-bug">
                <img src="/assets/character-art/acid-bug.png" />
              </div>
              
              <div className="heat-weaver">
                <img src="/assets/character-art/heat-weaver.png" />
              </div>

            </div>

            <div className="character-space" style={{ height: '100px' }} />
          </section>

      </main>
      </div>
    </div>
  );
}
