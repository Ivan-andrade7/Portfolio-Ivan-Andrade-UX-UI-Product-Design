import { ArrowUpRight } from "lucide-react";

export default function CtaFinal() {
  return (
    <section className="home-final home-container" aria-labelledby="final-heading">
      <p className="home-kicker">El próximo paso</p>
      <h2 id="final-heading">¿Diseñamos<br /><em>lo que sigue?</em></h2>
      <div className="home-final-paths">
        <div><h3>Oportunidades y colaboración</h3><p>Abierto a oportunidades full-time y colaboración profesional en UX/UI y Product Design.</p><a href="#oportunidad-laboral" className="home-text-link">Conversar sobre una oportunidad o colaboración <ArrowUpRight size={18} aria-hidden /></a></div>
      </div>
    </section>
  );
}
