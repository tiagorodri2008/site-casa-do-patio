import Image from 'next/image';
import {restaurant} from '@/lib/restaurant';
type PhotoKind='hero'|'dish'|'table'|'service'|'brasa'|'patioEvening';
const generatedImages={service:'/images/service',brasa:'/images/brasa',patioEvening:'/images/patio-evening'} as const;
export function Photo({kind,alt,priority=false,className=''}:{kind:PhotoKind;alt:string;priority?:boolean;className?:string}){const src=kind in generatedImages?`${generatedImages[kind as keyof typeof generatedImages]}-1200.webp`:`${restaurant.images[kind as 'hero'|'dish'|'table']}-1200.webp`;const ratio=kind==='service'||kind==='patioEvening'?4/5:kind==='hero'||kind==='brasa'?16/9:3/2;const sizes=kind==='hero'||kind==='brasa'?'100vw':'(max-width: 760px) 100vw, 50vw';return <Image className={className} src={src} sizes={sizes} alt={alt} width={1600} height={Math.round(1600/ratio)} priority={priority} unoptimized/>}
