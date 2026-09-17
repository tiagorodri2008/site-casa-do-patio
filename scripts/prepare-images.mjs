import sharp from 'sharp';
import fs from 'node:fs/promises';
await fs.mkdir('public/images',{recursive:true});
for(const name of ['courtyard','octopus','table']){for(const width of [640,1200,1600]){await sharp(`C:/Users/tiago/Documents/Codex/casa-patio-assets/${name}.png`).resize({width,withoutEnlargement:true}).webp({quality:83}).toFile(`public/images/${name}-${width}.webp`);}}
console.log('9 responsive WebP assets prepared');
