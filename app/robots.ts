import type {MetadataRoute} from 'next';
import {restaurant} from '@/lib/restaurant';
export const dynamic='force-static';
export default function robots():MetadataRoute.Robots{return {rules:{userAgent:'*',disallow:restaurant.demo?'/':undefined,allow:restaurant.demo?undefined:'/'},sitemap:`${restaurant.origin}/sitemap.xml`}}
