import {restaurant} from '@/lib/restaurant';

type PhotoKind='hero'|'dish'|'table'|'service'|'brasa'|'patioEvening';
const generatedImages={service:'/images/service',brasa:'/images/brasa',patioEvening:'/images/patio-evening'} as const;

export function Photo({kind,alt,priority=false,className=''}:{kind:PhotoKind;alt:string;priority?:boolean;className?:string}) {
  const base=kind in generatedImages?generatedImages[kind as keyof typeof generatedImages]:restaurant.images[kind as 'hero'|'dish'|'table'];
  const ratio=kind==='service'||kind==='patioEvening'?4/5:kind==='hero'||kind==='brasa'?16/9:3/2;
  const sizes=kind==='hero'||kind==='brasa'?'100vw':'(max-width: 760px) 100vw, 50vw';
  return <img className={className} src={`${base}-1200.webp`} srcSet={`${base}-640.webp 640w, ${base}-1200.webp 1200w, ${base}-1600.webp 1600w`} sizes={sizes} alt={alt} width={1600} height={Math.round(1600/ratio)} loading={priority?'eager':'lazy'} fetchPriority={priority?'high':'auto'} decoding="async"/>;
}
