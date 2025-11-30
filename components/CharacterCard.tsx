"use client";
import React from 'react';

interface CharacterCardProps {
  characterName: string;
  characterImage: string;
  namePosition?: number; // Percentage from left (0-100)
  fillImage?: string;
  honeycombImage?: string;
  borderImage?: string;
  idlePosition?: {
    top?: string;
    left?: string;
    width?: string;
  };
}

export default function CharacterCard({
  characterName,
  characterImage,
  namePosition = 65, // Default position
  fillImage = "/assets/character-panel/card-fill.png",
  honeycombImage = "/assets/character-panel/honeycomb-pattern.png",
  borderImage = "/assets/character-panel/border-panel.png",
  idlePosition = {
    top: "53%",
    left: "75%", 
    width: "70%"
  }
}: CharacterCardProps) {
  return (
    <div className="character-card-container">
      <div className="card-fill">
        <img src={fillImage} alt={`${characterName} card fill`} />
      </div>
      <div 
        className="character-idle"
        style={{
          top: idlePosition.top,
          left: idlePosition.left,
        }}
      >
        <img 
          src={characterImage} 
          alt={`${characterName} character`}
          style={{ width: idlePosition.width }}
        />
      </div>
      <div className="honeycomb-pattern">
        <img src={honeycombImage} alt="Honeycomb pattern" />
      </div>
      <div className="character-card">
        <img src={borderImage} alt={`${characterName} card border`} />
      </div>
      <div 
        className="character-name"
        style={{ left: `${namePosition}%` }}
      >
        <p className="name-of-character">
          // {characterName}
        </p>
      </div>
    </div>
  );
}