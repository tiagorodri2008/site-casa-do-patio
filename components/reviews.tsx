import {Star} from 'lucide-react';
import {Locale,restaurant} from '@/lib/restaurant';

export function Reviews({locale}:{locale:Locale}) {
  if(!restaurant.features.reviews||restaurant.reviews.length===0)return null;
  const review=restaurant.reviews[0];
  const pt=locale==='pt';
  return <section className="reviews section" aria-labelledby="reviews-title">
    <div><p className="eyebrow">{pt?'REPUTAÇÃO':'REPUTATION'}</p><h2 id="reviews-title">{pt?'O que se diz':'What people'}<br/><em>{pt?'à mesa.':'say at the table.'}</em></h2></div>
    <div className="review-card">
      <div className="review-rating" aria-label={review.rating?`${review.rating} ${review.name}`:review.name}><span aria-hidden="true">{Array.from({length:5},(_,i)=><Star key={i} size={16} fill="currentColor"/>)}</span><strong>{review.rating} {pt?`no ${review.name}`:`on ${review.name}`}</strong>{review.count&&<small>{review.count} {pt?'avaliações':'reviews'}</small>}</div>
      {review.quote&&<blockquote>{review.quote[locale]}</blockquote>}
      <p className="small-note">{review.attribution?.[locale]??review.label[locale]} · {review.label[locale]}</p>
    </div>
  </section>;
}
