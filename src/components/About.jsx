import { Calendar, Briefcase, Award, ArrowRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const stats = [
    { label: "Años de Experiencia", value: personalInfo.experienceYears, icon: Calendar, color: "text-purple-400 bg-purple-500/10 border-purple-500/20" },
    { label: "Proyectos Realizados", value: personalInfo.completedProjects, icon: Briefcase, color: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20" },
    { label: "Satisfacción & Calidad", value: personalInfo.satisfiedClients, icon: Award, color: "text-sky-400 bg-sky-500/10 border-sky-500/20" }
  ];

  return (
    <section id="sobre-mi" className="py-20 border-t border-zinc-900">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Descripción */}
        <div className="lg:col-span-6 flex flex-col items-start gap-4">
          <span className="text-xs font-mono uppercase tracking-widest text-purple-400 font-semibold">
            Sobre Mí
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
            Apasionado por crear soluciones digitales escalables
          </h2>
          <p className="text-zinc-400 text-base leading-relaxed">
            Como Ingeniero en Sistemas, combino fundamentos de ingeniería, arquitectura de bases de datos y desarrollo moderno en React y Node.js para resolver problemas concretos mediante software rápido y mantenible.
          </p>
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-purple-400 hover:text-purple-300 mt-2 transition-colors"
          >
            Conocer más en mi GitHub
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Bento Stats */}
        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 flex flex-col justify-between hover:border-zinc-700 transition-all"
              >
                <div className={`w-10 h-10 rounded-xl border flex items-center justify-center mb-4 ${stat.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white font-mono">{stat.value}</h3>
                  <p className="text-xs text-zinc-400 mt-1">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}