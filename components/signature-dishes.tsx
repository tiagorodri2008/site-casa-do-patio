import {ArrowUpRight} from 'lucide-react';
import {Locale,money,restaurant,route} from '@/lib/restaurant';
import {Photo} from './photo';

export function SignatureDishes({locale}:{locale:Locale}) {
  const pt=locale==='pt';
  const dishes=[restaurant.menu[0].items[1],restaurant.menu[1].items[0],restaurant.menu[2].items[0]];
  return <section className="section signature-dishes" id="mesa" aria-labelledby="signature-title">
    <div className="section-intro">
      <div><p className="eyebrow">{pt?'PRATOS ASSINATURA':'SIGNATURE DISHES'}</p><h2 id="signature-title">{pt?'A comida chega':'The food arrives'}<br/><em>{pt?'primeiro à mesa.':'at the table first.'}</em></h2></div>
      <p className="section-description">{pt?'Três razões para começar devagar: produto de estação, fogo atento e pratos feitos para partilhar.':'Three reasons to take your time: seasonal produce, attentive fire and plates made for sharing.'}</p>
    </div>
    <div className="featured-grid">
      <a className="feature-photo" href={route(locale,'menu')}><Photo kind="dish" alt={pt?'Polvo grelhado com batata e azeite. Imagem de demonstração.':'Grilled octopus with potatoes and olive oil. Demonstration image.'}/><span className="photo-label">{pt?'VER MENU COMPLETO':'VIEW FULL MENU'}<ArrowUpRight size={20}/></span></a>
      <div className="featured-menu">{dishes.map(item=><article key={item.id}><div><h3>{item.name[locale]}</h3><span>{money(item.price,locale)}</span></div><p>{item.description[locale]}</p></article>)}<a className="text-link" href={route(locale,'menu')}>{pt?'Conhecer o menu completo':'Discover the full menu'}<ArrowUpRight size={17}/></a></div>
    </div>
  </section>;
}
