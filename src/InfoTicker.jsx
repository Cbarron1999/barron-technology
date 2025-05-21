import React from 'react';
import './ticker.css';

function InfoTicker() {
  const facts = [
    "🔐 46% of all cyber breaches impact businesses with fewer than 1,000 employees. (strongdm.com)",
    "⚠️ 60% of small businesses are concerned about cybersecurity threats, yet only 23% feel very prepared. (mastercard.com)",
    "🚨 94% of SMBs experienced cyberattacks in 2024. (genatec.com)",
    "☁️ 63% of SMB workloads are hosted in the cloud. (spacelift.io)",
    "📊 44% of traditional SMBs use cloud hosting. (cloudzero.com)"
  ];

  const loopedFacts = [...facts, ...facts]; // double it for seamless looping

  return (
    <div className="ticker-container">
      <div className="ticker-content">
        {loopedFacts.map((fact, index) => (
          <span key={index} className="ticker-inner mx-6">{fact}</span>
        ))}
      </div>
    </div>
  );
}

export default InfoTicker;
