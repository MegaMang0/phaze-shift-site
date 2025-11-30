"use client";
import { useState } from "react";
import CharacterBadge from "@/components/CharacterBadge";
import GlowSelectButton from "@/components/GlowSelectButton";
import { useCharacter } from "@/contexts/CharacterContext";

export default function HomePage() {
  const { currentCharacter } = useCharacter();
  return (
  <div className={`stage-wrap page-about character-${currentCharacter}`}>
  <div className="stage">
    <main className="layout">
    
      {/* ------------------- SIDEBAR + BUTTONS ------------------- */}
      <aside className="sidebar art">
        <div className="sidebar-bg" aria-hidden />
          <div className="sidebar-content">
            <span className="gbtn-hit" aria-hidden />
              <GlowSelectButton
                label="Home"
                glowSrc="/assets/button-art/button-bg-glow.png"
                fillSrc="/assets/button-art/button-bg-fill.png"
                selectedSrc="/assets/button-art/button-fill-aqua.png"
                outlineSrc="/assets/button-art/button-bg-outline.png"
                disabled
              />
              <GlowSelectButton
                label="About Game"
                glowSrc="/assets/button-art/button-bg-glow.png"
                fillSrc="/assets/button-art/button-bg-fill.png"
                selectedSrc="/assets/button-art/button-fill-aqua.png"
                outlineSrc="/assets/button-art/button-bg-outline.png"
                toggleOnClick
                useCharacterTheme={true}
              />
              <GlowSelectButton
                label="More"
                glowSrc="/assets/button-art/button-bg-glow.png"
                fillSrc="/assets/button-art/button-bg-fill.png"
                selectedSrc="/assets/button-art/button-fill-aqua.png"
                outlineSrc="/assets/button-art/button-bg-outline.png"
                toggleOnClick
                useCharacterTheme={true}
              />
          
              {/*-------------------------- SIDEBAR GRAPHICS --------------------------*/}
    
            <aside className="sidebar-info is-image" role="note" aria-label="Info panel">
              
              <h3 className="sidebar-info__title">Info:</h3>
            
              <div className="sidebar-info__divider" aria-hidden="true">-----------------</div>
                <p className="sidebar-info__body">
                  A new solo-dev project! A customizable action platformer, with two distinct playstyles inspired by Metroidvanias.
                </p>
            </aside>
          </div>
            
            <div className="character-badge-container">
              <CharacterBadge
              spinSpeed={10}
              />
            </div>
        
        </aside>
          
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

            <div className="mainGIF">
              <div className="gif-wrap">
                <img src="/assets/gifs/main-title-gif.gif" alt="MainGIF" />
                <div className="gif-caption"> &gt; &gt; Click For More! &lt; &lt; </div>
              </div>
            </div>  

            <div className="get-demo-notif">
            </div>
            
            <div className="code-input-container">
            </div>

          </section>

          <div className="character-art">
            <div className="aqua-image">
              <img src="/assets/character-art/aqua-full-svg.png" />
            </div>
            <div className="redd-image">
              <img src="/assets/character-art/redd-full-svg.png" />
            </div>
          </div>
          
        </main>
        </div>
    </div>
  );
}