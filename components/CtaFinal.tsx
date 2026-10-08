import { ArrowUpRight } from "lucide-react";

export default function CtaFinal() {
  return (
    <section className="home-final home-container" aria-labelledby="final-heading">
      <p className="home-kicker">El próximo paso</p>
      <h2 id="final-heading">¿Diseñamos<br /><em>lo que sigue?</em></h2>
      <div className="home-final-paths">
        <div><h3>Un lugar en tu equipo</h3><p>Abierto a oportunidades full-time en UX/UI y Product Design.</p><a href="#oportunidad-laboral" className="home-text-link">Conversar sobre una oportunidad <ArrowUpRight size={18} aria-hidden /></a></div>
        <div><h3>Una web para tu proyecto</h3><p>Contame qué necesitás. Evaluamos el objetivo y el alcance.</p><a href="#consulta-web" className="home-text-link">Consultar por una web <ArrowUpRight size={18} aria-hidden /></a></div>
      </div>
    </section>
  );
}
