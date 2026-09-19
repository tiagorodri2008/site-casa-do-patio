import {ArrowUpRight,Instagram,Mail,MessageCircle,Phone} from 'lucide-react';
import {restaurant,Locale} from '@/lib/restaurant';

export function Contact({locale}:{locale:Locale}){
  const pt=locale==='pt';
  const whatsappUrl=restaurant.whatsapp?`https://wa.me/${restaurant.whatsapp.replace(/\D/g,'')}?text=${encodeURIComponent(pt?'Olá! Gostaria de reservar uma mesa.':'Hello! I would like to reserve a table.')}`:undefined;
  const contacts=[
    {icon:Instagram,label:'Instagram',value:restaurant.social.instagram??(pt?'@casadopatio · demo':'@casadopatio · demo'),href:restaurant.social.instagram?`https://instagram.com/${restaurant.social.instagram.replace('@','')}`:undefined},
    {icon:MessageCircle,label:'WhatsApp',value:pt?'Contacto demonstrativo':'Demo contact',href:whatsappUrl},
    {icon:Phone,label:pt?'Telefone':'Phone',value:restaurant.phone??(pt?'Em breve':'Coming soon'),href:restaurant.phone?`tel:${restaurant.phone}`:undefined},
    {icon:Mail,label:'Email',value:restaurant.email??'ola@casadopatio.pt',href:restaurant.email?`mailto:${restaurant.email}`:undefined},
  ];
  return <section className="contact-menu section" id="contacto" aria-labelledby="contact-title"><div className="contact-menu-intro"><div><p className="eyebrow">{pt?'CONTACTOS':'CONTACT'}</p><h2 id="contact-title">{pt?'Falamos à mesa.':'Let’s talk at the table.'}</h2></div><p>{pt?'Para reservas, grupos ou apenas para saber mais, estamos por perto.':'For bookings, groups, or simply to find out more, we are close by.'}</p></div><div className="contact-menu-links">{contacts.map(({icon:Icon,label,value,href})=>href?<a key={label} href={href} target={href.startsWith('http')?'_blank':undefined} rel={href.startsWith('http')?'noopener noreferrer':undefined}><Icon aria-hidden="true" size={20}/><span><small>{label}</small><b>{value}</b></span><ArrowUpRight aria-hidden="true" size={18}/></a>:<div key={label}><Icon aria-hidden="true" size={20}/><span><small>{label}</small><b>{value}</b></span></div>)}</div></section>;
}
