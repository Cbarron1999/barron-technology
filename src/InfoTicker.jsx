import React from 'react';

function InfoTicker() {
  const facts = [
    "🔐 46% of all cyber breaches impact businesses with fewer than 1,000 employees. (strongdm.com)",
    "⚠️ 60% of small businesses are concerned about cybersecurity threats, yet only 23% feel very prepared. (mastercard.com)",
    "🚨 94% of SMBs experienced cyberattacks in 2024, up from 73% the previous year. (genatec.com)",
    "☁️ 63% of SMB workloads and 62% of their data are now hosted in the cloud. (spacelift.io)",
    "📊 44% of traditional small businesses use cloud hosting services. (cloudzero.com)"
  ];

  return (
    <div className="bg-[#007bff] text-white py-3 overflow-hidden whitespace-nowrap text-base font-medium">
      <div
        className="animate-marquee-slow hover-pause inline-block min-w-[200%]"
        style={{ willChange: 'transform' }}
      >
        {facts.map((fact, index) => (
          <span key={index} className="mx-6">{fact}</span>
        ))}
      </div>
    </div>
  );
}

export default InfoTicker;
