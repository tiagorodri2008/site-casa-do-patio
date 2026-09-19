import {ArrowUpRight} from 'lucide-react';
import {Locale,route} from '@/lib/restaurant';
import {Photo} from './photo';

export function ReservationCta({locale}:{locale:Locale}) {
  const pt=locale==='pt';
  return <section className="reservation-cta"><Photo kind="patioEvening" alt={pt?'Pátio ao anoitecer. Imagem de demonstração.':'Courtyard at twilight. Demonstration image.'}/><div><p className="eyebrow">{pt?'A MESA ESPERA':'THE TABLE AWAITS'}</p><h2>{pt?'Uma mesa':'A table'}<br/><em>{pt?'à sua espera.':'waiting for you.'}</em></h2><a className="button" href={route(locale,'reservas')}>{pt?'Reservar mesa':'Book a table'}<ArrowUpRight size={17}/></a></div></section>;
}
