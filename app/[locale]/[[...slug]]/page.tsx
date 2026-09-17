import {notFound} from 'next/navigation';
import {Home} from '@/components/home';
import {Shell} from '@/components/shell';
import {RestaurantMenu} from '@/components/menu';
import {Reservation} from '@/components/reservation';
import {Legal} from '@/components/legal';
import {Locale} from '@/lib/restaurant';
import {pageMetadata} from '@/lib/metadata';
type Params={locale:string;slug?:string[]};
export const dynamicParams=false;
export function generateStaticParams(){return ['pt','en'].flatMap(locale=>['','menu','reservas','privacidade','cookies','termos'].map(slug=>({locale,slug:slug?[slug]:[]})))}
export async function generateMetadata({params}:{params:Promise<Params>}){const p=await params;return pageMetadata(p.locale==='en'?'en':'pt',p.slug?.[0]||'')}
export default async function Page({params}:{params:Promise<Params>}){const p=await params;if(!['pt','en'].includes(p.locale)||(p.slug?.length||0)>1)notFound();const l=p.locale as Locale;const slug=p.slug?.[0]||'';if(!slug)return <Home locale={l}/>;if(!['menu','reservas','privacidade','cookies','termos'].includes(slug))notFound();return <Shell locale={l} slug={slug}><main id="main">{slug==='menu'?<RestaurantMenu locale={l}/>:slug==='reservas'?<Reservation locale={l}/>:<Legal locale={l} kind={slug}/>}</main></Shell>}
