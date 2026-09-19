const stockVideo = 'https://assets.mixkit.co/videos/4118/4118-720.mp4';

export function HeroFilm({alt}:{alt:string}){
  return <video className="hero-film" autoPlay muted loop playsInline preload="auto" poster="/images/brasa-1200.webp" aria-label={alt}>
    <source src={stockVideo} type="video/mp4"/>
  </video>;
}
