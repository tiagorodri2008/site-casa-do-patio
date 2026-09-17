import type {MetadataRoute} from 'next';
import {restaurant,route,Locale} from '@/lib/restaurant';
export const dynamic='force-static';
export default function sitemap():MetadataRoute.Sitemap{return (['pt','en'] as Locale[]).flatMap(locale=>['','menu','reservas','privacidade','cookies','termos'].map(slug=>({url:restaurant.origin+route(locale,slug),alternates:{languages:{'pt-PT':restaurant.origin+route('pt',slug),en:restaurant.origin+route('en',slug)}}}))) }
