export function lisbonDate(now=new Date()){return new Intl.DateTimeFormat('en-CA',{timeZone:'Europe/Lisbon',year:'numeric',month:'2-digit',day:'2-digit'}).format(now);}
export function validateBooking({date,time,guests},now=new Date()){
 if(!/^\d{4}-\d{2}-\d{2}$/.test(date||''))return 'date';
 const parsed=new Date(`${date}T12:00:00Z`);
 if(!Number.isFinite(+parsed)||parsed.toISOString().slice(0,10)!==date)return 'date';
 if(date<lisbonDate(now))return 'past';
 const limit=new Date(now);limit.setUTCDate(limit.getUTCDate()+90);
 if(date>lisbonDate(limit))return 'future';
 if(parsed.getUTCDay()===1)return 'closed';
 if(!['12:30','13:00','13:30','14:00','19:00','19:30','20:00','20:30','21:00','21:30'].includes(time))return 'time';
 if(!Number.isInteger(Number(guests))||Number(guests)<1||Number(guests)>8)return 'guests';
 if(date===lisbonDate(now)){const current=new Intl.DateTimeFormat('en-GB',{timeZone:'Europe/Lisbon',hour:'2-digit',minute:'2-digit',hour12:false}).format(now);if(time<=current)return 'elapsed';}
 return null;
}
