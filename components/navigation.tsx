'use client';

import {useEffect,useRef,useState} from 'react';
import {ArrowUpRight,CalendarDays,Menu,Moon,Phone,Sun,Utensils,X} from 'lucide-react';
import {copy} from '@/lib/copy';
import {Locale,route,restaurant} from '@/lib/restaurant';
import {trackRestaurantEvent} from '@/lib/analytics';

export function Header({locale,slug=''}:{locale:Locale;slug?:string}) {
  const [open,setOpen]=useState(false);
  const [hidden,setHidden]=useState(false);
  const [theme,setTheme]=useState<'light'|'dark'>('light');
  const previousScroll=useRef(0);
  const home=route(locale);
  const visit=locale==='pt'?'Visitar':'Visit';

  useEffect(()=>{
    const saved=window.localStorage.getItem('casa-theme');
    const preferred=saved==='dark'||saved==='light'?saved:window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';
    setTheme(preferred);
  },[]);

  useEffect(()=>{
    document.documentElement.dataset.theme=theme;
    document.documentElement.style.colorScheme=theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content',theme==='dark'?'#17130f':'#f4efe4');
    window.localStorage.setItem('casa-theme',theme);
  },[theme]);

  useEffect(()=>{
    const onScroll=()=>{
      const current=window.scrollY;
      if(open||current<24){setHidden(false);previousScroll.current=current;return;}
      if(Math.abs(current-previousScroll.current)>10){setHidden(current>previousScroll.current);previousScroll.current=current;}
    };
    window.addEventListener('scroll',onScroll,{passive:true});
    return()=>window.removeEventListener('scroll',onScroll);
  },[open]);

  useEffect(()=>{
    if(!open)return;
    const closeOnEscape=(event:KeyboardEvent)=>{if(event.key==='Escape')setOpen(false);};
    document.addEventListener('keydown',closeOnEscape);
    return()=>document.removeEventListener('keydown',closeOnEscape);
  },[open]);

  const dark=theme==='dark';
  const themeLabel=dark?(locale==='pt'?'Modo claro':'Light mode'):(locale==='pt'?'Modo escuro':'Dark mode');
  const toggleTheme=()=>setTheme(dark?'light':'dark');
  return <>
    <a className="skip-link" href="#main">{copy.skip[locale]}</a>
    <header className={`header${hidden?' header-hidden':''}`}>
      <a className="brand" href={home} aria-label="Casa do Pátio">casa do pátio<span>{copy.tagline[locale]}</span></a>
      <nav aria-label={locale==='pt'?'Navegação principal':'Main navigation'}>
        <a aria-current={slug===''?'page':undefined} href={`${home}#casa`}>{copy.navRestaurant[locale]}</a>
        <a aria-current={slug==='menu'?'page':undefined} href={route(locale,'menu')}>{copy.navMenu[locale]}</a>
        <a href={`${home}#visitar`}>{visit}</a>
      </nav>
      <div className="header-actions">
        <div className="languages" aria-label={locale==='pt'?'Idioma':'Language'}><a href={route('pt',slug)} hrefLang="pt" aria-current={locale==='pt'?'true':undefined}>PT</a><span>/</span><a href={route('en',slug)} hrefLang="en" aria-current={locale==='en'?'true':undefined}>EN</a></div>
        <button className="theme-toggle" type="button" aria-pressed={dark} aria-label={dark?(locale==='pt'?'Ativar modo claro':'Use light mode'):(locale==='pt'?'Ativar modo escuro':'Use dark mode')} onClick={toggleTheme}>{dark?<Sun size={17}/>:<Moon size={17}/>}<span>{themeLabel}</span></button>
        {restaurant.features.reservations&&<a className="header-reservation" href={route(locale,'reservas')} onClick={()=>trackRestaurantEvent('reservation_click',{placement:'header'})}>{copy.book[locale]}<ArrowUpRight size={16}/></a>}
        <button className="mobile-toggle" type="button" aria-expanded={open} aria-controls="mobile-nav" aria-label={open?(locale==='pt'?'Fechar navegação':'Close navigation'):(locale==='pt'?'Abrir navegação':'Open navigation')} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
      </div>
    </header>
    {open&&<nav className="mobile-nav" id="mobile-nav" aria-label={locale==='pt'?'Navegação móvel':'Mobile navigation'}>
      <a onClick={()=>setOpen(false)} href={`${home}#casa`}>{copy.navRestaurant[locale]}</a><a onClick={()=>setOpen(false)} href={route(locale,'menu')}>{copy.navMenu[locale]}</a><a onClick={()=>setOpen(false)} href={`${home}#visitar`}>{visit}</a><a onClick={()=>setOpen(false)} href={route(locale,'reservas')}>{copy.book[locale]}</a><a onClick={()=>setOpen(false)} href={`${home}#contacto`}>{locale==='pt'?'Contactos':'Contact'}</a><button className="mobile-theme-toggle" type="button" aria-pressed={dark} onClick={toggleTheme}>{dark?<Sun size={17}/>:<Moon size={17}/>} {themeLabel}</button>
    </nav>}
  </>;
}

export function MobileActions({locale,slug=''}:{locale:Locale;slug?:string}) {
  if(slug==='reservas')return null;
  const pt=locale==='pt';
  return <nav className="mobile-actions" aria-label={pt?'Ações rápidas':'Quick actions'}>
    {restaurant.mobileActions.map(action=>action==='menu'?<a key={action} href={route(locale,'menu')} onClick={()=>trackRestaurantEvent('menu_view',{placement:'mobile'})}><Utensils size={17}/>{copy.menu[locale]}</a>:action==='phone'?<a key={action} href={restaurant.phone?`tel:${restaurant.phone}`:'#contacto'} onClick={()=>trackRestaurantEvent('phone_click',{configured:Boolean(restaurant.phone)})}><Phone size={17}/>{pt?'Ligar':'Call'}</a>:action==='reserve'?<a key={action} className="mobile-primary" href={route(locale,'reservas')} onClick={()=>trackRestaurantEvent('reservation_click',{placement:'mobile'})}><CalendarDays size={17}/>{copy.book[locale]}</a>:null)}
  </nav>;
}
