import type { Metadata } from 'next';
import './globals.css';
import './details.css';
export const metadata: Metadata = { title:'Casa do Pátio — Cozinha portuguesa, à nossa mesa', description:'Cozinha portuguesa contemporânea, de estação e para partilhar. Uma demonstração no coração do Príncipe Real, Lisboa.', robots: {index:false, follow:false}, icons:{icon:'/favicon.svg'} };
export default function Layout({children}:{children:React.ReactNode}) { return <html lang="pt-PT"><body>{children}</body></html>; }
