'use client';

import { useEffect, useState } from 'react';

export default function DebugOverlay() {
  const [debugInfo, setDebugInfo] = useState({
    innerWidth: 0,
    innerHeight: 0,
    devicePixelRatio: 0,
    clientWidth: 0,
    scale: ''
  });

  useEffect(() => {
    function updateDebug() {
      const scale = getComputedStyle(document.documentElement).getPropertyValue('--scale');
      
      setDebugInfo({
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight,
        devicePixelRatio: window.devicePixelRatio,
        clientWidth: document.documentElement.clientWidth,
        scale: scale.trim()
      });
    }

    updateDebug();
    window.addEventListener('resize', updateDebug);
    
    return () => window.removeEventListener('resize', updateDebug);
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: '10px',
      right: '10px',
      background: 'rgba(0,0,0,0.9)',
      color: 'lime',
      padding: '15px',
      fontFamily: 'monospace',
      fontSize: '14px',
      zIndex: 9999,
      pointerEvents: 'none',
      borderRadius: '8px',
      border: '2px solid lime'
    }}>
      <div><strong>DEBUG INFO:</strong></div>
      <div>window.innerWidth: {debugInfo.innerWidth}px</div>
      <div>window.innerHeight: {debugInfo.innerHeight}px</div>
      <div>devicePixelRatio: {debugInfo.devicePixelRatio}</div>
      <div>clientWidth: {debugInfo.clientWidth}px</div>
      <div>--scale value: {debugInfo.scale}</div>
    </div>
  );
}