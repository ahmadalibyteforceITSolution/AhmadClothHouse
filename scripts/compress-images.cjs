/**
 * compress-images.cjs
 * Compresses all PNG/JPG images in src/assets/ai_new/ to optimized JPG
 * using sharp. Reduces images from ~900KB each to ~80-150KB.
 * Run: node scripts/compress-images.cjs
 */
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const INPUT_DIR = path.join(__dirname, '..', 'src', 'assets', 'ai_new');

const files = fs.readdirSync(INPUT_DIR).filter(f => /\.(png|jpg|jpeg)$/i.test(f));

let totalBefore = 0;
let totalAfter = 0;

async function compressAll() {
  for (const file of files) {
    const inputPath = path.join(INPUT_DIR, file);
    const ext = path.extname(file).toLowerCase();
    
    // Output as optimized JPG (great for photos/generated images)
    const outputName = file.replace(/\.(png|jpeg)$/i, '.jpg');
    const outputPath = path.join(INPUT_DIR, outputName);
    
    const beforeSize = fs.statSync(inputPath).size;
    totalBefore += beforeSize;

    try {
      await sharp(inputPath)
        .resize({ width: 1200, withoutEnlargement: true }) // max 1200px wide
        .jpeg({ quality: 72, progressive: true, mozjpeg: true })
        .toFile(outputPath + '.tmp');

      const afterSize = fs.statSync(outputPath + '.tmp').size;
      totalAfter += afterSize;

      const saving = (((beforeSize - afterSize) / beforeSize) * 100).toFixed(1);
      console.log(`✅ ${file.padEnd(40)} ${(beforeSize/1024).toFixed(0).padStart(6)}KB → ${(afterSize/1024).toFixed(0).padStart(5)}KB  (saved ${saving}%)`);

      // Replace original with compressed version
      fs.renameSync(outputPath + '.tmp', outputPath);
      
      // Delete original PNG if we converted it to JPG
      if (ext === '.png' && outputName !== file) {
        fs.unlinkSync(inputPath);
        console.log(`   🗑️  Removed original: ${file}`);
      }
    } catch (err) {
      console.error(`❌ Failed: ${file} — ${err.message}`);
    }
  }

  console.log('\n══════════════════════════════════════════════');
  console.log(`Total BEFORE: ${(totalBefore/1024/1024).toFixed(2)} MB`);
  console.log(`Total AFTER:  ${(totalAfter/1024/1024).toFixed(2)} MB`);
  console.log(`💾 Space saved: ${((totalBefore - totalAfter)/1024/1024).toFixed(2)} MB (${(((totalBefore-totalAfter)/totalBefore)*100).toFixed(1)}% reduction)`);
}

compressAll();
