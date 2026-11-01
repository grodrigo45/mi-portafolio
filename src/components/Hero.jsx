import { ArrowUpRight, Download, Terminal } from 'lucide-react';
import CodeCard from './CodeCard';
import { personalInfo, techIcons } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="inicio" className="relative pt-12 pb-20 overflow-hidden">
      {/* Resplandor violeta de fondo */}
      <div className="absolute top-1/4 right-5 w-80 h-80 bg-purple-600/15 blur-[120px] rounded-full pointer-events-none -z-10"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Columna Izquierda: Presentación */}
        <div className="lg:col-span-7 flex flex-col items-start gap-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-400 text-xs font-semibold tracking-wider uppercase">
            <Terminal className="w-3.5 h-3.5" />
            {personalInfo.role}
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
            Hola, soy <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">{personalInfo.name}</span>.<br />
            {personalInfo.subtitle}
          </h1>

          <p className="text-zinc-400 text-base sm:text-lg max-w-xl leading-relaxed">
            {personalInfo.description}
          </p>

          {/* Botones de acción */}
          <div className="flex flex-wrap items-center gap-4 mt-2">
            <a
              href="#proyectos"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold shadow-lg shadow-purple-600/25 transition-all hover:scale-105 active:scale-95"
            >
              Ver Proyectos
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-800 font-semibold transition-all hover:scale-105 active:scale-95"
            >
              Descargar CV
              <Download className="w-4 h-4" />
            </a>
          </div>

          {/* Barra de tecnologías que manejo */}
          <div className="mt-8 pt-6 border-t border-zinc-900 w-full">
            <p className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-3">
              Tecnologías con las que trabajo:
            </p>
            <div className="flex flex-wrap gap-2.5">
              {techIcons.map((tech) => (
                <span
                  key={tech.name}
                  className={`px-3 py-1.5 rounded-lg border text-xs font-mono font-bold flex items-center gap-1.5 ${tech.bg}`}
                >
                  <span>{tech.symbol}</span>
                  <span className="text-zinc-300 font-sans">{tech.name}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Columna Derecha: Tarjeta de Código */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <CodeCard />
        </div>
      </div>
    </section>
  );
}