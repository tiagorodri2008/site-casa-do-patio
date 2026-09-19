import sharp from 'sharp';
import fs from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
await fs.mkdir('public/images',{recursive:true});
const sourceDir = fileURLToPath(new URL('../assets/source/', import.meta.url));
const imageSpecs={courtyard:16/9,octopus:3/2,table:3/2,service:4/5,brasa:16/9,'patio-evening':4/5};
for(const [name,aspect] of Object.entries(imageSpecs)){
  for(const width of [640,1200,1600]){
    const height = Math.round(width / aspect);
    await sharp(`${sourceDir}/${name}.png`)
      .resize({width, height, fit:'cover', position:'centre'})
      .webp({quality:83})
      .toFile(`public/images/${name}-${width}.webp`);
  }
}
console.log('Responsive WebP assets prepared');
