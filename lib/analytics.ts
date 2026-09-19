export type RestaurantEvent='menu_view'|'reservation_click'|'reservation_started'|'reservation_completed'|'phone_click'|'whatsapp_click'|'directions_click'|'order_started'|'order_completed';

export function trackRestaurantEvent(event:RestaurantEvent,detail:Record<string,string|number|boolean>={}) {
  if(typeof window==='undefined')return;
  window.dispatchEvent(new CustomEvent('restaurant:event',{detail:{event,...detail}}));
}
