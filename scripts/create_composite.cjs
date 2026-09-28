const sharp = require('sharp');
const fs = require('fs');

async function createHeroComposite() {
  const meta = await sharp('src/assets/hero/hero_model_transparent.png').metadata();
  console.log('Model dimensions:', meta.width, meta.height); // 847 x 1024

  // In the reference image, the arch sits behind the model on the right side.
  // The model is 847 wide and 1024 high.
  // Arch starts at x ~ 300 to 800, top at y ~ 260.
  const svg = `
  <svg width="${meta.width}" height="${meta.height}" xmlns="http://www.w3.org/2000/svg">
    <!-- Tilted bronze wireframe rectangle -->
    <rect x="280" y="270" width="530" height="710" rx="4"
          fill="none" stroke="#9C734B" stroke-width="3"
          transform="rotate(3.5, 545, 625)" opacity="0.65" />
    
    <!-- Saddle Brown Arch (rounded top, flat bottom) -->
    <!-- Center of arc at (550, 480), radius 240, top at 240 -->
    <path d="M 310 520 A 240 240 0 0 1 790 520 L 790 980 L 310 980 Z"
          fill="#744D20" />
  </svg>
  `;

  const bgBuffer = await sharp(Buffer.from(svg))
    .png()
    .toBuffer();

  await sharp(bgBuffer)
    .composite([
      {
        input: 'src/assets/hero/hero_model_transparent.png',
        top: 0,
        left: 0
      }
    ])
    .png({ quality: 100 })
    .toFile('src/assets/hero/hero_model_composite.png');

  console.log('Successfully created hero_model_composite.png!');
}

createHeroComposite().catch(console.error);
